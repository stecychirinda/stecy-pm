import React, { useState } from 'react';
import { Home, BookOpen, Trophy, Lightbulb, Mail, Sparkles, Target, Zap, Heart, Award, ExternalLink, Linkedin, Phone, MapPin, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredAward, setHoveredAward] = useState(null);
  const [certFilter, setCertFilter] = useState('all');

  const certs = [
    { title: "GenAI for Product Managers", issuer: "Coursera", date: "Dec 2025", id: "BB00J28S1EKX", category: "pm", color: "from-blue-500 to-blue-600", icon: Target },
    { title: "Google AI Essentials", issuer: "Coursera", date: "Dec 2025", category: "ai", color: "from-red-500 to-pink-600", icon: Sparkles },
    { title: "Meta GenAI in Data Analytics", issuer: "Coursera", date: "Dec 2025", id: "P9LYXMJAXTY5", category: "ai", color: "from-purple-500 to-pink-600", icon: Award },
    { title: "Product Management: AI-Powered Products", issuer: "Coursera", date: "Dec 2025", category: "pm", color: "from-cyan-500 to-blue-600", icon: Zap },
    { title: "IBM AI Practitioner V2", issuer: "IBM", date: "Jun 2024", category: "ai", color: "from-orange-500 to-red-600", icon: Heart }
  ];

  const filteredCerts = certFilter === 'all' ? certs : certs.filter(c => c.category === certFilter);

  const awards = [
    { title: "NexusBiztech Winner", year: "2025", info: "Won for strategic thinking and building a user-focused product roadmap that resonated with judges.", gradient: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", accent: "text-amber-400", image: "/biztech.jpg" },
    { title: "Mastercard Data Challenge", year: "2025", info: "Top finisher in the national data analytics competition; recognized for actionable insights and presentation excellence.", gradient: "from-red-500/20 to-pink-500/20", border: "border-red-500/30", accent: "text-red-400", image: "/data-challenge.jpg" }
  ];

  const companies = [
    { name: "Meta", role: "Product Strategy", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc_logo.svg", color: "from-blue-500 to-cyan-500" },
    { name: "PwC", role: "Consulting", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/PwC_logo.svg", color: "from-red-600 to-orange-600" },
    { name: "Mastercard", role: "Data Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg", color: "from-red-500 to-yellow-600" },
    { name: "Analysis Group", role: "Advisory", logo: "https://www.analysisgroup.com/favicon.ico", color: "from-blue-600 to-blue-700" },
    { name: "ViableEdu", role: "EdTech", logo: "https://www.viableedu.com/favicon.ico", color: "from-green-500 to-emerald-600" },
    { name: "ColorStack", role: "Community", logo: "https://colorstack.org/favicon.ico", color: "from-purple-500 to-pink-600" },
    { name: "NABA", role: "Network", logo: "https://www.nabainc.org/favicon.ico", color: "from-indigo-600 to-purple-600" },
    { name: "Extern", role: "Exploration", logo: "https://www.joinextern.com/favicon.ico", color: "from-blue-500 to-purple-600" },
    { name: "BLK Capital", role: "Finance", logo: "https://www.blkcap.com/favicon.ico", color: "from-slate-700 to-slate-900" },
    { name: "BLK Consulting", role: "Strategy", logo: "https://www.blkconsulting.com/favicon.ico", color: "from-slate-600 to-slate-800" },
    { name: "Milken Institute", role: "Leadership", logo: "https://milkeninstitute.org/favicon.ico", color: "from-amber-600 to-yellow-600" },
    { name: "Society of Actuaries", role: "Professional", logo: "https://www.soa.org/favicon.ico", color: "from-cyan-600 to-blue-700" }
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">STECY.PM</h1>
              <p className="text-xs text-gray-500 font-bold tracking-widest">PRODUCT LEADER</p>
            </div>
          </motion.div>
          
          {/* Navigation Tabs */}
          <nav className="hidden lg:flex gap-2">
            {[
              { name: 'Home', icon: Home },
              { name: 'AI Certifications', icon: BookOpen },
              { name: 'Pitch Wins', icon: Trophy },
              { name: 'How I Think', icon: Lightbulb },
              { name: 'Contact', icon: Mail }
            ].map((tab) => (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.name
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}>
                {tab.name}
              </motion.button>
            ))}
          </nav>

          <motion.a 
            href="mailto:chirindastecy@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all">
            Get in Touch
          </motion.a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <AnimatePresence mode="wait">
          {/* HOME */}
          {activeTab === 'Home' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Hero */}
              <div className="mb-32">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left */}
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}>
                      <div className="inline-block">
                        <span className="text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 block">Welcome to My Portfolio</span>
                      </div>
                    </motion.div>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                      Building <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Products<br/>People Love</span>
                    </motion.h2>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-gray-600 leading-relaxed max-w-lg">
                      Strategic product thinker obsessed with <span className="font-bold text-gray-900">AI innovation</span> and <span className="font-bold text-gray-900">user-centric design</span>. Let's build the future together.
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-4 pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab('AI Certifications')} 
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50 transition-all flex items-center gap-2">
                        View My Expertise <ArrowRight size={18} />
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab('How I Think')} 
                        className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-bold hover:border-blue-600 hover:bg-blue-50 transition-all">
                        My Philosophy
                      </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
                      <div>
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">5+</div>
                        <p className="text-sm text-gray-600 font-bold mt-1">Certifications</p>
                      </div>
                      <div>
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">12+</div>
                        <p className="text-sm text-gray-600 font-bold mt-1">Companies</p>
                      </div>
                      <div>
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">2</div>
                        <p className="text-sm text-gray-600 font-bold mt-1">Major Wins</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right - Headshot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="relative">
                    <div className="relative">
                      {/* Animated Glow Background */}
                      <motion.div 
                        animate={{ 
                          boxShadow: [
                            "0 0 40px rgba(59, 130, 246, 0.2)",
                            "0 0 80px rgba(59, 130, 246, 0.3)",
                            "0 0 40px rgba(59, 130, 246, 0.2)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 rounded-full blur-2xl opacity-25"></motion.div>
                      
                      {/* Circular Headshot Container */}
                      <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-gray-200/20">
                        <img 
                          src="/headshot.jpg" 
                          alt="Stecy Chirinda - Product Manager" 
                          className="w-full h-full object-cover object-center scale-105"
                          onError={(e) => {
                            e.target.parentElement.innerHTML = `
                              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 flex items-center justify-center">
                                <div class="text-center text-white">
                                  <div class="text-6xl mb-4">📸</div>
                                  <p class="font-bold text-lg">Your Photo</p>
                                  <p class="text-sm opacity-90">Headshot.jpg</p>
                                </div>
                              </div>
                            `;
                          }}
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* COMPANIES FOOTER - Only on Home */}
              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-32 pt-16 border-t-2 border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-10">Experience & Network</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                  {companies.map((company, i) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="group p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all hover:bg-gradient-to-br hover:from-blue-50 hover:to-white flex flex-col items-center justify-center text-center">
                      <div className={`w-20 h-20 mb-4 flex items-center justify-center bg-gradient-to-br ${company.color} rounded-xl shadow-md group-hover:shadow-lg transition-all relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="h-14 w-14 object-contain relative z-10 drop-shadow-sm"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <p className="font-black text-gray-900 text-sm mb-1">{company.name}</p>
                      <p className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors font-semibold">{company.role}</p>
                      <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity mt-3"></div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center pt-10 border-t-2 border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold">© 2025 Stecy Chirinda. Building the future of product management.</p>
                </div>
              </motion.footer>            </motion.div>
          )}

          {/* AI CERTIFICATIONS */}
          {activeTab === 'AI Certifications' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-4xl lg:text-5xl font-black mb-4">AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Certifications</span></h2>
                  <p className="text-lg text-gray-600">Strategic expertise in AI for Product Management</p>
                </motion.div>
              </div>

              {/* Filters */}
              <div className="flex gap-3 mb-16 flex-wrap">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'PM Focus', value: 'pm' },
                  { label: 'AI Focus', value: 'ai' }
                ].map((filter) => (
                  <motion.button
                    key={filter.value}
                    onClick={() => setCertFilter(filter.value)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
                      certFilter === filter.value
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}>
                    {filter.label}
                  </motion.button>
                ))}
              </div>

              {/* Certs Grid */}
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
                {filteredCerts.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="group relative p-8 bg-white border border-gray-200/50 rounded-2xl hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300">
                      
                      {/* Gradient accent on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-cyan-50/0 group-hover:from-blue-50 group-hover:to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
                      
                      <div className="relative">
                        <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-3 mb-6 group-hover:scale-125 transition-all duration-300 shadow-lg`}>
                          <Icon className="text-white" size={28} />
                        </div>
                        <h4 className="font-black text-lg mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">{cert.title}</h4>
                        <p className="text-sm text-gray-600 font-semibold mb-4">{cert.issuer}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                          <span className="text-xs text-gray-500 font-bold">{cert.date}</span>
                          {cert.id && (
                            <motion.a 
                              href="#" 
                              whileHover={{ x: 2 }}
                              className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:gap-2 flex items-center gap-1 transition-all">
                              Verify <ExternalLink size={12} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* PITCH WINS */}
          {activeTab === 'Pitch Wins' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-4xl lg:text-5xl font-black mb-4">Competition <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Wins</span></h2>
                  <p className="text-lg text-gray-600">Recognized for strategic thinking & data-driven insights</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onMouseEnter={() => setHoveredAward(i)}
                    onMouseLeave={() => setHoveredAward(null)}
                    className={`relative h-96 rounded-3xl overflow-hidden cursor-pointer transition-all group hover:shadow-2xl hover:shadow-amber-600/20 ${award.border} border-2`}>
                    
                    {/* Award Image - Main Focus */}
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Fallback gradient if image doesn't load */}
                    <div className={`absolute inset-0 ${award.gradient}`}></div>
                    
                    {/* Base Overlay - Always visible (darker at bottom for text readability) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-all duration-300"></div>
                    
                    {/* Title and Year - Always Visible at Bottom */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-8 z-10"
                      animate={{ y: hoveredAward === i ? -80 : 0 }}
                      transition={{ duration: 0.3 }}>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-lg">{award.title}</h3>
                      <p className="text-sm text-amber-100 font-bold drop-shadow-md">{award.year}</p>
                    </motion.div>
                    
                    {/* Hover Overlay - Information */}
                    <AnimatePresence>
                      {hoveredAward === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/90 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center z-20">
                          <motion.div 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center mb-6 shadow-2xl">
                            <Trophy className="text-white" size={48} />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}>
                            <h3 className="text-2xl font-black text-white mb-4">{award.title}</h3>
                            <p className="font-semibold text-gray-100 text-base leading-relaxed">{award.info}</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* HOW I THINK */}
          {activeTab === 'How I Think' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-12">
                <h2 className="text-5xl font-black mb-4">How I <span className="text-blue-600">Think</span></h2>
                <p className="text-xl text-gray-600">My product philosophy and approach</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Why Product?",
                    icon: Target,
                    color: "blue",
                    text: "I'm driven by strategic thinking and the craft of building products that genuinely resonate with users. Creating solutions that solve real problems is everything."
                  },
                  {
                    title: "Why AI?",
                    icon: Zap,
                    color: "purple",
                    text: "AI is reshaping product strategy. I'm forward-thinking and passionate about staying ahead. Learning emerging tech gives us competitive advantage."
                  },
                  {
                    title: "Why Users?",
                    icon: Heart,
                    color: "pink",
                    text: "Users are the heartbeat of every business. I focus on understanding them deeply through data, thoughtful research, and genuine empathy, because their needs shape every meaningful product decision."
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-10 rounded-3xl border-2 transition-all group hover:shadow-xl
                      ${card.color === 'blue' ? 'bg-blue-50 border-blue-200 hover:border-blue-600' : ''}
                      ${card.color === 'purple' ? 'bg-purple-50 border-purple-200 hover:border-purple-600' : ''}
                      ${card.color === 'pink' ? 'bg-pink-50 border-pink-200 hover:border-pink-600' : ''}
                    `}>
                    <div className={`flex items-center justify-center w-14 h-14 rounded-lg mb-4 group-hover:scale-110 transition-transform
                      ${card.color === 'blue' ? 'bg-blue-200' : ''}
                      ${card.color === 'purple' ? 'bg-purple-200' : ''}
                      ${card.color === 'pink' ? 'bg-pink-200' : ''}
                    `}>
                      <card.icon className={`
                        ${card.color === 'blue' ? 'text-blue-700' : ''}
                        ${card.color === 'purple' ? 'text-purple-700' : ''}
                        ${card.color === 'pink' ? 'text-pink-700' : ''}
                      `} size={24} />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-gray-900">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Core Values */}
              <div className="bg-gray-50 rounded-3xl border-2 border-gray-200 p-12">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-8">Core Values</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['User-Centric', 'Data-Driven', 'Strategic', 'Collaborative', 'Innovative', 'Humble', 'Curious', 'Impact-Focused'].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 bg-white border-2 border-gray-200 rounded-xl text-center hover:border-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}>
                      <p className="font-bold text-gray-900">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CONTACT */}
          {activeTab === 'Contact' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-12">
                <h2 className="text-5xl font-black mb-4">Let's <span className="text-blue-600">Connect</span></h2>
                <p className="text-xl text-gray-600">Always open to discussing product strategy & opportunities</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { 
                    title: "Email",
                    value: "chirindastecy@gmail.com",
                    icon: Mail,
                    href: "mailto:chirindastecy@gmail.com",
                    color: "blue"
                  },
                  {
                    title: "Phone",
                    value: "318-963-3899",
                    icon: Phone,
                    href: "tel:3189633899",
                    color: "cyan"
                  },
                  {
                    title: "LinkedIn",
                    value: "linkedin.com/in/stecy-chirinda",
                    icon: Linkedin,
                    href: "https://linkedin.com/in/stecy-chirinda",
                    color: "purple"
                  },
                  {
                    title: "Location",
                    value: "Available Globally",
                    icon: MapPin,
                    href: null,
                    color: "pink"
                  }
                ].map((contact, i) => {
                  const Icon = contact.icon;
                  const bgColors = {
                    blue: "bg-blue-50 border-blue-200 hover:border-blue-600",
                    cyan: "bg-cyan-50 border-cyan-200 hover:border-cyan-600",
                    purple: "bg-purple-50 border-purple-200 hover:border-purple-600",
                    pink: "bg-pink-50 border-pink-200 hover:border-pink-600"
                  };
                  
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${bgColors[contact.color]}`}
                      whileHover={{ y: -5 }}>
                      <Icon size={32} className="mb-4 text-gray-900" />
                      <h4 className="text-lg font-black text-gray-900 mb-2">{contact.title}</h4>
                      <p className="text-gray-700 font-semibold mb-4">{contact.value}</p>
                      {contact.href && (
                        <span className="text-sm font-bold text-blue-600 flex items-center gap-2">
                          Connect <ExternalLink size={14} />
                        </span>
                      )}
                    </motion.div>
                  );

                  return contact.href ? (
                    <a key={i} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-16 text-center text-white">
                <h3 className="text-4xl font-black mb-4">Let's Build Something Amazing</h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  I'm always excited to discuss product strategy, AI innovation, or how we can work together.
                </p>
                <a href="mailto:chirindastecy@gmail.com" className="inline-block px-10 py-3 bg-white text-blue-600 rounded-full font-bold hover:shadow-lg transition-all">
                  Start Conversation
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}