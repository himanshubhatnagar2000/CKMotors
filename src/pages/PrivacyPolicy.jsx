import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, Lock, Eye, Database, Bell, UserCheck, Globe, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Section = ({ icon: Icon, title, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-tata-blue/10 border border-tata-blue/15 flex items-center justify-center text-tata-blue shrink-0">
        <Icon size={18} />
      </div>
      <h2 className="text-xl font-bold text-tata-navy">{title}</h2>
    </div>
    <div className="pl-[52px] text-sm text-slate-600 leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Privacy Policy – CK Motors';
  }, []);

  return (
    <>
      <Header onOpenInquiry={() => {}} />

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-tata-navy via-tata-blue to-[#1a4ec4] pt-32 pb-20">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 text-white/80 mb-6">
            <ShieldCheck size={13} />
            CK Motors · Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Your privacy is our priority. Learn how CK Motors — Authorized Tata Motors Dealer — collects, uses, and protects your personal information.
          </p>
          <p className="text-white/40 text-xs mt-5">Last updated: July 2026</p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="bg-tata-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Quick Notice Card */}
          <div className="bg-tata-blue/5 border border-tata-blue/15 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <ShieldCheck size={22} className="text-tata-blue shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              This Privacy Policy applies to <strong>CK Motors</strong>, an Authorized Tata Motors dealership. By visiting our website or sharing your details with us, you agree to the practices described below. We are committed to keeping your data safe and never selling it to third parties.
            </p>
          </div>

          <Section icon={Eye} title="Information We Collect">
            <p>When you interact with CK Motors — through our website, inquiry forms, phone calls, or in-showroom visits — we may collect:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Identity Data:</strong> Full name, date of birth, and government-issued ID (for test drive or finance verification).</li>
              <li><strong>Contact Data:</strong> Mobile number, email address, and residential or office address.</li>
              <li><strong>Transaction Data:</strong> Vehicle preferences, booking details, EMI enquiries, and purchase/service history.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and pages visited on our website.</li>
              <li><strong>Marketing Data:</strong> Your preferences for receiving marketing and communications from us.</li>
            </ul>
          </Section>

          <Section icon={Database} title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Process your vehicle inquiry, test drive request, or booking form.</li>
              <li>Provide you with quotations, finance options, and showroom offers.</li>
              <li>Schedule and confirm service appointments for your Tata vehicle.</li>
              <li>Send you promotional offers, event invites, and new launch notifications (only if you've opted in).</li>
              <li>Comply with Tata Motors dealership regulations and legal obligations.</li>
              <li>Improve our website functionality and user experience.</li>
            </ul>
          </Section>

          <Section icon={Globe} title="Sharing Your Information">
            <p>CK Motors does not sell, rent, or trade your personal information. We may share your details only with:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Tata Motors Limited:</strong> As required under our authorized dealership agreement for warranty, service, and customer satisfaction purposes.</li>
              <li><strong>Financial Partners:</strong> Banks and NBFCs (e.g., Tata Motors Finance, HDFC Bank, SBI) when you apply for vehicle financing, strictly with your consent.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website, CRM, or communication tools, bound by strict data confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or regulatory requirements.</li>
            </ul>
          </Section>

          <Section icon={Lock} title="Data Security">
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>SSL/TLS encryption for all data transmitted via our website.</li>
              <li>Access controls limiting data access to authorized personnel only.</li>
              <li>Regular security assessments and staff training on data protection.</li>
            </ul>
            <p className="mt-3">However, no internet transmission is 100% secure. If you believe your data has been compromised, please contact us immediately.</p>
          </Section>

          <Section icon={Bell} title="Cookies & Tracking">
            <p>Our website uses cookies — small data files stored on your device — to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Remember your preferences and session details.</li>
              <li>Analyze website traffic via tools like Google Analytics.</li>
              <li>Deliver relevant advertisements on partner platforms.</li>
            </ul>
            <p className="mt-3">You can control cookie settings in your browser. Disabling cookies may affect some website functionality.</p>
          </Section>

          <Section icon={UserCheck} title="Your Rights">
            <p>You have the following rights over your personal data:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Ask us to update inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request erasure of your data, subject to legal obligations.</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time via the link in our emails.</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact our Data Officer (details below).</p>
          </Section>

          <Section icon={Globe} title="Third-Party Links">
            <p>Our website may contain links to Tata Motors' official website, finance partner portals, or social media pages. We are not responsible for the privacy practices of those external sites and encourage you to review their individual policies.</p>
          </Section>

          <Section icon={ShieldCheck} title="Changes to This Policy">
            <p>CK Motors reserves the right to update this Privacy Policy at any time. Material changes will be notified via a prominent notice on our website. Continued use of our services after changes are posted constitutes your acceptance.</p>
          </Section>

          {/* Contact Card */}
          <div className="mt-12 bg-tata-navy rounded-2xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Contact Our Data Officer</h3>
            <p className="text-white/60 text-sm mb-6">For any privacy-related queries, requests, or concerns, reach out to us directly.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 transition-colors">
                <Phone size={16} className="text-white/60" />
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-white">+91 98765 43210</p>
                </div>
              </a>
              <a href="mailto:privacy@ckmotors.in" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 transition-colors">
                <Mail size={16} className="text-white/60" />
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-white">privacy@ckmotors.in</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
