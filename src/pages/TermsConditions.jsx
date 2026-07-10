import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight, Scale, AlertCircle, Car, CreditCard, Wrench, RotateCcw, Gavel, Mail, Phone } from 'lucide-react';
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

const TermCard = ({ number, title, body }) => (
  <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
    <span className="text-3xl font-extrabold text-tata-blue/10 leading-none select-none">{String(number).padStart(2, '0')}</span>
    <div>
      <h4 className="text-sm font-bold text-tata-navy mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
    </div>
  </div>
);

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Terms & Conditions – CK Motors';
  }, []);

  return (
    <>
      <Header onOpenInquiry={() => {}} />

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0c2060] via-tata-navy to-tata-blue pt-32 pb-20">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 text-white/80 mb-6">
            <Scale size={13} />
            CK Motors · Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Please read these terms carefully before using our website, purchasing a vehicle, or engaging with CK Motors' services.
          </p>
          <p className="text-white/40 text-xs mt-5">Last updated: July 2026</p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-white/50">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="bg-tata-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Acceptance Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <AlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              By accessing the CK Motors website, submitting an inquiry, booking a test drive, or purchasing a vehicle, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>

          {/* Key Terms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <TermCard number={1} title="Website Use" body="This website is for informational and inquiry purposes only. Content may change without notice. Unauthorized use is prohibited." />
            <TermCard number={2} title="Vehicle Pricing" body="Prices, offers, and specifications displayed are indicative and subject to change without notice. Final price is confirmed at booking." />
            <TermCard number={3} title="Booking & Payments" body="All bookings are confirmed only upon receipt of the booking amount. Bookings are non-transferable unless agreed in writing." />
            <TermCard number={4} title="Test Drives" body="Test drives require a valid driving licence. CK Motors reserves the right to refuse a test drive at its sole discretion." />
            <TermCard number={5} title="Finance Terms" body="Finance approvals are subject to the lending partner's criteria. CK Motors does not guarantee loan approval." />
            <TermCard number={6} title="Service Appointments" body="Service slots are subject to availability. CK Motors is not liable for delays caused by parts unavailability or force majeure." />
          </div>

          <Section icon={FileText} title="1. General Use of Website">
            <p>The CK Motors website (the "Site") is operated by CK Motors, an Authorized Tata Motors Dealer. By accessing or using the Site, you represent that you are at least 18 years of age and capable of entering into a legally binding agreement.</p>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use the Site for any unlawful purpose or in violation of applicable regulations.</li>
              <li>Transmit unsolicited communications, spam, or malware.</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems.</li>
              <li>Reproduce, duplicate, or resell any content on the Site without express written consent.</li>
            </ul>
          </Section>

          <Section icon={Car} title="2. Vehicle Sales & Bookings">
            <p>All vehicle sales are governed by a separate Sale Agreement signed at the time of delivery. The following applies to all bookings:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Booking Amount:</strong> A non-refundable booking amount secures your vehicle. This amount will be adjusted against the final vehicle price.</li>
              <li><strong>Price Validity:</strong> Quoted prices are valid for 7 days from date of quotation unless stated otherwise. Prices exclude registration, insurance, and extended warranty unless explicitly included.</li>
              <li><strong>Delivery Timeline:</strong> Expected delivery timelines are indicative and may vary due to manufacturing, logistics, or regulatory factors.</li>
              <li><strong>Vehicle Specifications:</strong> CK Motors reserves the right to substitute a vehicle variant of equal or higher specification if the original is unavailable, with your prior consent.</li>
            </ul>
          </Section>

          <Section icon={CreditCard} title="3. Finance & EMI">
            <p>CK Motors facilitates vehicle financing through partner banks and NBFCs. Please note:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Loan approval is at the sole discretion of the lending institution. CK Motors makes no warranties regarding loan approval or interest rates.</li>
              <li>Documentation requirements and processing timelines vary by lender.</li>
              <li>Interest rates displayed are indicative; the final rate is determined by the lending partner based on your credit profile.</li>
              <li>Any charges levied by the lender (processing fees, prepayment charges) are borne by the customer.</li>
            </ul>
          </Section>

          <Section icon={Wrench} title="4. After-Sales & Service">
            <p>Our service centre is operated in line with Tata Motors' authorized standards. The following terms apply:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Warranty claims are governed by Tata Motors' official warranty policy. CK Motors acts as a facilitator and is not the warranty provider.</li>
              <li>Service estimates provided at the time of drop-off are indicative. Additional work requiring your approval will be communicated before proceeding.</li>
              <li>CK Motors is not liable for loss of personal belongings left in the vehicle during service.</li>
              <li>Vehicles not collected within 7 days of completion notice may attract storage charges.</li>
            </ul>
          </Section>

          <Section icon={RotateCcw} title="5. Exchange & Buyback">
            <p>Exchange evaluations are conducted in-showroom and are valid for 7 days or until the vehicle has been re-examined, whichever is earlier. CK Motors reserves the right to revise the valuation based on physical inspection findings. Exchange bonuses are applicable only as part of specific ongoing offers.</p>
          </Section>

          <Section icon={AlertCircle} title="6. Limitation of Liability">
            <p>To the fullest extent permitted by law, CK Motors shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Indirect, incidental, or consequential damages arising from the use of this Site or our services.</li>
              <li>Errors, interruptions, or unavailability of the Site.</li>
              <li>Loss of profits or data resulting from reliance on information on this Site.</li>
            </ul>
            <p className="mt-3">Our total liability in any case shall not exceed the amount paid by you for the specific service in question.</p>
          </Section>

          <Section icon={FileText} title="7. Intellectual Property">
            <p>All content on the CK Motors website — including text, images, logos, vehicle images, and design elements — is the intellectual property of CK Motors or Tata Motors Limited and is protected under applicable intellectual property laws. You may not use, reproduce, or distribute any content without written permission.</p>
          </Section>

          <Section icon={Gavel} title="8. Governing Law & Dispute Resolution">
            <p>These Terms & Conditions are governed by the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts at <strong>[City, India]</strong>. We encourage you to contact us first to resolve any issue amicably before pursuing legal remedies.</p>
          </Section>

          <Section icon={Scale} title="9. Changes to These Terms">
            <p>CK Motors reserves the right to modify these Terms & Conditions at any time without prior notice. The "Last Updated" date at the top of this page will reflect any changes. Continued use of our website or services constitutes acceptance of the revised terms.</p>
          </Section>

          {/* Contact Card */}
          <div className="mt-12 bg-tata-navy rounded-2xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Have Questions About These Terms?</h3>
            <p className="text-white/60 text-sm mb-6">Our team is happy to walk you through any clause or concern. Reach out to us directly.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 transition-colors">
                <Phone size={16} className="text-white/60" />
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-white">+91 98765 43210</p>
                </div>
              </a>
              <a href="mailto:legal@ckmotors.in" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 transition-colors">
                <Mail size={16} className="text-white/60" />
                <div>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-white">legal@ckmotors.in</p>
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
