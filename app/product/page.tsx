import Link from 'next/link';
import { CheckCircle, Scale, Shield, Users, FileText, Home, Heart, CreditCard, BookOpen, Zap, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F5F1', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: '#DCE8E2', color: '#1C2E5B' }}>
            <Scale className="w-4 h-4" style={{ color: '#E9632B' }} />
            The GH Trial Legal Benefit
          </div>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#1C2E5B', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Comprehensive legal coverage for every employee.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#26334A', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            GH Trial is a voluntary employee legal benefit that gives your workforce access to qualified legal support for the everyday legal matters that affect their lives.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1rem' }}>
              What&apos;s included in the plan
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#26334A', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Employees get access to legal support across a wide range of personal and family legal matters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Family & personal matters', desc: 'Divorce, custody, adoption, name changes, and family legal guidance.' },
              { icon: Home, title: 'Housing & property', desc: 'Landlord disputes, lease reviews, real estate transactions, and neighbor issues.' },
              { icon: FileText, title: 'Estate planning', desc: 'Wills, trusts, powers of attorney, living wills, and advance directives.' },
              { icon: CreditCard, title: 'Consumer protection', desc: 'Debt collection issues, identity theft defense, and consumer rights.' },
              { icon: BookOpen, title: 'Legal consultations', desc: 'Unlimited phone consultations with attorneys on a wide range of matters.' },
              { icon: Scale, title: 'Document review & preparation', desc: 'Attorney review and preparation of personal legal documents and contracts.' },
              { icon: Shield, title: 'Traffic & license issues', desc: 'Traffic violations, license suspensions, and related legal matters.' },
              { icon: Users, title: 'Immigration assistance', desc: 'Guidance on immigration matters, visa questions, and related legal support.' },
              { icon: Zap, title: 'Civil lawsuit defense', desc: 'Legal representation and defense for civil lawsuits and disputes.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl bg-white border" style={{ borderColor: '#E8E4DF' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F8F5F1' }}>
                  <item.icon className="w-5 h-5" style={{ color: '#1C2E5B', strokeWidth: 1.75 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#1C2E5B', marginBottom: '0.35rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#26334A', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1rem', textAlign: 'center' }}>
            How the benefit works
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#26334A', textAlign: 'center', marginBottom: '3rem', lineHeight: 1.7 }}>
            Simple for employers to offer. Easy for employees to use.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Employer adds GH Trial', desc: 'Add GH Trial to your benefits package. Our team handles setup — no IT required.' },
              { num: '02', title: 'Employees enroll', desc: 'Employees receive their unique Employee ID and activate their benefit in minutes.' },
              { num: '03', title: 'Access legal support', desc: 'Employees connect with qualified legal support for their specific situation — anytime.' },
            ].map((step) => (
              <div key={step.num} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#E8E4DF' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold text-white" style={{ backgroundColor: '#1C2E5B', fontFamily: 'Manrope, sans-serif' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1C2E5B', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#26334A', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Benefits */}
      <section className="py-20" style={{ backgroundColor: '#1C2E5B' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'white', marginBottom: '1.25rem' }}>
                Why employers choose GH Trial
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
                A voluntary benefit that costs nothing to administer and delivers real value to your workforce.
              </p>
              <Link href="/signup" className="inline-block px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif' }}>
                Request a Proposal
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'No cost to the employer', desc: 'GH Trial is funded through voluntary employee payroll deduction.' },
                { title: 'Zero IT setup required', desc: 'Employees self-enroll using their unique Employee ID. No integration needed.' },
                { title: 'Immediate coverage', desc: 'Employees have access to legal support from day one of enrollment.' },
                { title: 'Dedicated HR support', desc: 'Our team supports your HR department throughout implementation and beyond.' },
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

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F8F5F1' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#1C2E5B', marginBottom: '1.25rem' }}>
            Ready to add GH Trial to your benefits?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#26334A', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Request a proposal and our team will walk you through everything.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 rounded-xl font-semibold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E9632B', fontFamily: 'Inter, sans-serif' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
