# راهنمای تنظیم Google OAuth

## مشکل: redirect_uri_mismatch

این خطا زمانی رخ می‌دهد که redirect URI که در کد استفاده می‌شود با redirect URI که در Google Cloud Console ثبت شده مطابقت ندارد.

## راه حل:

### 1. ثبت Redirect URI در Google Cloud Console

1. به [Google Cloud Console](https://console.cloud.google.com/) بروید
2. پروژه خود را انتخاب کنید
3. به **APIs & Services** > **Credentials** بروید
4. OAuth 2.0 Client ID خود را پیدا کنید (یا یک مورد جدید ایجاد کنید)
5. در بخش **Authorized redirect URIs**، این URI ها را اضافه کنید:

```
http://localhost:3000/auth
http://127.0.0.1:3000/auth
```

اگر در production هم استفاده می‌کنید، دامنه production را هم اضافه کنید:
```
https://yourdomain.com/auth
```

### 2. بررسی Client ID

مطمئن شوید که Client ID در کد با Client ID در Google Cloud Console یکسان است:
- در کد: `107360845446-s2fgn9o68u8asune4dfec7ol7nqak6a2.apps.googleusercontent.com`
- در Google Cloud Console: باید همین مقدار باشد

### 3. نکات مهم

- Redirect URI باید دقیقاً مطابق باشد (با یا بدون trailing slash)
- اگر از `localhost` استفاده می‌کنید، `http://127.0.0.1:3000/auth` را هم اضافه کنید
- بعد از تغییر redirect URI در Google Cloud Console، ممکن است چند دقیقه طول بکشد تا تغییرات اعمال شود

### 4. تست

بعد از ثبت redirect URI:
1. صفحه را refresh کنید
2. دوباره روی دکمه "ورود با گوگل" کلیک کنید
3. باید به صفحه Google OAuth redirect شوید و بعد از تایید، به `/auth?code=...` برگردید

