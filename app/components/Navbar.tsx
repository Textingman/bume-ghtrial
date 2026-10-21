'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Why Us?' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: '#E8E4DF' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Shield SVG logo (inline fallback if image not loaded) */}
            <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0L0 7V20C0 30.5 7.8 40 18 40C28.2 40 36 30.5 36 20V7L18 0Z" fill="#1C2E5B"/>
              <path d="M18 4L4 10V20C4 28.5 10.4 36.5 18 38C25.6 36.5 32 28.5 32 20V10L18 4Z" fill="#1C2E5B"/>
              <path d="M18 8L8 13V20C8 26.5 12.5 32.5 18 34.5C23.5 32.5 28 26.5 28 20V13L18 8Z" fill="#E9632B" opacity="0.3"/>
              <text x="18" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Manrope, sans-serif">GH</text>
            </svg>
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#1C2E5B', letterSpacing: '-0.02em' }}>
              GH Trial
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === href ? '#E9632B' : '#26334A',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: pathname === href ? 600 : 500,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif' }}
            >
              Request a Proposal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#1C2E5B' }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: '#E8E4DF' }}>
            <div className="pt-4 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ color: pathname === href ? '#E9632B' : '#26334A' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/signup"
                className="block mt-3 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                style={{ backgroundColor: '#E9632B' }}
                onClick={() => setMobileOpen(false)}
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
