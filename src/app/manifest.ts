import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prompt Techies',
    short_name: 'Prompt Techies',
    description: 'A student-focused technology and innovation ecosystem for AI, startups, and real-world projects.',
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
      // You should add 192x192 and 512x512 icons to your public folder for full PWA support
    ],
  };
}
