// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

// Пример метаданных (SEO)
export const metadata: Metadata = {
  title: 'N1 Casino – Κορυφαία εμπειρία',
  description: 'Online gaming platform...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="K37Bu6n7t7X-qDZONcRf5sZG1kgkb3u8Qx5zBBENMoY" />
      <body>
        {/* Шапка сайта */}
        <Header />
        
        {/* Содержимое конкретной страницы */}
        {children}
        
        {/* Подвал */}
        <Footer />
      </body>
    </html>
  );
}
