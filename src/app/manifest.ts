import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prompt Techies',
    short_name: 'Prompt Techies',
    description: 'An AI-first technology company building intelligent software, AI products, automation solutions, and developer platforms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00c8ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
