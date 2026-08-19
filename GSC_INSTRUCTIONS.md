# Google Search Console Verification Instructions

This document provides step-by-step instructions to verify the Prompt Techies website in Google Search Console (GSC).

## Method 1: Domain Property Verification (Recommended for full coverage)

The Domain Property method covers all subdomains (e.g., `www.prompttechies.in` and `prompttechies.in`) and both HTTP/HTTPS protocols.

1. Go to [Google Search Console](https://search.google.com/search-console/welcome).
2. Under **Select property type**, choose **Domain**.
3. Enter your domain: `prompttechies.in` and click **Continue**.
4. Google will provide a **TXT record** string (it looks like `google-site-verification=...`).
5. Copy this TXT record.
6. Log in to your Domain Registrar (e.g., GoDaddy, Namecheap, Route53, Hostinger).
7. Navigate to your DNS Management / DNS Zone Editor.
8. Add a new DNS record with the following details:
   - **Type**: `TXT`
   - **Name/Host**: `@` (or leave blank depending on the registrar)
   - **Value**: [Paste the string from step 5]
   - **TTL**: Default / 1 Hour
9. Save the DNS record. Note that DNS changes can take a few minutes to propagate.
10. Return to Google Search Console and click **Verify**.

---

## Method 2: URL Prefix Property Verification (HTML Tag)

If you cannot edit DNS records, you can verify via HTML Meta Tag. We have already configured the codebase to support this.

1. Go to [Google Search Console](https://search.google.com/search-console/welcome).
2. Under **Select property type**, choose **URL prefix**.
3. Enter the exact URL: `https://prompttechies.in` (and repeat for `https://www.prompttechies.in` if necessary) and click **Continue**.
4. Scroll down to **Other verification methods** and select **HTML tag**.
5. Copy the tag provided. It will look something like this:
   `<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />`
6. Extract **only the code** from the `content` attribute (e.g., `YOUR_VERIFICATION_CODE_HERE`).
7. In your hosting environment (Vercel, Netlify, etc.), add a new Environment Variable:
   - **Key**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value**: [Paste the extracted code]
8. Save the environment variable and trigger a new deployment of the website.
9. Once the deployment finishes, return to Google Search Console and click **Verify**.

---

## After Verification

Once verified, follow these steps to submit your newly generated sitemap:
1. In the left sidebar of Google Search Console, click on **Sitemaps**.
2. Under **Add a new sitemap**, enter `sitemap.xml`.
3. Click **Submit**.
4. Ensure the status reads **Success**. (It may say "Couldn't fetch" initially; simply refresh the page or check back in an hour).
