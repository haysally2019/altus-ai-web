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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-slate-900">RAFTER AI</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Join Our Team</h1>
          <p className="text-2xl text-brand-100 font-light max-w-3xl mx-auto">
            Help restoration contractors transform their businesses with cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Sales Representative Position */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex items-start gap-8 mb-10">
                <div className="bg-brand-600 rounded-2xl p-5 flex-shrink-0">
                  <Users className="w-9 h-9 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-white mb-4">Sales Representatives</h3>
                  <div className="inline-block bg-brand-600/20 border border-brand-500 rounded-full px-5 py-2 mb-6">
                    <span className="text-brand-300 font-bold text-sm">COMMISSION ONLY - UNLIMITED EARNING POTENTIAL</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-10">
                    We're looking for driven sales professionals to join our growing team. Help restoration contractors discover how AI can transform their business while earning generous commissions on every sale.
                  </p>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h4 className="text-brand-400 font-bold mb-5 flex items-center gap-2 text-lg">
                        <Check className="w-5 h-5" /> What You'll Do
                      </h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Connect with restoration contractors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Demo our AI platform</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Close deals and drive growth</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Build lasting client relationships</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-brand-400 font-bold mb-5 flex items-center gap-2 text-lg">
                        <Sparkles className="w-5 h-5" /> What We Offer
                      </h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Generous commission structure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Advanced SaaS CRM access included</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">100% remote - work from anywhere</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">High ticket B2B sales</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Warm leads & proven sales materials</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-brand-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">Fast-growing AI technology company</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-700">
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
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Generous Commissions</h3>
              <p className="text-slate-600 leading-relaxed">
                Earn uncapped commissions on every sale. Top performers make $5K-$15K+ per month selling high-value SaaS subscriptions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced CRM Tools</h3>
              <p className="text-slate-600 leading-relaxed">
                Get full access to our premium SaaS CRM platform to manage leads, track deals, and optimize your sales pipeline.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Recurring Revenue</h3>
              <p className="text-slate-600 leading-relaxed">
                Build passive income with recurring commission structures. Once you close a deal, earn monthly as long as they stay subscribed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Apply for Sales Representative</h2>
                <p className="text-brand-100 text-sm mt-1">Join our team of top performers</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              className="p-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Application submitted successfully! We will review your application and get back to you within 2-3 business days.');
                setShowApplicationForm(false);
              }}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
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
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="john.doe@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Years of Sales Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
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
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Why are you a great fit? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your B2B/SaaS sales experience, biggest achievements, and what motivates you..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 font-semibold"
                  size="lg"
                >
                  Submit Application
                </Button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-white">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight">RAFTER AI</span>
          </div>
          <p className="text-slate-500 mb-4">© 2024 RAFTER AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
