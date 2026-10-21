'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const linkColor = (href: string) => pathname === href ? '#E8622A' : '#1B2B5E';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="w-7 h-7" style={{ color: '#E8622A' }} />
            <span className="text-2xl font-extrabold" style={{ color: '#1B2B5E' }}>GH Trial</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {([['/', 'Home'], ['/about', 'Why Us?'], ['/contact', 'Contact'], ['/privacy', 'Privacy'], ['/terms', 'Terms']] as [string, string][]).map(([href, label]) => (
              <Link key={href} href={href} style={{ color: linkColor(href) }} className="hover:opacity-80 px-4 py-2 rounded-md text-sm font-medium">
                {label}
              </Link>
            ))}
            <Link href="/signup" className="ml-4 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: '#E8622A' }}>
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
