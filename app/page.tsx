import Link from 'next/link';
import { Scale, Users, Shield, CheckCircle, Star, Award, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Alert Banner */}
      <div className="bg-[#1B2B5E] text-white text-center py-3 px-4 text-sm">
        <span className="font-medium">Legal protection for every employee — </span>
        <Link href="/signup" className="underline hover:no-underline font-semibold">Request a Proposal »</Link>
      </div>

      {/* Hero Section — Split Layout */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FFF7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Card */}
            <div className="rounded-2xl p-10 text-white" style={{ backgroundColor: '#E8622A' }}>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Legal Protection for Employees.<br />
                Better Outcomes for Employers.
              </h1>
              <p className="text-lg mb-4 opacity-90">
                Two out of three employees face a legal issue each year, yet few seek representation due to cost.
              </p>
              <p className="text-lg mb-8 opacity-90">
                GH Trial removes cost barriers, reduces legal stress, and helps employers manage rising healthcare costs.
              </p>
              <Link href="/signup" className="inline-block bg-white font-bold px-8 py-4 rounded-lg text-lg transition-opacity hover:opacity-90" style={{ color: '#E8622A' }}>
                Request a Proposal
              </Link>
            </div>
            {/* Right: Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 p-12 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8622A' }}>
                    <Scale className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold" style={{ color: '#1B2B5E' }}>Legal Coverage</p>
                  <p className="text-lg mt-2" style={{ color: '#6B7280' }}>For Every Employee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '13M+', label: 'Members Served' },
              { value: '22K+', label: 'Network Attorneys' },
              { value: '50+', label: 'Years of Dedication' },
              { value: '4.8★', label: 'Member Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold mb-1" style={{ color: '#E8622A' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Employers Choose GH Trial */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1B2B5E' }}>
              Employers Who Care Choose GH Trial.
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              A legal solution that supports employees while strengthening retention and long-term client relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Comprehensive Coverage, Simple Administration',
                desc: 'Full legal coverage for employees and their families — wills, traffic, family law, and more. Easy to administer, easy to use.',
              },
              {
                icon: Users,
                title: 'Boost Retention & Reduce Stress',
                desc: 'Employees with legal protection are less stressed and more productive. Legal issues are the #1 cause of workplace distraction.',
              },
              {
                icon: Award,
                title: 'Trusted by Leading Employers',
                desc: 'Over 50 years of experience serving millions of members. GH Trial is the legal benefit employers trust most.',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-xl border hover:shadow-lg transition-shadow" style={{ borderColor: '#E5E7EB' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FDEBD0' }}>
                  <feature.icon className="w-7 h-7" style={{ color: '#E8622A' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1B2B5E' }}>{feature.title}</h3>
                <p style={{ color: '#6B7280' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20" style={{ backgroundColor: '#FFF7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B2B5E' }}>What's Covered</h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                GH Trial provides comprehensive legal coverage for the issues employees face every day.
              </p>
              <div className="space-y-4">
                {[
                  'Wills, Trusts & Estate Planning',
                  'Traffic Violations & License Issues',
                  'Family Law & Divorce',
                  'Real Estate Transactions',
                  'Identity Theft Protection',
                  'Consumer Protection & Debt Issues',
                  'Immigration Assistance',
                  'Civil Lawsuits & Defense',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#E8622A' }} />
                    <span className="font-medium" style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#1B2B5E' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Protect Your Team?</h3>
              <p className="text-lg mb-8" style={{ color: '#CBD5E1' }}>
                Join thousands of employers who trust GH Trial to protect their most valuable asset — their people.
              </p>
              <div className="space-y-4 mb-8">
                {['No cost to employees', 'Easy payroll deduction', 'Immediate coverage', 'No waiting periods'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Star className="w-4 h-4" style={{ color: '#E8622A' }} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/signup" className="inline-block w-full text-center font-bold px-8 py-4 rounded-lg text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#E8622A', color: '#FFFFFF' }}>
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1B2B5E' }}>What Employers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'GH Trial has been a game-changer for our employee benefits package. Our team loves it.', name: 'Sarah M.', title: 'HR Director, TechCorp' },
              { quote: 'We saw a 30% reduction in employee stress-related absences after adding GH Trial.', name: 'James R.', title: 'VP People, MidWest Manufacturing' },
              { quote: 'The easiest benefit to administer. Employees sign up themselves and love the coverage.', name: 'Linda K.', title: 'Benefits Manager, RetailCo' },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4" style={{ color: '#E8622A' }} fill="#E8622A" />)}
                </div>
                <p className="text-lg mb-6 italic" style={{ color: '#374151' }}>"{t.quote}"</p>
                <div>
                  <p className="font-bold" style={{ color: '#1B2B5E' }}>{t.name}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#E8622A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-90 text-white">Join thousands of employers who trust GH Trial to protect their employees.</p>
          <Link href="/signup" className="inline-block bg-white font-bold px-10 py-5 rounded-lg text-xl transition-opacity hover:opacity-90" style={{ color: '#E8622A' }}>
            Request a Proposal — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
