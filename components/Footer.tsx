'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-n1gray text-center py-6">
      {/* Navigation / Directory */}
      <nav className="mb-2">
        <ul className="inline-flex space-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          {/* Open sitemap in a new tab (optional) */}
          <li>
            <Link href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              Sitemap
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer Text */}
      <p className="text-sm text-white">
        © 2025 N1 Casino. Με την επιφύλαξη παντός δικαιώματος.
      </p>
    </footer>
  );
}
