// src/components/organisms/Footer.tsx

export default function Footer() {
    return (
      <footer className="border-t border-border py-6 text-center text-sm text-text-secondary">
        <p>© {new Date().getFullYear()} امنیت‌وب. تمام حقوق محفوظ است.</p>
      </footer>
    )
  }