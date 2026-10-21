import Link from 'next/link';
import { Scale, Users, Shield, CheckCircle, FileText, Home, Heart, Briefcase, BookOpen, CreditCard } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F5F1', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F8F5F1' }}>
        {/* Protective arch background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-2 opacity-10" style={{ borderColor: '#1C2E5B' }} />
          <div className="absolute -top-16 -right-16 w-[480px] h-[480px] rounded-full border-2 opacity-8" style={{ borderColor: '#1C2E5B' }} />
          <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full border opacity-5" style={{ borderColor: '#E9632B' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: '#DCE8E2', color: '#1C2E5B', fontFamily: 'Inter, sans-serif' }}>
                <Shield className="w-4 h-4" style={{ color: '#E9632B' }} />
                Employee Legal Benefits
              </div>
              <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1.1, color: '#1C2E5B', marginBottom: '1.25rem' }}>
                Legal protection for every employee.
              </h1>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#E9632B', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Better outcomes for employers.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#26334A', marginBottom: '2.5rem', maxWidth: '480px' }}>
                Give your team access to affordable legal support for life&apos;s everyday challenges. A valuable employee benefit designed to provide peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="px-7 py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-3.5 rounded-xl font-semibold transition-colors hover:bg-white"
                  style={{ border: '2px solid #1C2E5B', color: '#1C2E5B', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
                >
                  Explore Benefits
                </Link>
              </div>
            </div>

            {/* Right: Shield composition */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer arch rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full border-2 opacity-15" style={{ borderColor: '#1C2E5B' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border opacity-10" style={{ borderColor: '#E9632B' }} />
                </div>
                {/* Center shield */}
                <div className="relative w-72 h-72 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-3xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#1C2E5B' }}>
                    <svg width="80" height="90" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0L0 7V20C0 30.5 7.8 40 18 40C28.2 40 36 30.5 36 20V7L18 0Z" fill="white" opacity="0.15"/>
                      <path d="M18 4L4 10V20C4 28.5 10.4 36.5 18 38C25.6 36.5 32 28.5 32 20V10L18 4Z" fill="white" opacity="0.1"/>
                      <text x="18" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Manrope, sans-serif">GH</text>
                    </svg>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-md text-xs font-semibold" style={{ color: '#1C2E5B', fontFamily: 'Inter, sans-serif' }}>
                    ✓ Legal Coverage
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-3 py-2 shadow-md text-xs font-semibold" style={{ color: '#E9632B', fontFamily: 'Inter, sans-serif' }}>
                    ✓ Peace of Mind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LEGAL BENEFITS MATTER ── */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1C2E5B', marginBottom: '1rem' }}>
              Why legal benefits matter
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#26334A', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Employees face legal challenges every day — and most don&apos;t have access to affordable help.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                headline: 'Most employees face legal issues',
                body: 'Everyday legal matters — from landlord disputes to family law — affect employees across all income levels, yet many go unresolved due to cost.',
              },
              {
                icon: Briefcase,
                headline: 'Workplace productivity suffers',
                body: 'Unresolved legal stress is a leading cause of employee distraction, absenteeism, and reduced performance at work.',
              },
              {
                icon: Shield,
                headline: 'Benefits that make a difference',
                body: 'Legal benefits are among the most valued employee perks — yet remain underutilized in most benefits packages.',
              },
            ].map((card) => (
              <div key={card.headline} className="p-8 rounded-2xl border" style={{ borderColor: '#E8E4DF', backgroundColor: '#FFFFFF' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#DCE8E2' }}>
                  <card.icon className="w-6 h-6" style={{ color: '#1C2E5B', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#1C2E5B', marginBottom: '0.75rem' }}>
                  {card.headline}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#26334A', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVERYDAY LEGAL SUPPORT ── */}
      <section className="py-24" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1C2E5B', marginBottom: '1rem' }}>
              Everyday legal support
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#26334A', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              GH Trial helps employees navigate the legal matters that come up in everyday life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Heart, title: 'Family & personal matters', desc: 'Divorce, custody, adoption, and family legal guidance.' },
              { icon: Home, title: 'Housing & property', desc: 'Landlord disputes, lease reviews, and real estate transactions.' },
              { icon: FileText, title: 'Estate planning', desc: 'Wills, trusts, powers of attorney, and advance directives.' },
              { icon: CreditCard, title: 'Consumer protection', desc: 'Debt issues, identity theft, and consumer rights.' },
              { icon: BookOpen, title: 'Legal consultations', desc: 'Access to legal advice for a wide range of personal matters.' },
              { icon: Scale, title: 'Document assistance', desc: 'Review and preparation of legal documents and contracts.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-white border" style={{ borderColor: '#E8E4DF' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F8F5F1' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#1C2E5B', strokeWidth: 1.75 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1C2E5B', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#26334A', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1C2E5B', marginBottom: '1rem' }}>
              How it works
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#26334A', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Simple for employers to offer. Easy for employees to use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px" style={{ backgroundColor: '#DCE8E2' }} />
            {[
              { num: '01', title: 'Employers offer GH Trial', desc: 'Add GH Trial to your employee benefits package. Simple setup, no IT required.' },
              { num: '02', title: 'Employees access their benefit', desc: 'Employees receive their unique access credentials and activate their legal benefit.' },
              { num: '03', title: 'Connect with legal support', desc: 'Employees connect with available legal support for their specific situation.' },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold" style={{ backgroundColor: '#1C2E5B', color: 'white', fontFamily: 'Manrope, sans-serif' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1C2E5B', marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#26334A', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS FOR EMPLOYERS ── */}
      <section className="py-24" style={{ backgroundColor: '#1C2E5B' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
                Built for employers who care.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                GH Trial is a voluntary employee benefit that&apos;s simple to administer and meaningful to employees. Add it to your benefits package and give your team the protection they deserve.
              </p>
              <Link
                href="/signup"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
              >
                Request a Proposal
              </Link>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Competitive employee benefits', desc: 'Stand out as an employer of choice with a benefit employees genuinely value.' },
                { title: 'Better access to legal support', desc: 'Remove cost barriers so employees can address legal matters without delay.' },
                { title: 'Reduced employee financial stress', desc: 'Legal issues are a leading source of financial anxiety. Help your team find peace of mind.' },
                { title: 'Simple benefit administration', desc: 'Easy to set up, easy to manage. Employees self-enroll using their unique ID.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E9632B' }} />
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F8F5F1' }}>
        {/* Subtle arch decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-2 opacity-10" style={{ borderColor: '#1C2E5B' }} />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full border opacity-8" style={{ borderColor: '#E9632B' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1C2E5B', marginBottom: '1.25rem' }}>
            Give your employees the protection they deserve.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#26334A', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Discover how GH Trial can complement your employee benefits package.
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
