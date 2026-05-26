/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Coffee, Code, ArrowDown } from 'lucide-react';
import { ME, ACHIEVEMENTS } from '../data';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

const lucideIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Heart,
  Coffee,
  Code,
};

export default function Hero({ onScrollTo }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Frontend Developer Ceria',
    'Desainer Karakter Komputer',
    'Penikmat Kopi & Efek Animasi',
    'UI/UX Explorer Hebat!'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    if (isDeleting) {
      if (roleText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => {
          setRoleText(currentFullText.substring(0, roleText.length - 1));
        }, 50);
      }
    } else {
      if (roleText.length === currentFullText.length) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setRoleText(currentFullText.substring(0, roleText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 flex flex-col justify-center items-center overflow-hidden bg-radial from-amber-50 via-white to-pink-50">
      
      {/* Background Animated Blobs and Stars */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-5000" />
      
      {/* Floating decorative absolute elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-24 left-1/10 hidden lg:flex flex-col items-center bg-white p-3 border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] rotate-[-6deg]"
      >
        <span className="text-2xl">⚡</span>
        <span className="text-xs font-black text-slate-900">100% Energetik</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute bottom-32 right-1/10 hidden lg:flex items-center gap-2 bg-white p-3 border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(6,182,212,1)] rotate-[8deg]"
      >
        <span className="text-xl">☕</span>
        <span className="text-xs font-black text-slate-900">Pecinta Espresso</span>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Grid: Bio & Typing */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border-2 border-amber-400 text-amber-900 font-extrabold text-sm mb-6 shadow-[2px_2px_0px_0px_rgba(245,158,11,1)]"
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 animate-spin" />
            <span>SIAP BERKARYA DENGAN SENYUMAN!</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-4">
            Halo! Saya <span className="relative inline-block text-rose-500">
              {ME.name}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,7 C30,2 70,2 100,7" stroke="#F43F5E" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Typing Role */}
          <div className="h-10 md:h-12 flex justify-center lg:justify-start items-center mb-6">
            <span className="font-mono text-base md:text-xl lg:text-2xl font-bold bg-amber-400 text-slate-900 px-3 py-1 border-2 border-slate-900 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center">
              👉 {roleText}
              <span className="inline-block w-2.5 h-6 ml-1 bg-slate-900 animate-bounce" />
            </span>
          </div>

          <p className="text-slate-700 font-sans font-medium text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            {ME.bio} <br className="hidden md:inline" />
            <span className="text-slate-500 font-normal m-1 block bg-slate-50/50 p-2 border-dashed border-2 border-slate-200 rounded-xl">
              {ME.subBio}
            </span>
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onScrollTo('projects')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-base px-8 py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 border-3 border-slate-900 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              Jelajahi Projek 🚀
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ➔
              </motion.span>
            </button>

            <button
              onClick={() => onScrollTo('contact')}
              className="bg-white hover:bg-slate-50 text-slate-900 font-black text-base px-8 py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 border-3 border-slate-900 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Kirim Pesan Cepat 💌
            </button>
          </div>
        </div>

        {/* Right Grid: Cute Avatar Display with Bubbly Board */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative">
            {/* Spinning decorative frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-[-15px] rounded-[40px] border-4 border-dashed border-rose-400 bg-linear-to-tr from-rose-100/50 via-amber-100/40 to-cyan-100/30"
            />

            {/* Avatar block */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="relative w-72 h-72 md:w-80 md:h-80 bg-linear-to-br from-amber-300 to-rose-300 border-4 border-slate-900 rounded-[35px] shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] overflow-hidden cursor-crosshair group"
            >
              <img
                src={ME.avatar}
                alt="Profil Cika Clarissa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  // Fallback in case image is missing at bootstrap
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/cika/400/400";
                }}
              />
              
              {/* Little interactive banner inside photo */}
              <div className="absolute bottom-3 left-3 bg-white text-slate-900 border-2 border-slate-900 px-3 py-1 rounded-xl text-xs font-black shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Aktif Desain! 🎨
              </div>
            </motion.div>

            {/* Tiny decoration balloons around card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 text-4xl"
            >
              🎈
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 text-4xl"
            >
              🌟
            </motion.div>
          </div>
        </div>
      </div>

      {/* Achievement stats grid at the base */}
      <div className="max-w-5xl mx-auto w-full mt-20 relative z-10 pt-8 border-t-3 border-dashed border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ACHIEVEMENTS.map((stat, idx) => {
            const IconComponent = lucideIcons[stat.iconName] || Code;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative p-5 rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center gap-4 ${stat.color} overflow-hidden`}
              >
                {/* Visual bubble backdraft */}
                <div className="absolute -right-2 -bottom-2 opacity-5 font-black text-5xl font-mono">
                  {stat.count}
                </div>

                <div className="p-3 bg-white border-2 border-slate-950 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xl md:text-2xl text-slate-900 flex items-baseline">
                    <span>{stat.count}</span>
                    {stat.suffix && <span className="text-lg text-rose-500 font-bold ml-0.5">{stat.suffix}</span>}
                  </h4>
                  <p className="font-medium text-xs text-slate-700 tracking-tight leading-none mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bouncing down indicator */}
      <div className="mt-14 flex flex-col items-center">
        <span className="text-xs font-extrabold text-slate-400 tracking-widest uppercase mb-2">Yuk Intip Profil Saya</span>
        <motion.button
          onClick={() => onScrollTo('profile')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-10 h-10 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:bg-amber-300 cursor-pointer"
        >
          <ArrowDown className="w-5 h-5 text-slate-900" />
        </motion.button>
      </div>
    </section>
  );
}
