/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, Heart, ArrowUp, Coffee } from 'lucide-react';
import { ME } from '../data';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 px-4 relative overflow-hidden border-t-4 border-slate-950">
      
      {/* Visual background decals */}
      <div className="absolute top-1/2 left-5 text-7xl opacity-5 select-none pointer-events-none">☕</div>
      <div className="absolute top-10 right-10 text-7xl opacity-5 select-none pointer-events-none">✨</div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/10">
          
          {/* Logo Brand Footer */}
          <div className="text-center md:text-left">
            <h3 className="font-sans font-black text-2xl tracking-tight leading-none mb-2">
              Cika<span className="text-amber-400">.</span>Craft
            </h3>
            <p className="text-slate-400 font-semibold text-xs leading-relaxed max-w-sm">
              Membangun website ceria berwarna penuh kebahagiaan & interaksi positif sejak 2021.
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: ME.socials.github, color: 'hover:bg-[#181717] hover:text-white', label: 'GitHub' },
              { icon: Instagram, href: ME.socials.instagram, color: 'hover:bg-linear-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:text-white', label: 'Instagram' },
              { icon: Linkedin, href: ME.socials.linkedin, color: 'hover:bg-[#0A66C2] hover:text-white', label: 'LinkedIn' },
            ].map((soc, index) => {
              const IconComponent = soc.icon;
              return (
                <motion.a
                  key={index}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className={`w-12 h-12 bg-slate-800 border-2 border-slate-700 hover:border-white rounded-2xl flex items-center justify-center transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)] ${soc.color}`}
                  title={soc.label}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

        </div>

        {/* Informational credit & legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-center md:text-left">
          
          <div>
            <p className="text-xs font-semibold text-slate-400 flex items-center justify-center md:justify-start gap-1">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> & <Coffee className="w-3.5 h-3.5 text-amber-400" /> kopi Bandung hangat.
            </p>
            <p className="text-[10px] font-bold text-slate-500 mt-1">
              Merupakan hak cipta &copy; {currentYear} Cika Clarissa. Diulas dan meong-disetujui kucing oranye 🐱.
            </p>
          </div>

          {/* Floater Back to Top button */}
          <motion.button
            onClick={onScrollToTop}
            whileHover={{ y: -4 }}
            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,0.15)] border-2 border-slate-950 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Kembali ke Atas</span> <ArrowUp className="w-4 h-4" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}
