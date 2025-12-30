import React, { useState } from 'react';
import { Users, Check, Sparkles, Zap, ArrowLeft, DollarSign, TrendingUp, ChartBar as BarChart3, X } from 'lucide-react';
import { Button } from './ui/Button';

interface CareersProps {
  onBack: () => void;
}

export default function Careers({ onBack }: CareersProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-slate-600 hover:text-brand-600 transition-colors font-medium text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Back
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="font-bold text-lg sm:text-2xl tracking-tight text-slate-900">RAFTER AI</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">Join Our Team</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-100 font-light max-w-3xl mx-auto leading-relaxed">
            Help restoration contractors transform their businesses with cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Sales Representative Position */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
                <div className="bg-brand-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex-shrink-0">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Sales Representatives</h3>
                  <div className="inline-block bg-brand-600/20 border border-brand-500 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6">
                    <span className="text-brand-300 font-bold text-xs sm:text-sm">COMMISSION ONLY - UNLIMITED EARNING POTENTIAL</span>
                  </div>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                    We're looking for driven sales professionals to join our growing team. Help restoration contractors discover how AI can transform their business while earning generous commissions on every sale.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
                    <div>
                      <h4 className="text-brand-400 font-bold mb-4 sm:mb-5 flex items-center gap-2 text-base sm:text-lg">
                        <Check className="w-5 h-5" /> What You'll Do
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3 text-slate-300 text-sm sm:text-base">
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Connect with restoration contractors</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Demo our AI platform</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Close deals and drive growth</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Build lasting client relationships</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-brand-400 font-bold mb-4 sm:mb-5 flex items-center gap-2 text-base sm:text-lg">
                        <Sparkles className="w-5 h-5" /> What We Offer
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3 text-slate-300 text-sm sm:text-base">
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Generous commission structure</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Advanced SaaS CRM access included</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">100% remote - work from anywhere</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">High ticket B2B sales</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Warm leads & proven sales materials</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-brand-400 mt-1 text-base sm:text-lg">•</span>
                          <span className="leading-relaxed">Fast-growing AI technology company</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-slate-700">
                    <Button
                      onClick={() => setShowApplicationForm(true)}
                      variant="primary"
                      className="font-bold shadow-xl w-full sm:w-auto px-8"
                      size="lg"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation & Benefits Highlights */}
          <div className="mt-10 sm:mt-16 md:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
              <div className="bg-emerald-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Generous Commissions</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Earn uncapped commissions on every sale. Top performers make $5K-$15K+ per month selling high-value SaaS subscriptions.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Advanced CRM Tools</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Get full access to our premium SaaS CRM platform to manage leads, track deals, and optimize your sales pipeline.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Recurring Revenue</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Build passive income with recurring commission structures. Once you close a deal, earn monthly as long as they stay subscribed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[92vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-brand-600 to-brand-700 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between">
              <div className="flex-1 pr-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Apply for Sales Representative</h2>
                <p className="text-brand-100 text-xs sm:text-sm mt-1">Join our team of top performers</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              className="p-5 sm:p-6 md:p-8"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = {
                  first_name: (form.elements.namedItem('firstName') as HTMLInputElement).value,
                  last_name: (form.elements.namedItem('lastName') as HTMLInputElement).value,
                  email: (form.elements.namedItem('email') as HTMLInputElement).value,
                  phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
                  experience: (form.elements.namedItem('experience') as HTMLSelectElement).value,
                  linkedin: (form.elements.namedItem('linkedin') as HTMLInputElement).value,
                  cover_letter: (form.elements.namedItem('coverLetter') as HTMLTextAreaElement).value
                };

                try {
                  const response = await fetch('https://tipouhkjveytwatpidsi.supabase.co/functions/v1/submit-application', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                  });

                  const result = await response.json();

                  if (response.ok) {
                    alert('Application submitted successfully! We will review your application and get back to you within 2-3 business days.');
                    form.reset();
                    setShowApplicationForm(false);
                  } else {
                    alert('Error: ' + result.error);
                  }
                } catch (error) {
                  alert('Failed to submit application. Please try again.');
                }
              }}
            >
              <div className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="john.doe@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Years of Sales Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="experience"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Why are you a great fit? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    rows={5}
                    className="w-full border-2 border-slate-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your B2B/SaaS sales experience, biggest achievements, and what motivates you..."
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 font-semibold order-1 sm:order-1"
                  size="lg"
                >
                  Submit Application
                </Button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 sm:px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors order-2 sm:order-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-white">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight">RAFTER AI</span>
          </div>
          <p className="text-slate-500 text-sm sm:text-base mb-4">© 2024 RAFTER AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
