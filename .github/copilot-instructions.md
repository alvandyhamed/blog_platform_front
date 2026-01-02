# AI Coding Assistant Instructions

## Project Overview
This is a Next.js 16 blog frontend with Persian localization, featuring dual authentication (NextAuth + custom token-based), atomic component design, and Tailwind CSS theming.

## Architecture
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with Persian (fa) locale
- **Styling**: Tailwind CSS 4 with custom theme variables and IRANSansX font
- **Components**: Atomic design (ui → molecules → organisms → templates)
- **Auth**: NextAuth for Google OAuth + custom AuthProvider for backend token auth
- **Backend**: API proxy to `http://api.blog.local:8095`

## Key Patterns
- **Paths**: Use `@/*` for `src/`, `@lib/*` for `lib/`
- **Auth Roles**: `admin` (hardcoded `admin@example.com`), `writer`, `user` (from backend)
- **Guards**: Wrap admin routes with `<AdminGuard>` using `useRole()` hook
- **Themes**: CSS variables in `themes.css`, toggle with `next-themes`
- **Fonts**: IRANSansX loaded in `globals.css`
- **Date Formatting**: Use `formatDate()` from `lib/utils.ts` for Persian dates

## Authentication Flow
1. Google OAuth via NextAuth redirects to `/auth`
2. Backend validates and returns JWT token
3. Frontend receives `?login=success&token=...` on home page
4. `AuthProvider.login(token)` stores user data from `/api/auth/user`

## Component Examples
- **Layout**: `<MainLayout withSidebar sidebar={<Sidebar />}>`
- **Forms**: Use `react-hook-form` with `@hookform/resolvers/zod`
- **Markdown**: `<ReactMarkdown>` with `remark-gfm` (when implemented)
- **Buttons**: `<Button variant="primary" size="md">`

## Development Workflow
- **Start**: `npm run dev` (localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (ESLint)
- **Google OAuth**: Configure in Google Cloud Console, redirect URIs: `http://localhost:3000/auth`

## File Structure Conventions
- **Pages**: `src/app/` with route groups like `(auth)/`
- **Components**: `src/components/` organized by atomic level
- **Lib**: `lib/` for utilities, hooks, auth config
- **Types**: `types/` for shared interfaces
- **Styles**: `src/styles/` with theme imports

## Common Tasks
- **Add Article**: Use `ArticleForm` molecule with `react-hook-form`
- **Protect Route**: Import `AdminGuard` and wrap content
- **Fetch Data**: Use `axios` or `fetch` with auth headers
- **Theme Toggle**: Use `ThemeSwitcher` component

## Notes
- Mock data in `src/data/mock-articles.ts` for development
- Persian text throughout UI and comments
- Images from Google domains allowed in `next.config.ts`