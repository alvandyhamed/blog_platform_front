import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  // اگر خطایی از Google آمده
  if (error) {
    return NextResponse.redirect(
      new URL(`/auth?error=${encodeURIComponent(error)}`, request.url)
    )
  }

  // اگر code وجود ندارد
  if (!code) {
    return NextResponse.redirect(
      new URL('/auth?error=no_code', request.url)
    )
  }

  try {
    // ارسال code به بک‌اند
    const origin = request.nextUrl.origin
    const redirectUri = `${origin}/api/auth/callback/google`
    
    console.log('Sending code to backend:', { code, redirectUri })
    
    const response = await fetch('http://api.blog.local:8095/api/Auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code,
        redirectUri,
      }),
    })

    console.log('Backend response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Backend error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      let errorMessage = 'خطا در ورود'
      try {
        const errorData = JSON.parse(errorText)
        errorMessage = errorData.message || errorData.error || errorMessage
      } catch {
        if (errorText) {
          errorMessage = errorText.length > 100 ? 'خطا در ارتباط با سرور' : errorText
        }
      }
      return NextResponse.redirect(
        new URL(`/auth?error=${encodeURIComponent(errorMessage)}`, request.url)
      )
    }

    const data = await response.json()
    console.log('Backend response data:', { hasToken: !!data.token, keys: Object.keys(data) })

    if (data.token) {
      // ذخیره token در cookie
      const cookieStore = await cookies()
      cookieStore.set('token', data.token, {
        httpOnly: false, // باید false باشد تا از client-side قابل دسترسی باشد
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 روز
        path: '/',
      })

      // Redirect به صفحه اصلی با token در query (برای سازگاری با localStorage)
      const redirectUrl = new URL('/?login=success', request.url)
      redirectUrl.searchParams.set('token', data.token)
      return NextResponse.redirect(redirectUrl)
    } else {
      return NextResponse.redirect(
        new URL('/auth?error=no_token', request.url)
      )
    }
  } catch (err) {
    console.error('Google callback error:', err)
    const errorMessage = err instanceof Error ? err.message : 'خطا در ارتباط با سرور'
    return NextResponse.redirect(
      new URL(`/auth?error=${encodeURIComponent(errorMessage)}`, request.url)
    )
  }
}

