# Google Search Console & Search Engine Verification Guide

## 1. Domain Property Verification (DNS TXT Record)
Add a TXT record to your DNS provider (Cloudflare, GoDaddy, Namecheap, Hostinger, etc.):
- **Name/Host**: `@` (or leave blank)
- **Type**: `TXT`
- **Value**: `google-site-verification=YOUR_VERIFICATION_TOKEN`

## 2. HTML Meta Tag Verification
If verifying via HTML Tag in Google Search Console:
Add your verification code into `.env.local` or environment variables:
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_verification_code_here
```

## 3. Google Analytics & Clarity Setup
Add your IDs in environment variables:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
```
