/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, Smartphone, Share2, BarChart3, ArrowRight, Menu } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 z-20">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-black tracking-tighter italic text-white flex items-center gap-2"
    >
      <div className="w-8 h-8 rounded-lg bg-volt-yellow flex items-center justify-center shadow-lg shadow-volt-yellow/20">
        <Zap className="w-5 h-5 text-black" fill="currentColor" />
      </div>
      VOLT.
    </motion.div>
    
    <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/50">
      <span className="text-volt-yellow border-b border-volt-yellow pb-1">Network</span>
      <a href="#features" className="hover:text-white cursor-pointer transition">Enterprise</a>
      <a href="#pricing" className="hover:text-white cursor-pointer transition">Pricing</a>
    </div>

    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all font-sans"
    >
      Client Login
    </motion.button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen pt-20 flex px-6 md:px-12 items-center z-10 overflow-hidden">
    <div className="w-full lg:w-1/2 space-y-8 z-20">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-volt-yellow tracking-widest uppercase"
      >
        New Era of Networking
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight"
      >
        One Tap <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-yellow via-white to-white/50">
          Infinite
        </span> <br/> 
        Reach.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md font-medium"
      >
        The world's most powerful NFC business ecosystem for modern sales leaders. Instant sharing, CRM sync, and engagement tracking.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-volt-yellow text-black font-black rounded-2xl shadow-xl shadow-volt-yellow/20 transition-transform"
        >
          DESIGN YOUR CARD
        </motion.button>
        <motion.button 
          whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-md transition-colors"
        >
          VIEW DEMO
        </motion.button>
      </motion.div>
    </div>

    {/* Right: Glass Card Visualization */}
    <div className="hidden lg:flex w-1/2 justify-center items-center relative">
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-volt-yellow/10 blur-[120px] rounded-full"
      />
      
      <motion.div 
        initial={{ opacity: 0, rotateY: 20, x: 50 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[440px] h-[260px] rounded-3xl relative p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass animate-float"
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-volt-yellow to-[#CA8A04] flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-black" fill="currentColor" />
          </div>
          <div className="text-white/20 font-black text-xl italic tracking-tighter">VOLT.</div>
        </div>
        <div className="space-y-1">
          <h3 className="text-white font-bold text-2xl uppercase tracking-wider">Julian Vance</h3>
          <p className="text-volt-yellow/80 text-[10px] font-bold tracking-[0.3em] uppercase">Founding Partner · Solstice Capital</p>
        </div>
        {/* Card Glow Effect Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </motion.div>
      
      {/* Floating Status Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-2 px-4 py-3 rounded-2xl glass-pill flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Card Active · NFC 3.0</span>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="p-8 rounded-[32px] glass hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-4"
  >
    <div className="w-10 h-10 rounded-xl bg-volt-yellow/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-volt-yellow" />
    </div>
    <div className="space-y-2">
      <h4 className="text-white font-bold text-lg tracking-tight uppercase">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-main-gradient min-h-screen text-white overflow-x-hidden selection:bg-volt-yellow selection:text-black">
      <Navbar />
      
      <Hero />

      {/* FEATURE GRID */}
      <section id="features" className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 py-24">
        <FeatureCard 
          icon={BarChart3}
          title="Lead Intelligence"
          description="Real-time notifications when your profile is viewed or shared. Data-driven networking starts here."
          delay={0.1}
        />
        <FeatureCard 
          icon={Share2}
          title="Seamless Sync"
          description="Auto-export contacts to HubSpot, Salesforce, and 2,000+ other apps via our native integrations."
          delay={0.2}
        />
        <FeatureCard 
          icon={Smartphone}
          title="Vault Security"
          description="Bank-grade encryption and privacy controls for your sensitive info. Fully dynamic digital identity."
          delay={0.3}
        />
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-volt-yellow text-xs font-black tracking-[0.5em] uppercase mb-4 block"
          >
            Invest in Connections
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase mb-6"
          >
            Choose Your Plan
          </motion.h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Tailored for every stage of your business growth. From solo founders to global sales organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-[40px] glass flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Starter</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">$0</span>
                <span className="text-white/30 text-sm font-bold uppercase tracking-widest">/forever</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['2 Digital Cards', 'Standard Templates', 'QR Code Sharing', 'Limited Analytics'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-3 h-3 text-volt-yellow" fill="currentColor" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
              GET STARTED
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[40px] glass relative overflow-hidden border-volt-yellow/30 bg-white/[0.05]"
          >
            <div className="absolute top-5 right-5 bg-volt-yellow text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Professional</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">$4.99</span>
                <span className="text-white/30 text-sm font-bold uppercase tracking-widest">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['Unlimited Digital Cards', 'Custom Branding & Colors', 'CRM Export (Basic)', 'Priority Follow-up Tools', 'Advanced Analytics'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                    <Zap className="w-3 h-3 text-volt-yellow" fill="currentColor" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-4 rounded-2xl bg-volt-yellow text-black font-black shadow-xl shadow-volt-yellow/20 hover:scale-105 transition-transform">
              GO PRO NOW
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 rounded-[40px] glass flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['Team Management Dashboard', 'Salesforce & HubSpot Integration', 'SSO & Azure AD Sync', 'Custom API Access', 'Dedicated Success Manager'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-3 h-3 text-volt-yellow" fill="currentColor" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
              CONTACT SALES
            </button>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 px-6 text-center bg-white/[0.02] border-y border-white/5 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-volt-yellow text-xs font-black tracking-[0.5em] uppercase mb-6 block">Ready to Upgrade?</span>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight uppercase leading-[0.9]">
            The Future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-yellow to-white">Networking</span> is Here.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-volt-yellow text-black font-black rounded-2xl shadow-2xl shadow-volt-yellow/30 text-xl tracking-tight"
          >
            GET STARTED NOW
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-3xl font-black italic tracking-tighter text-white">VOLT.</div>
          <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
            Built for the high-performance void. &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-12 text-[11px] font-bold uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-volt-yellow transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-volt-yellow transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-volt-yellow transition-colors">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

