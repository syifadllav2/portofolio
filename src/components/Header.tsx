/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Smile, Star } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Halo!', icon: Smile, color: 'text-amber-500' },
    { id: 'profile', label: 'Tentang Cika', icon: Star, color: 'text-rose-500' },
    { id: 'projects', label: 'Galeri Seru', icon: Sparkles, color: 'text-cyan-500' },
    { id: 'contact', label: 'Sapa Cika', icon: Sparkles, color: 'text-emerald-500' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 pt-4 md:px-6">
      <div
        className={`max-w-6xl mx-auto rounded-3xl transition-all duration-300 border-3 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-amber-400/90 shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] py-3 px-4 md:px-8'
            : 'bg-white/40 backdrop-blur-sm border-white/60 shadow-lg py-4 px-6 md:px-10'
        } flex items-center justify-between`}
      >
        {/* Brand/Logo */}
        <button
          onClick={() => {
            onNavigate('hero');
            setIsMobileMenuOpen(false);
          }}
          className="group flex items-center gap-2 cursor-pointer font-sans font-black text-xl md:text-2xl tracking-tight text-slate-900 focus:outline-none"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900 group-hover:scale-110 transition-transform"
          >
            <span className="text-xl">✨</span>
          </motion.div>
          <span className="relative">
            Cika<span className="text-amber-500">.</span>Craft
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 border-2 ${
                  isActive
                    ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-[2px_2px_0px_0px_rgba(245,158,11,1)]'
                    : 'bg-transparent text-slate-700 border-transparent hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${item.color}`} />
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="desktop-active-dot"
                    className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            );
          })}
          
          {/* Let's say Hello Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="ml-4 bg-rose-500 hover:bg-rose-400 text-white font-black text-sm px-5 py-2.5 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-slate-900 transition-all cursor-pointer"
          >
            Ayo Ngobrol! 💌
          </button>
        </nav>

        {/* Mobile Hamburguer Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-rose-500 hover:bg-rose-400 text-white font-black text-xs px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900 cursor-pointer"
          >
            💌
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl border-2 border-slate-900 bg-amber-300 text-slate-900 focus:outline-none cursor-pointer hover:bg-amber-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-20 bg-white border-3 border-slate-900 shadow-[6px_6px_0px_0px_rgba(245,158,11,1)] rounded-3xl p-6 flex flex-col gap-4 md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100">
              <span className="font-extrabold text-sm text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-amber-500" /> Navigasi Pintar
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full">
                Halo Pengunjung! 👋
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 font-bold text-sm tracking-wide transition-all ${
                      isActive
                        ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-[3px_3px_0px_0px_rgba(245,158,11,1)] scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-1 ${item.color}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-rose-500 hover:bg-rose-400 text-white font-black py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900 transition-all text-center"
            >
              Kirim Pesan Ceria 💌
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
