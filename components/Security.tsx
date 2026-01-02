import React from 'react';
import { ArrowLeft, Shield, Lock, Key, Server, Eye, Bell, FileCheck, Users } from 'lucide-react';

interface SecurityProps {
  onBack: () => void;
}

export default function Security({ onBack }: SecurityProps) {
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

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-600" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900">Security</h1>
          </div>
          <p className="text-lg text-slate-600">
            Your data security is our top priority. Learn how we protect your information.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Security</h2>
            <p className="text-slate-700 leading-relaxed">
              At RAFTER AI, we understand that you trust us with sensitive business data, insurance information, and customer details. We implement comprehensive security measures to protect your data and maintain the highest standards of security across our platform.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">End-to-End Encryption</h3>
              <p className="text-slate-700 text-sm">
                All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocols.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Infrastructure</h3>
              <p className="text-slate-700 text-sm">
                We use enterprise-grade cloud infrastructure with built-in redundancy, automated backups, and 99.9% uptime.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Access Controls</h3>
              <p className="text-slate-700 text-sm">
                Role-based access controls ensure that team members only access data necessary for their role.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Monitoring</h3>
              <p className="text-slate-700 text-sm">
                Continuous monitoring and automated threat detection protect against unauthorized access and attacks.
              </p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Protection Measures</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  Encryption at Rest
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  All data stored in our databases is encrypted using AES-256 encryption. This includes documents, photos, insurance policies, estimates, and customer information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  Encryption in Transit
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  All communications between your browser and our servers use TLS 1.3 encryption, protecting your data from interception during transmission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  Secure Authentication
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Strong password requirements, secure session management, and optional two-factor authentication (2FA) protect account access.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  Regular Backups
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Automated daily backups ensure your data is recoverable in case of system failure. Backups are encrypted and stored in geographically distributed locations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  Data Isolation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Each customer's data is logically isolated using Row Level Security (RLS) policies, ensuring no cross-customer data access.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Compliance and Certifications</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We adhere to industry best practices and regulatory requirements:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li><strong>SOC 2 Compliance:</strong> Our infrastructure providers maintain SOC 2 Type II certification</li>
              <li><strong>GDPR:</strong> We comply with EU General Data Protection Regulation requirements</li>
              <li><strong>CCPA:</strong> We honor California Consumer Privacy Act rights</li>
              <li><strong>HIPAA-Ready:</strong> Our infrastructure supports HIPAA-compliant configurations</li>
              <li><strong>PCI DSS:</strong> Payment processing follows Payment Card Industry standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">AI and Data Processing Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our AI services process sensitive insurance and business data. We ensure:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>AI processing occurs in secure, isolated environments</li>
              <li>Data sent to AI providers (Google Gemini) is encrypted and protected</li>
              <li>AI training does not use customer data without explicit consent</li>
              <li>Temporary processing data is automatically deleted after use</li>
              <li>AI model access is restricted and audited</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Testing and Audits</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We maintain security through:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Regular penetration testing by third-party security firms</li>
              <li>Automated vulnerability scanning and patch management</li>
              <li>Code security reviews and static analysis</li>
              <li>Security incident response planning and drills</li>
              <li>Annual third-party security audits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Employee Security Practices</h2>
            <p className="text-slate-700 leading-relaxed mb-3">Our team follows strict security protocols:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Background checks for all employees with data access</li>
              <li>Security awareness training and ongoing education</li>
              <li>Principle of least privilege access</li>
              <li>Mandatory multi-factor authentication for internal systems</li>
              <li>Strict confidentiality agreements</li>
              <li>Secure development lifecycle practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Incident Response</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              In the event of a security incident:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>We have a dedicated incident response team available 24/7</li>
              <li>Incidents are assessed, contained, and remediated immediately</li>
              <li>Affected customers are notified within 72 hours</li>
              <li>We provide transparent post-incident reports</li>
              <li>Root cause analysis prevents future occurrences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Security Responsibilities</h2>
            <p className="text-slate-700 leading-relaxed mb-3">Help us keep your account secure:</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Use strong, unique passwords (minimum 12 characters)</li>
              <li>Enable two-factor authentication</li>
              <li>Never share your login credentials</li>
              <li>Log out when using shared devices</li>
              <li>Keep your devices and browsers updated</li>
              <li>Report suspicious activity immediately</li>
              <li>Review account activity regularly</li>
            </ul>
          </section>

          <section className="mb-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Report a Security Issue</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you discover a security vulnerability or have security concerns, please report them immediately.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-slate-700 font-medium mb-2">Security Contact:</p>
                  <p className="text-slate-700"><strong>Email:</strong> security@rafterai.com</p>
                  <p className="text-slate-700 text-sm mt-2">
                    We appreciate responsible disclosure and will respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions About Security?</h2>
            <p className="text-slate-700 leading-relaxed">
              For detailed information about our security practices, compliance certifications, or to request our security whitepaper, contact us at security@rafterai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
