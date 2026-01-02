'use client'

import { useEffect } from 'react'

export default function AuthCallbackPage() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        console.log('Received code:', code)


        if (!code) return

        const redirectUri = `${window.location.origin}/auth/callback`

        fetch('/api/auth/callback/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, redirectUri }),
        })
            .then(async (res) => {
                if (!res.ok) {
                    const text = await res.text() // محتوای ارور رو بخون
                    throw new Error(`Server error (${res.status}): ${text}`)
                }

                const contentType = res.headers.get('content-type')
                if (!contentType?.includes('application/json')) {
                    throw new Error('Invalid content-type from server')
                }

                return res.json()
            })
            .then((data) => {
                const token = data.token
                console.log('Received token:', token)

                if (token && window.opener) {
                    window.opener.postMessage({ type: 'auth-success', token }, window.origin)
                    window.close()
                }
            })
            .catch((err) => {
                console.error('Auth callback error:', err)
            })


    }, [])

    return (
        <p className="text-center mt-10">
            در حال انتقال اطلاعات ورود...
        </p>
    )
}