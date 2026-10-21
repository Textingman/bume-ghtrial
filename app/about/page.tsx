import Link from 'next/link';
import { Shield, Users, CheckCircle, Scale, Heart, Home, FileText, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F5F1', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: '#DCE8E2', color: '#1C2E5B' }}>
            <Shield className="w-4 h-4" style={{ color: '#E9632B' }} />
            About GH Trial
          </div>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#1C2E5B', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Legal protection shouldn&apos;t be a luxury.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#26334A', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            GH Trial was founded on a simple belief: every employee deserves access to quality legal support — regardless of their income or employer size.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1.25rem' }}>
                Our mission
              </h2>
              <p style={{ fontSize: '1rem', color: '#26334A', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Everyday legal matters — from landlord disputes and traffic violations to family law and estate planning — affect employees across all income levels. Yet most never seek help because they can&apos;t afford it.
              </p>
              <p style={{ fontSize: '1rem', color: '#26334A', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                GH Trial partners with employers to offer legal benefit plans that give every employee access to legal support — at no out-of-pocket cost to them.
              </p>
              <p style={{ fontSize: '1rem', color: '#26334A', lineHeight: 1.8 }}>
                The result: employees who feel supported, and employers who demonstrate they genuinely care about their team&apos;s wellbeing.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#1C2E5B' }}>
              <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'white', marginBottom: '2rem' }}>
                Why it matters
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Users, stat: 'Most employees', label: 'face at least one legal issue each year' },
                  { icon: Briefcase, stat: 'Unresolved legal stress', label: 'is a leading cause of workplace distraction' },
                  { icon: Shield, stat: 'Legal benefits', label: 'are among the most valued employee perks' },
                  { icon: Scale, stat: 'Cost barriers', label: 'prevent most employees from seeking legal help' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(233,99,43,0.2)' }}>
                      <item.icon className="w-5 h-5" style={{ color: '#E9632B' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#E9632B' }}>{item.stat}</p>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1rem', textAlign: 'center' }}>
            Comprehensive legal coverage
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#26334A', textAlign: 'center', marginBottom: '3rem', lineHeight: 1.7 }}>
            From everyday legal needs to more complex matters — GH Trial helps employees navigate life&apos;s legal challenges.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'Wills & estate planning',
              'Traffic & license issues',
              'Family law & divorce',
              'Real estate transactions',
              'Identity theft defense',
              'Consumer protection',
              'Immigration assistance',
              'Civil lawsuit defense',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border" style={{ borderColor: '#E8E4DF' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#E9632B' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#26334A' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1.25rem' }}>
            Built for employers who care
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#26334A', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            GH Trial is a voluntary employee benefit — simple to administer, and meaningful to employees. Add it to your benefits package and give your team the protection they deserve.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif' }}
          >
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
