import Link from 'next/link';
import { Scale, Shield, Users, Award, CheckCircle, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#FFF7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#FDEBD0', color: '#E8622A' }}>
            <Scale className="w-4 h-4" />
            About GH Trial
          </div>
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1B2B5E' }}>
            Legal Protection Shouldn't Be a Luxury.
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            GH Trial was founded on a simple belief: every employee deserves access to quality legal representation — regardless of their income or employer size.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B2B5E' }}>Our Mission</h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Two out of three employees face a legal issue each year — from traffic violations and landlord disputes to family law and estate planning. Yet most never seek help because they can't afford it.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                GH Trial partners with employers to offer comprehensive legal benefit plans that give every employee access to a network of 22,000+ attorneys — at no out-of-pocket cost.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                The result: less stressed employees, better productivity, and stronger retention for employers.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#1B2B5E' }}>
              <h3 className="text-2xl font-bold text-white mb-8">Why It Matters</h3>
              <div className="space-y-6">
                {[
                  { icon: Heart, stat: '67%', label: 'of employees face a legal issue each year' },
                  { icon: Users, stat: '13M+', label: 'members served across the country' },
                  { icon: Award, stat: '50+', label: 'years of legal benefit expertise' },
                  { icon: Scale, stat: '22K+', label: 'network attorneys nationwide' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E8622A' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold" style={{ color: '#E8622A' }}>{item.stat}</p>
                      <p className="text-sm" style={{ color: '#CBD5E1' }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20" style={{ backgroundColor: '#FFF7F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1B2B5E' }}>Comprehensive Legal Coverage</h2>
          <p className="text-xl text-center mb-12" style={{ color: '#6B7280' }}>From everyday legal needs to complex matters — GH Trial has employees covered.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Wills & Estate Planning', 'Traffic & License Issues', 'Family Law & Divorce',
              'Real Estate Transactions', 'Identity Theft Defense', 'Consumer Protection',
              'Immigration Assistance', 'Civil Lawsuit Defense',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#E8622A' }} />
                <span className="font-medium text-sm" style={{ color: '#374151' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B2B5E' }}>Built for Employers Who Care</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#6B7280' }}>
            GH Trial is a voluntary employee benefit — simple to administer, zero cost to the employer, and loved by employees. Add it to your benefits package in days, not months.
          </p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#E8622A' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
