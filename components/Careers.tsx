import React from 'react';
import { Users, Check, Sparkles, Mail, Zap, ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';

interface CareersProps {
  onBack: () => void;
}

export default function Careers({ onBack }: CareersProps) {
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
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Sales Representative Position */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="p-10 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-brand-600 rounded-2xl p-4 flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">Sales Representatives</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    We're looking for driven sales professionals to join our growing team. Help restoration contractors discover how AI can transform their business.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-brand-400 font-bold mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5" /> What You'll Do
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Connect with restoration contractors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Demo our AI platform</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Close deals and drive growth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Build lasting client relationships</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-brand-400 font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> What We Offer
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Competitive base + commission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Fast-growing startup environment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Remote-friendly culture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-400 mt-1">•</span>
                          <span>Sell cutting-edge AI technology</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                    <Button
                      onClick={() => window.location.href = 'mailto:careers@rafter.ai?subject=Sales Representative Application'}
                      variant="primary"
                      className="font-bold shadow-xl"
                      size="lg"
                    >
                      Apply Now
                    </Button>
                    <a
                      href="mailto:careers@rafter.ai"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-700/50 text-white font-semibold hover:bg-slate-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      careers@rafter.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cutting-Edge Tech</h3>
              <p className="text-slate-600 leading-relaxed">
                Work with the latest AI technology powered by Google Gemini, solving real problems for real businesses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growing Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Join a fast-growing startup where your contributions directly impact our success and growth trajectory.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="bg-brand-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Make an Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Help contractors maximize their claims and grow their businesses with AI-powered solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

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
