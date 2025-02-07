// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MyCasino Clone',
  description: 'A Next.js + Tailwind CSS casino clone using the app directory structure',
}

function Header() {
  return (
    <header className="bg-primary text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-xl font-bold">Winshark</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-secondary">ΕΓΓΡΑΦΗ</a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">ΣΥΝΔΕΣΗ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Winshark. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
            <a href="https://nationalcasino.gr/" className="hover:text-secondary">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
