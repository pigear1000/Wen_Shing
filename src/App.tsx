/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Zap, 
  Pill, 
  ShieldCheck, 
  Brain, 
  Eye, 
  Scale, 
  Sparkles, 
  Leaf, 
  MapPin, 
  Phone, 
  Clock, 
  CalendarCheck,
  Facebook
} from 'lucide-react';

const services = [
  { id: 1, icon: <Zap className="w-8 h-8" />, title: "酸麻痺痛", desc: "肩頸痠痛、坐骨神經痛、運動傷害、退化性關節炎等疼痛管理。" },
  { id: 2, icon: <Pill className="w-8 h-8" />, title: "內科雜症", desc: "腸胃不適、睡眠障礙、心悸胸悶、慢性疲勞等內科體質調理。" },
  { id: 3, icon: <ShieldCheck className="w-8 h-8" />, title: "過敏免疫", desc: "過敏性鼻炎、異位性皮膚炎、氣喘、免疫力低下等體質改善。" },
  { id: 4, icon: <Brain className="w-8 h-8" />, title: "自律神經", desc: "焦慮、憂鬱、恐慌、失眠、心律不整等自律神經失調問題。" },
  { id: 5, icon: <Eye className="w-8 h-8" />, title: "眼耳鼻病", desc: "乾眼症、飛蚊症、耳鳴、眩暈、慢性鼻竇炎等五官科疾患。" },
  { id: 6, icon: <Scale className="w-8 h-8" />, title: "減重體態", desc: "健康減重、產後瘦身、局部雕塑、新陳代謝體質調理。" },
  { id: 7, icon: <Sparkles className="w-8 h-8" />, title: "微針美容", desc: "顏面拉提、淡化細紋、氣色調理、抗老回春等中醫醫美療程。" },
  { id: 8, icon: <Leaf className="w-8 h-8" />, title: "生殖調理", desc: "男女不孕、月經不順、經痛、更年期障礙、產前產後調理。" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans bg-clinic-light text-gray-800 antialiased selection:bg-clinic-orange selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-clinic-blue/95 backdrop-blur-md shadow-lg py-3' : 'bg-clinic-blue py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white font-serif text-sm">
                溫心
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-widest">溫心中醫診所</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-clinic-orange transition-colors font-medium">關於我們</button>
              <button onClick={() => scrollToSection('services')} className="text-white/90 hover:text-clinic-orange transition-colors font-medium">主治專長</button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-5 py-2 rounded-full bg-clinic-orange text-white font-medium hover:bg-orange-600 transition-colors shadow-md"
              >
                預約看診
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-clinic-orange focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-clinic-blue border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  關於我們
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-3 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  主治專長
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center px-3 py-3 bg-clinic-orange text-white rounded-lg font-bold"
                >
                  預約看診
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 flex flex-col min-h-[90vh] md:min-h-screen overflow-hidden">
        {/* Top Orange Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-clinic-orange flex-1 relative flex flex-col justify-end items-center pb-8 md:pb-16 z-10"
        >
          {/* Vertical Text */}
          <div className="absolute top-10 left-4 md:top-16 md:left-12 flex gap-4 text-clinic-blue/80 font-serif font-semibold text-lg md:text-xl">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="vertical-text"
            >
              現代針灸
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="vertical-text text-sm md:text-base mt-4"
            >
              溫式
            </motion.div>
          </div>

          {/* Logo Circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 15, delay: 0.3 }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[1.5px] border-white/80 flex flex-col items-center justify-center translate-y-1/2 bg-clinic-orange/20 backdrop-blur-sm z-20 shadow-2xl"
          >
            <span className="font-serif text-3xl md:text-5xl text-white tracking-widest mb-2">溫心</span>
            <span className="font-serif text-3xl md:text-5xl text-white tracking-widest">中醫</span>
          </motion.div>
        </motion.div>

        {/* Wave Divider */}
        <div className="w-full relative z-0 -mt-1 block">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-24 md:h-40 block">
            <path fill="#1c355e" d="M0,90 C400,200 800,0 1440,100 L1440,180 L0,180 Z"></path>
          </svg>
        </div>

        {/* Bottom Navy Section */}
        <div className="bg-clinic-blue flex-1 flex flex-col items-center pt-24 md:pt-32 pb-16 px-4 z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white tracking-[0.2em] mb-3 text-center drop-shadow-md"
          >
            溫心中醫診所
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/70 text-sm md:text-base tracking-[0.1em] mb-12 text-center uppercase"
          >
            Wen Hsin Chinese Medicine Clinic
          </motion.p>
          
          {/* Quick Services Preview */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12 max-w-4xl font-serif text-clinic-orange text-lg md:text-xl font-medium tracking-widest"
          >
            {["酸麻痺痛", "內科雜症", "過敏免疫", "自律神經", "眼耳鼻病", "減重體態", "微針美容", "生殖調理"].map((item, idx) => (
              <span key={idx} className="hover:text-white transition-colors cursor-default">{item}</span>
            ))}
          </motion.div>
        </div>
      </header>

      {/* About Intro Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-clinic-blue font-serif text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            <span className="w-12 h-0.5 bg-clinic-orange hidden sm:block"></span>
            現代針灸．溫式傳承
            <span className="w-12 h-0.5 bg-clinic-orange hidden sm:block"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 leading-relaxed text-lg md:text-xl text-justify md:text-center mt-10"
          >
            溫心中醫診所秉持著「溫暖醫心、仁術濟世」的理念，結合傳統中醫智慧與現代針灸技術，為您提供最專業、最全面的醫療照護。我們不僅關注疾病的治療，更重視身心靈的平衡與預防保健。
          </motion.p>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 md:py-28 bg-clinic-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-clinic-blue font-serif text-3xl md:text-4xl font-bold mb-4">專業主治項目</h2>
            <p className="text-gray-500 font-sans tracking-wide">全方位的健康照護，解決您的各種疑難雜症</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.id * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center border-b-4 border-transparent hover:border-clinic-orange shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-50 flex items-center justify-center text-clinic-orange mb-4">
                  {service.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-clinic-blue mb-2 tracking-wider">{service.title}</h3>
                <p className="text-gray-500 text-sm hidden md:block">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-clinic-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill="currentColor" cx="2" cy="2" r="2"></circle>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20 items-center justify-between gap-10">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-serif text-3xl font-bold tracking-widest text-clinic-orange">預約您的專屬診療</h2>
              <p className="text-white/80 leading-relaxed font-sans">我們提供舒適的診療環境與專業的醫療團隊，為您量身打造最適合的治療方案。歡迎來電預約或親臨掛號。</p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-clinic-orange flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">診所地址</h4>
                    <p className="text-white/80 text-sm">此為範例地址區, 請填入實際位置</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-clinic-orange flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">聯絡電話</h4>
                    <p className="text-white/80 text-sm">02-XXXX-XXXX (範例)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-clinic-orange flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">看診時間</h4>
                    <p className="text-white/80 text-sm">週一至週六 09:00-12:00, 14:00-21:00<br />週日休診</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-2xl text-clinic-blue text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-clinic-orange mb-4">
                  <CalendarCheck size={40} />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2">線上預約系統</h3>
                <p className="text-gray-500 mb-6 text-sm">節省您的寶貴候診時間</p>
                <button 
                  onClick={() => alert('線上預約系統建置中，請先透過電話預約，謝謝！')} 
                  className="w-full py-3 px-6 bg-clinic-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                >
                  立即預約
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12233f] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/50 font-serif text-xs">
              溫心
            </div>
            <span className="text-white/50 text-sm font-sans">© 2026 溫心中醫診所 Wen Hsin Chinese Medicine Clinic. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-clinic-orange hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-green-500 hover:text-white transition-all">
              <div className="font-bold text-xs">LINE</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
