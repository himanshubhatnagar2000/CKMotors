import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Banknote } from 'lucide-react';

export default function EmiCalculator({ onOpenInquiry }) {
  const [vehiclePrice, setVehiclePrice] = useState(650000); // 6.50 Lakh default
  const [downPayment, setDownPayment] = useState(130000); // 20% down payment
  const [tenureYears, setTenureYears] = useState(4); // 4 years (48 months)
  const [interestRate, setInterestRate] = useState(9.5); // 9.5% interest

  // Calculation
  const loanAmount = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const monthlyEmi = loanAmount > 0 && monthlyRate > 0
    ? Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1))
    : 0;

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  return (
    <section id="finance" className="py-20 bg-gradient-to-b from-white to-tata-bg relative">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-tata-blue/8 text-tata-blue border border-tata-blue/15 mb-3">
            <Calculator size={14} />
            Showroom Finance Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tata-navy mb-3">
            Commercial Vehicle EMI Calculator
          </h2>
          <p className="text-sm text-slate-500">
            Estimate your low-interest monthly installments with Tata Motors Finance and partner public/private banks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Calculator Controls (8 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-7">

            {/* Vehicle Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Ex-Showroom Price</label>
                <span className="text-lg font-extrabold text-tata-navy">₹{(vehiclePrice / 100000).toFixed(2)} Lakh</span>
              </div>
              <input
                type="range"
                min="350000"
                max="2500000"
                step="25000"
                value={vehiclePrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setVehiclePrice(val);
                  if (downPayment > val) setDownPayment(Math.round(val * 0.2));
                }}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹3.50 L</span>
                <span>₹15.00 L</span>
                <span>₹25.00 L</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Down Payment</label>
                <span className="text-base font-bold text-slate-900">₹{downPayment.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">({Math.round((downPayment / vehiclePrice) * 100)}%)</span></span>
              </div>
              <input
                type="range"
                min="50000"
                max={vehiclePrice * 0.5}
                step="10000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-blue"
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Loan Tenure</label>
              <div className="grid grid-cols-4 gap-2.5">
                {[2, 3, 4, 5].map((years) => (
                  <button
                    key={years}
                    type="button"
                    onClick={() => setTenureYears(years)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition border cursor-pointer ${tenureYears === years
                        ? 'bg-tata-blue text-white border-tata-blue shadow-md'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                  >
                    {years} Years ({years * 12}m)
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Interest Rate (P.A.)</label>
                <span className="text-base font-bold text-slate-900">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="8.0"
                max="15.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-blue"
              />
            </div>

          </div>

          {/* EMI Calculation Summary Card (5 Columns) */}
          <div className="lg:col-span-5 bg-tata-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">

            <div>
              <span className="text-xs uppercase tracking-widest text-blue-200 font-bold block mb-2">Estimated Monthly Installment</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white">₹{monthlyEmi.toLocaleString('en-IN')}</span>
                <span className="text-sm text-white/60">/ month</span>
              </div>
            </div>

            <div className="space-y-3.5 border-t border-white/10 pt-5 text-xs text-white/80">
              <div className="flex justify-between">
                <span className="text-white/60">Required Loan Amount:</span>
                <span className="font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Total Interest Payable:</span>
                <span className="font-bold text-white">₹{totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3 text-sm">
                <span className="font-semibold text-white">Total Amount (Principal + Interest):</span>
                <span className="font-extrabold text-white">₹{totalPayment.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                <ShieldCheck size={15} />
                <span>Instant Pre-Approval with Low Down Payment Offers</span>
              </div>

              <button
                onClick={() => onOpenInquiry('Showroom Finance Enquiry')}
                className="w-full py-4 rounded-xl bg-white text-tata-navy hover:bg-slate-100 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Banknote size={18} className="text-tata-blue" />
                <span>Apply For Low Interest Loan</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
