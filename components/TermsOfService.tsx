import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last Updated: January 2, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing or using RAFTER AI's platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI provides AI-powered software and services for restoration contractors, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Insurance policy analysis and interpretation</li>
              <li>Automated supplement letter generation</li>
              <li>Blind spot detection in insurance scopes</li>
              <li>AI-powered receptionist and lead management</li>
              <li>Automated estimate generation</li>
              <li>Document storage and management</li>
              <li>Building code database access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Eligibility and Account Requirements</h2>
            <p className="text-slate-700 leading-relaxed mb-3">To use RAFTER AI, you must:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Be a licensed restoration contractor or authorized business representative</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Beta Pricing Program</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI is currently offering beta pricing. By subscribing during the beta period:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>You receive a lifetime price lock at your subscription rate</li>
              <li>Your pricing will not increase as long as your subscription remains active</li>
              <li>You acknowledge that features may be in development and subject to change</li>
              <li>You agree to provide feedback to help improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-3">Subscription and billing terms:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Subscriptions are billed monthly in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>You authorize automatic recurring charges</li>
              <li>Failure to pay may result in service suspension or termination</li>
              <li>Price changes will be communicated 30 days in advance (beta pricing excluded)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Acceptable Use Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Share your account credentials with unauthorized users</li>
              <li>Reverse engineer or copy our software</li>
              <li>Use our AI models to train competing services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. AI Services and Accuracy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI uses artificial intelligence to provide automated services. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>AI-generated content should be reviewed by qualified professionals</li>
              <li>We do not guarantee 100% accuracy of AI outputs</li>
              <li>You are responsible for verifying all estimates, claims, and documents</li>
              <li>AI services are tools to assist, not replace, professional judgment</li>
              <li>We are not liable for decisions made based solely on AI recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All content, features, and functionality of RAFTER AI are owned by us and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You retain ownership of data you upload, but grant us a license to process, store, and use it to provide our services and improve our AI models.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data and Privacy</h2>
            <p className="text-slate-700 leading-relaxed">
              Your use of RAFTER AI is also governed by our Privacy Policy. By using our services, you consent to our data practices as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RAFTER AI IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of accuracy, reliability, or completeness</li>
              <li>Warranties of uninterrupted or error-free service</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAFTER AI SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Lost profits, revenue, data, or business opportunities</li>
              <li>Damages resulting from AI errors or inaccuracies</li>
              <li>Damages from unauthorized access to your account</li>
              <li>Any damages exceeding the amount you paid us in the prior 12 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Indemnification</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify and hold harmless RAFTER AI from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, violation of these terms, or infringement of any rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We may terminate or suspend your access immediately for:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Violation of these Terms of Service</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Any reason at our sole discretion</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              You may cancel your subscription at any time through your account settings. No refunds will be provided for partial months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Dispute Resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              Any disputes arising from these terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms of Service are governed by the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Material changes will be communicated via email or platform notification. Continued use after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Severability</h2>
            <p className="text-slate-700 leading-relaxed">
              If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Contact Information</h2>
            <p className="text-slate-700 leading-relaxed">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700"><strong>Email:</strong> legal@rafterai.com</p>
              <p className="text-slate-700"><strong>Mail:</strong> RAFTER AI Legal Department</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
