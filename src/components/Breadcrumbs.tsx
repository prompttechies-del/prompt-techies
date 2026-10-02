import Link from 'next/link';

type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="absolute top-32 md:top-24 left-0 right-0 z-20 px-6 pointer-events-none"
    >
      <ol className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-2 text-xs text-white/60 pointer-events-auto">
        <li>
          <Link href="/" className="inline-block py-2 hover:text-white transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-white/30">/</span>
              {item.href && !last ? (
                <Link href={item.href} className="inline-block py-2 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className="text-white/90">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
