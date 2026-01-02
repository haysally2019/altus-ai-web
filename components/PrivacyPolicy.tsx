import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last Updated: January 2, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Account information (name, email, phone number, company details)</li>
              <li>Project data (property addresses, insurance claim information, estimates)</li>
              <li>Documents and files you upload (insurance policies, photos, reports)</li>
              <li>Communication data (customer interactions, support requests)</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (features accessed, time spent, interactions)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log data (error reports, system diagnostics)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We use collected information for:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Providing and maintaining our AI-powered restoration services</li>
              <li>Processing insurance claims and generating estimates</li>
              <li>Analyzing policies and building codes with our AI models</li>
              <li>Managing customer relationships and communications</li>
              <li>Improving our AI algorithms and service quality</li>
              <li>Sending important updates and notifications</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. AI and Machine Learning</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI uses artificial intelligence, including Google's Gemini AI, to analyze documents, generate estimates, and provide automated services. Your data may be processed by these AI systems to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Read and interpret insurance policies</li>
              <li>Analyze satellite and drone imagery</li>
              <li>Generate supplement letters and rebuttals</li>
              <li>Detect errors and omissions in scopes</li>
              <li>Improve our AI model accuracy and performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operations (Google AI, cloud hosting, payment processing)</li>
              <li><strong>Insurance Companies:</strong> When necessary to process claims on your behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-700 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Project data is typically retained for 7 years to meet insurance and legal requirements. You may request deletion of your data, subject to legal and contractual obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@rafterai.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. International Data Transfers</h2>
            <p className="text-slate-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700"><strong>Email:</strong> privacy@rafterai.com</p>
              <p className="text-slate-700"><strong>Mail:</strong> RAFTER AI Privacy Team</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
