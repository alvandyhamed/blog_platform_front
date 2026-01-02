'use client'

import { useEffect } from 'react'

export default function AuthCallbackPage() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')

        if (token && window.opener) {
            window.opener.postMessage(
                {
                    type: 'auth-success',
                    token,
                },
                window.origin
            )
            window.close()
        }
    }, [])

    return <p className="text-center mt-10">در حال انتقال اطلاعات ورود...</p>
}