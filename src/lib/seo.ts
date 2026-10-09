import type { Metadata } from 'next';
import { baseUrl } from '@/data/seoData';

export const OG_IMAGE = {
  url: `${baseUrl}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Prompt Techies — AI workshops, hackathons and startup building for student developers',
};

type Options = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
};

/** One place that guarantees a unique title, description, canonical and social-share card per page. */
export function buildMetadata({ title, description, path, keywords, noindex }: Options): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Prompt Techies',
      locale: 'en_IN',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
