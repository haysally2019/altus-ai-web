import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Menu,
  X,
  FileSearch,
  ShieldCheck,
  Check,
  FileText,
  Scale,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Calculator,
  Lock,
  Clock,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  MessageSquare,
  Calendar,
  Printer,
  Server,
  Users,
  Mail,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/Button';

// --- Modal Component ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col animate-fade-in-up">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // ROI Calculator State
  const [claimsPerMonth, setClaimsPerMonth] = useState(8);
  const avgSupplement = 1450; // Conservative average
  const annualRevenue = claimsPerMonth * avgSupplement * 12;

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Modal State
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Redirect to external onboarding
  const handleCtaClick = () => {
    window.location.href = "https://haysally2019-roofpro-4e9g.bolt.host/onboarding";
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- Modal Content Generators ---
  const renderModalContent = () => {
    switch (activeModal) {
      case 'contact':
        return (
          <div className="space-y-6">
            <p className="text-slate-600">Have a question about enterprise plans or API integrations? Our team usually responds within 2 hours.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will contact you shortly.'); setActiveModal(null); }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Doe" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="john@company.com" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="How can we help?" required></textarea>
              </div>
              <Button type="submit" className="w-full font-bold">Send Message</Button>
            </form>
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100 text-slate-500 text-sm">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@rafter.ai</span>
            </div>
          </div>
        );
      case 'code-database':
        return (
          <div className="space-y-6">
            <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mb-6">
              <h4 className="flex items-center gap-2 font-bold text-brand-800 mb-2">
                <FileText className="w-5 h-5" /> Live Database Access
              </h4>
              <p className="text-brand-700 text-sm">RAFTER AI maintains real-time access to the complete ICC digital library, including state-specific amendments.</p>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-slate-900">Supported Code Books</h4>
               <ul className="grid sm:grid-cols-2 gap-3">
                 {['IBC 2018 / 2021 / 2024', 'IRC 2018 / 2021 / 2024', 'IECC Energy Codes', 'Florida Building Code', 'California Residential Code', 'Texas TDI Windstorm'].map((code) => (
                   <li key={code} className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                     <Check className="w-4 h-4 text-green-500" /> {code}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="pt-6 border-t border-slate-100">
              <p className="text-slate-500 text-sm italic">Our AI automatically cites the correct code year based on the loss date and property zip code.</p>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-6">
             <div className="w-full h-48 bg-gradient-to-r from-brand-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-16 h-16 text-white opacity-90" />
             </div>
             <p className="text-lg font-medium text-slate-900">We are building the operating system for the modern restoration contractor.</p>
             <p className="text-slate-600 leading-relaxed">
               RAFTER AI was founded in 2023 by a team of former insurance adjusters, roofing business owners, and Google engineers. We saw firsthand how much money contractors lose due to "scope gaps"—valid line items that adjusters omit simply because they can.
             </p>
             <p className="text-slate-600 leading-relaxed">
               Our mission is to level the playing field. By arming contractors with the same level of data sophistication that insurance carriers use, we ensure fair payouts for fair work.
             </p>
             <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                   <div className="font-black text-2xl text-brand-600">500+</div>
                   <div className="text-xs text-slate-500 uppercase font-bold">Contractors</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                   <div className="font-black text-2xl text-green-600">$42M+</div>
                   <div className="text-xs text-slate-500 uppercase font-bold">Recovered</div>
                </div>
             </div>
          </div>
        );
      case 'privacy':
      case 'terms':
      case 'security':
        return (
          <div className="space-y-4 text-slate-600 leading-relaxed">
             <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3 mb-6">
                <Lock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                   <h4 className="font-bold text-yellow-800 text-sm">Enterprise Grade Security</h4>
                   <p className="text-yellow-700 text-xs mt-1">We are SOC 2 Type II compliant and fully encrypted.</p>
                </div>
             </div>
             <p><strong>Last Updated: October 2024</strong></p>
             <p>This is a placeholder for the full legal text. In a production environment, this would contain the complete {activeModal === 'privacy' ? 'Privacy Policy' : activeModal === 'terms' ? 'Terms of Service' : 'Security Documentation'}.</p>
             <p>RAFTER AI prioritizes data sovereignty. Your estimates, client data, and pricing strategies are never shared with third parties or insurance carriers. We utilize Google Cloud Platform (GCP) with AES-256 encryption at rest and TLS 1.3 in transit.</p>
             <p>For specific compliance requests (HIPAA, GDPR, CCPA), please contact our legal team at legal@rafter.ai.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
     switch(activeModal) {
        case 'contact': return 'Contact Support';
        case 'code-database': return 'ICC Code Database';
        case 'about': return 'About RAFTER AI';
        case 'privacy': return 'Privacy Policy';
        case 'terms': return 'Terms of Service';
        case 'security': return 'Security & Compliance';
        default: return '';
     }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 overflow-x-hidden">
      
      {/* Modal Overlay */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        title={getModalTitle()}
      >
        {renderModalContent()}
      </Modal>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20 transform hover:scale-105 transition-transform duration-300">
                <Zap className="text-white w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                 <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">RAFTER AI</span>
                 <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 uppercase tracking-widest mt-0.5">Roofing Software</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#calculator" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">ROI Calculator</a>
              <a href="#features" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">Features</a>
              <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">FAQ</a>
              <Button onClick={handleCtaClick} variant="primary" size="md" className="shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-0.5 font-bold">Start Free Trial</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-2xl absolute w-full animate-fade-in-up">
            <a href="#calculator" className="block text-lg font-medium text-slate-600 p-2 hover:text-brand-600">ROI Calculator</a>
            <a href="#features" className="block text-lg font-medium text-slate-600 p-2 hover:text-brand-600">Features</a>
            <Button onClick={handleCtaClick} variant="primary" size="lg" className="w-full mt-4 font-bold">Start Free Trial</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-brand-100/40 to-cyan-100/40 rounded-full blur-[80px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm text-slate-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 hover:border-brand-300 transition-colors cursor-default select-none">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Gemini 2.5 Supplement Engine Live
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.05]">
              Maximize Every <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-brand-600 animate-gradient-x">Insurance Claim.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Stop letting adjusters dictate your margins. RAFTER AI instantly audits scopes, identifies missed line items, and writes <span className="font-semibold text-brand-600">code-backed rebuttals</span> in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
                <Button 
                    onClick={handleCtaClick} 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto px-10 h-16 text-lg font-bold shadow-xl shadow-brand-500/20 hover:scale-105 hover:shadow-brand-500/30 transition-all duration-300"
                >
                    Start Free Trial
                </Button>
                <div className="text-sm text-slate-400 font-medium sm:hidden">No credit card required</div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-500">
               <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-500" /> 7-Day Free Trial</span>
               <span className="hidden sm:inline text-slate-300">•</span>
               <span className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-green-500" /> Avg. +$1,850 per claim</span>
               <span className="hidden sm:inline text-slate-300">•</span>
               <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-500" /> IRC & Manufacturer Backed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Compatible with Industry Standards</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex gap-16 px-16 items-center whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-black text-slate-800">Xactimate</span>
             <span className="text-2xl font-black text-slate-800">Symbility</span>
             <span className="text-2xl font-black text-slate-800">EagleView</span>
             <span className="text-2xl font-black text-slate-800">Hover</span>
             <span className="text-2xl font-black text-slate-800">CompanyCam</span>
             <span className="text-2xl font-black text-slate-800">Xactimate</span>
             <span className="text-2xl font-black text-slate-800">Symbility</span>
             <span className="text-2xl font-black text-slate-800">EagleView</span>
             <span className="text-2xl font-black text-slate-800">Hover</span>
             <span className="text-2xl font-black text-slate-800">CompanyCam</span>
          </div>
        </div>
      </div>

      {/* Interactive ROI Calculator Section */}
      <section id="calculator" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <div className="bg-white rounded-3xl shadow-2xl shadow-brand-900/10 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-purple-500"></div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">
                      Monthly Insurance Claims: <span className="text-brand-600 text-lg">{claimsPerMonth}</span>
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      value={claimsPerMonth} 
                      onChange={(e) => setClaimsPerMonth(parseInt(e.target.value))}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                      <span>1 Claim</span>
                      <span>50 Claims</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                         <div className="bg-green-100 p-2 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600"/></div>
                         <span className="font-semibold text-slate-700">Avg. Supplement</span>
                      </div>
                      <span className="font-bold text-slate-900">${avgSupplement.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                         <div className="bg-blue-100 p-2 rounded-lg"><Calculator className="w-5 h-5 text-blue-600"/></div>
                         <span className="font-semibold text-slate-700">Monthly Recovery</span>
                      </div>
                      <span className="font-bold text-slate-900 text-lg">+ ${(claimsPerMonth * avgSupplement).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-500 font-medium mb-2">Potential Annual Missed Revenue</p>
                    <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-600 tracking-tight">
                      ${annualRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-400 mt-4">*Based on national average of $1,450 missed per claim.</p>
                  </div>

                  <Button onClick={handleCtaClick} className="w-full mt-8 font-bold text-lg h-14" variant="primary">
                    Start Free Trial
                  </Button>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Math doesn't lie. <br/>You are leaving money on the roof.</h2>
               <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                 Most contractors are too busy to fight for every line item. Adjusters know this. They intentionally omit items like starter strips, ridge waste, and O&P, knowing you likely won't catch it.
               </p>
               <ul className="space-y-6">
                 {[
                   { title: 'The "Good Enough" Trap', desc: 'Settling for the first check to keep cash flow moving costs you 20% margins.' },
                   { title: 'Complexity Overload', desc: 'Keeping up with 1,000+ pages of IRC building codes is impossible for humans. Not for AI.' },
                   { title: 'Emotional Burnout', desc: 'Arguing with adjusters is exhausting. Let our AI write the polite, code-backed emails for you.' }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="mt-1 bg-red-100 p-1.5 rounded-full h-fit">
                       <X className="w-4 h-4 text-red-600" />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                       <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-4">Restoration Intelligence</h2>
               <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">The smartest way to <br/>fight insurance carriers.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: FileSearch, color: 'blue', title: 'Policy Decoder', desc: 'Gemini reads entire policies in seconds. It highlights "Law and Ordinance" coverage and exclusions so you know exactly what is covered before you file.' },
                 { icon: Scale, color: 'purple', title: 'Automated Rebuttals', desc: 'Stop typing emails. Generate professional supplement letters that cite specific building codes (IRC/IBC) and manufacturer specs automatically.' },
                 { icon: TrendingUp, color: 'green', title: 'Blind Spot Detection', desc: 'Our AI scans the scope against your drone photos. It finds missing drip edge, ice & water shield, and waste calculation errors instantly.' }
               ].map((feature, i) => (
                 <div key={i} className="text-left group hover:-translate-y-1 transition-transform duration-300">
                    <feature.icon className={`w-12 h-12 text-${feature.color}-600 mb-6`} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* AI Automation Section (NEW) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         {/* Background glow effects */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-4">Complete Autopilot</h2>
               <p className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Run your business <br/>while you sleep.</p>
               <p className="text-xl text-slate-400 font-light leading-relaxed">RAFTER AI isn't just a supplement tool. It's a full-service employee that answers phones and writes estimates 24/7.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
               
               {/* Feature 1: AI Receptionist */}
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800 rounded-2xl p-8 h-full border border-slate-700/50">
                     <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                        <PhoneCall className="w-7 h-7 text-blue-400" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">The Receptionist That Never Sleeps</h3>
                     <p className="text-slate-400 mb-8 leading-relaxed">
                        Missed calls are missed revenue. Our AI answers phones, qualifies leads via SMS, and books appointments directly to your Google Calendar.
                     </p>
                     
                     {/* Chat Visualization */}
                     <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/50 space-y-3 font-mono text-sm">
                        <div className="flex gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs">User</div>
                           <div className="bg-slate-800 p-3 rounded-r-lg rounded-bl-lg text-slate-300">
                              I have a leak in my roof. Can you help?
                           </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                           <div className="w-8 h-8 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-xs">AI</div>
                           <div className="bg-brand-900/40 border border-brand-500/20 p-3 rounded-l-lg rounded-br-lg text-blue-100">
                              Absolutely. I can have a project manager out there tomorrow at 2 PM or 4 PM. Which works best?
                           </div>
                        </div>
                        <div className="flex gap-3">
                           <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs">User</div>
                           <div className="bg-slate-800 p-3 rounded-r-lg rounded-bl-lg text-slate-300">
                              2 PM is great.
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 text-xs font-bold mt-2 bg-green-900/20 p-2 rounded justify-center">
                           <Calendar className="w-3 h-3" /> Appointment Booked: Tomorrow @ 2:00 PM
                        </div>
                     </div>
                  </div>
               </div>

               {/* Feature 2: AI Estimates */}
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800 rounded-2xl p-8 h-full border border-slate-700/50">
                     <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                        <Printer className="w-7 h-7 text-purple-400" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4">Estimates in Seconds, Not Days</h3>
                     <p className="text-slate-400 mb-8 leading-relaxed">
                        Stop driving across town just to measure a roof. Enter an address, and our AI analyzes satellite imagery to generate a branded PDF quote instantly.
                     </p>
                     
                     {/* Quote Visualization */}
                     <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-xl relative overflow-hidden h-64 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                         <div className="flex justify-between items-start mb-4 border-b border-slate-200 pb-2">
                            <div className="flex items-center gap-2">
                               <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center"><Zap className="w-3 h-3 text-white"/></div>
                               <span className="text-slate-900 font-bold text-xs">RAFTER AI Estimate</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">#EST-2024-89</span>
                         </div>
                         <div className="space-y-2 mb-4">
                            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                         </div>
                         <div className="bg-slate-100 p-3 rounded border border-slate-200 mb-3">
                            <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                               <span>Materials (Asphalt Shingle)</span>
                               <span>$8,450.00</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-slate-700">
                               <span>Labor & Disposal</span>
                               <span>$4,200.00</span>
                            </div>
                         </div>
                         <div className="flex justify-between items-center mt-4">
                            <span className="text-xs font-bold text-slate-500">TOTAL ESTIMATE</span>
                            <span className="text-xl font-black text-brand-600">$12,650.00</span>
                         </div>
                         
                         {/* Floating Badge */}
                         <div className="absolute bottom-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <Check className="w-3 h-3" /> Ready to Send
                         </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900">Why Top Contractors Switch</h2>
           </div>
           
           <div className="overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-100">
             <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm md:text-base font-bold tracking-wide">
                <div className="col-span-1">FEATURE</div>
                <div className="col-span-1 text-center text-slate-400">OLD WAY</div>
                <div className="col-span-1 text-center text-brand-400 flex items-center justify-center gap-2">
                   <Zap className="w-5 h-5" /> RAFTER AI
                </div>
             </div>
             {[
               { name: 'Scope Review Time', bad: '45-60 Minutes', good: '30 Seconds' },
               { name: 'Code Research', bad: 'Manual Google Search', good: 'Instant Citation' },
               { name: 'Lead Response Time', bad: 'Hours / Days', good: 'Instant (24/7)' },
               { name: 'Estimating', bad: 'Drive & Measure', good: 'Satellite AI' },
               { name: 'Cost Per Supplement', bad: '$150 - $400 (3rd Party)', good: 'Included in Sub' },
               { name: 'Success Rate', bad: 'Hit or Miss', good: 'Consistent & Data-Backed' },
             ].map((row, i) => (
               <div key={i} className={`grid grid-cols-3 p-6 border-b border-slate-100 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <div className="font-bold text-slate-800 text-sm md:text-lg">{row.name}</div>
                  <div className="text-center text-slate-500 font-medium">{row.bad}</div>
                  <div className="text-center text-brand-700 font-bold bg-brand-50 rounded-lg py-1 mx-auto w-fit px-4 border border-brand-100">{row.good}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16">Results from the Field</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Mike R.", company: "Apex Roofing", quote: "We added $42k in pure profit in our first month just by catching O&P omissions.", rating: 5 },
                 { name: "Sarah L.", company: "Storm Guard", quote: "The rebuttal writer is insane. It pulls up codes I didn't even know existed. Adjusters just pay it.", rating: 5 },
                 { name: "David K.", company: "Premier Restoration", quote: "Finally, I don't have to hire a 3rd party supplement company taking 20% of my profit.", rating: 5 }
               ].map((t, i) => (
                 <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex text-yellow-400 mb-4">
                       {[...Array(t.rating)].map((_, r) => <ThumbsUp key={r} className="w-5 h-5 fill-current mr-1" />)}
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed mb-6">"{t.quote}"</p>
                    <div>
                       <div className="font-bold text-slate-900">{t.name}</div>
                       <div className="text-sm text-slate-500">{t.company}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing / Beta Offer */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Founder's Beta Access</h2>
                <p className="text-xl text-slate-600">Lock in beta pricing for life. Never pay more as you scale.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300">
                   <div className="p-8 flex-1">
                       <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/20">
                          <Sparkles className="w-3 h-3 fill-current" /> Beta Pricing
                       </div>

                       <div className="mb-8">
                          <div className="flex items-baseline gap-1 mb-2">
                             <span className="text-5xl font-black text-white tracking-tighter">$199</span>
                             <span className="text-xl font-bold text-slate-400">/mo</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-300 font-bold">
                             <Users className="w-5 h-5" />
                             <span className="text-lg">Up to 5 Users</span>
                          </div>
                       </div>

                       <div className="mb-6 pb-6 border-b border-slate-700">
                          <p className="text-slate-400 text-sm font-medium">Full Platform Access:</p>
                       </div>

                       <ul className="space-y-3 mb-8">
                          {[
                              "AI Supplement Automation",
                              "Code Database Access",
                              "Unlimited Document Storage",
                              "Policy Decoder",
                              "Automated Rebuttals"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                  <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                  {item}
                              </li>
                          ))}
                       </ul>
                   </div>

                   <div className="p-8 pt-0">
                       <Button onClick={handleCtaClick} variant="primary" className="w-full font-bold h-12 shadow-xl">
                          Start Free Trial
                       </Button>
                       <p className="text-xs text-slate-500 mt-4 text-center font-medium flex items-center justify-center gap-2">
                          <Lock className="w-3 h-3" /> Lifetime Price Lock
                       </p>
                   </div>
                </div>

                {/* Growth Plan */}
                <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300 border-2 border-brand-500 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      Most Popular
                   </div>
                   <div className="p-8 flex-1">
                       <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/20">
                          <Sparkles className="w-3 h-3 fill-current" /> Beta Pricing
                       </div>

                       <div className="mb-8">
                          <div className="flex items-baseline gap-1 mb-2">
                             <span className="text-5xl font-black text-white tracking-tighter">$499</span>
                             <span className="text-xl font-bold text-slate-400">/mo</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-300 font-bold">
                             <Users className="w-5 h-5" />
                             <span className="text-lg">Up to 15 Users</span>
                          </div>
                       </div>

                       <div className="mb-6 pb-6 border-b border-slate-700">
                          <p className="text-slate-400 text-sm font-medium">Full Platform Access:</p>
                       </div>

                       <ul className="space-y-3 mb-8">
                          {[
                              "AI Supplement Automation",
                              "Code Database Access",
                              "Unlimited Document Storage",
                              "Policy Decoder",
                              "Automated Rebuttals"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                  <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                  {item}
                              </li>
                          ))}
                       </ul>
                   </div>

                   <div className="p-8 pt-0">
                       <Button onClick={handleCtaClick} variant="primary" className="w-full font-bold h-12 shadow-xl">
                          Start Free Trial
                       </Button>
                       <p className="text-xs text-slate-500 mt-4 text-center font-medium flex items-center justify-center gap-2">
                          <Lock className="w-3 h-3" /> Lifetime Price Lock
                       </p>
                   </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300 relative">
                   <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[60px] animate-pulse-slow"></div>
                   <div className="p-8 flex-1 relative z-10">
                       <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/20">
                          <Sparkles className="w-3 h-3 fill-current" /> Beta Pricing
                       </div>

                       <div className="mb-8">
                          <div className="flex items-baseline gap-1 mb-2">
                             <span className="text-5xl font-black text-white tracking-tighter">$999</span>
                             <span className="text-xl font-bold text-brand-100">/mo</span>
                          </div>
                          <div className="flex items-center gap-2 text-white font-bold">
                             <Users className="w-5 h-5" />
                             <span className="text-lg">Unlimited Users</span>
                          </div>
                       </div>

                       <div className="mb-6 pb-6 border-b border-white/20">
                          <p className="text-brand-100 text-sm font-medium">Full Platform Access:</p>
                       </div>

                       <ul className="space-y-3 mb-8">
                          {[
                              "AI Supplement Automation",
                              "Code Database Access",
                              "Unlimited Document Storage",
                              "Policy Decoder",
                              "Automated Rebuttals"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                                  <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                  {item}
                              </li>
                          ))}
                       </ul>
                   </div>

                   <div className="p-8 pt-0 relative z-10">
                       <Button onClick={handleCtaClick} variant="primary" className="w-full font-bold h-12 shadow-xl bg-white text-brand-600 hover:bg-slate-50">
                          Start Free Trial
                       </Button>
                       <p className="text-xs text-brand-100 mt-4 text-center font-medium flex items-center justify-center gap-2">
                          <Lock className="w-3 h-3" /> Lifetime Price Lock
                       </p>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900 text-white">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {[
                 { q: "Does this work with Xactimate and Symbility?", a: "Yes. You simply upload the PDF scope exported from any estimating software. Our AI reads the line items directly from the document." },
                 { q: "Is my data secure?", a: "Absolutely. We use bank-level encryption and are Google Cloud Partners. Your estimates and client data are never shared with insurance carriers." },
                 { q: "Do I need to be a coding expert?", a: "No. The interface is drag-and-drop. If you can upload a file, you can use RAFTER AI." },
                 { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel your subscription instantly from your dashboard." }
               ].map((faq, i) => (
                 <div key={i} className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800/30">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800 transition-colors"
                    >
                       <span className="font-bold text-lg">{faq.q}</span>
                       {openFaqIndex === i ? <ChevronUp className="w-5 h-5 text-brand-400"/> : <ChevronDown className="w-5 h-5 text-slate-400"/>}
                    </button>
                    {openFaqIndex === i && (
                      <div className="p-6 pt-0 text-slate-300 leading-relaxed border-t border-slate-700/50">
                         {faq.a}
                      </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Join Our Team</h2>
               <p className="text-xl text-slate-600">Help contractors transform their businesses with AI</p>
            </div>

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
         </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-32 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-5xl mx-auto px-4 text-center text-white relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">Stop letting adjusters <br/>win.</h2>
            <p className="text-2xl text-brand-100 mb-12 max-w-3xl mx-auto font-light">Join 500+ restoration contractors using Gemini to increase their claim value by 20%.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button onClick={handleCtaClick} variant="primary" className="shadow-2xl text-xl font-bold px-12 h-16" size="lg">Start Free Trial</Button>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-brand-200 font-medium">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4"/> SOC 2 Secure</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4"/> Google Cloud Partner</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> Cancel Anytime</span>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8 text-white">
               <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
               <span className="font-bold text-2xl tracking-tight">RAFTER AI</span>
            </div>
            <p className="text-base leading-relaxed mb-8 text-slate-500">The #1 AI platform for insurance restoration contractors. Maximize claims, automate supplements, and scale your business.</p>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Technology Partners</div>
            <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="font-bold text-white text-lg">Google Cloud</span>
                <span className="font-bold text-white text-lg">Gemini</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Platform</h4>
            <ul className="space-y-4 text-base">
                <li><a href="#features" className="hover:text-brand-400 transition-colors text-left block">Supplement Detector</a></li>
                <li><a href="#calculator" className="hover:text-brand-400 transition-colors text-left block">Scope Audit</a></li>
                <li><button onClick={() => setActiveModal('code-database')} className="hover:text-brand-400 transition-colors text-left">Code Database</button></li>
            </ul>
          </div>
           <div>
            <h4 className="text-white font-bold mb-8 text-lg">Company</h4>
            <ul className="space-y-4 text-base">
                <li><button onClick={() => setActiveModal('about')} className="hover:text-brand-400 transition-colors">About Us</button></li>
                <li><a href="#testimonials" className="hover:text-brand-400 transition-colors">Success Stories</a></li>
                <li><button onClick={() => setActiveModal('contact')} className="hover:text-brand-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Legal</h4>
            <ul className="space-y-4 text-base">
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-brand-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal('terms')} className="hover:text-brand-400 transition-colors">Terms of Service</button></li>
                <li><button onClick={() => setActiveModal('security')} className="hover:text-brand-400 transition-colors">Security</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-900 text-sm text-center text-slate-600">
            © 2024 RAFTER AI. Powered by Google Gemini. All rights reserved.
        </div>
      </footer>
    </div>
  );
};