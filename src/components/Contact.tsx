/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, Smile, MessageSquare, Sparkles, Star, Heart, Calendar } from 'lucide-react';
import { UserMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Puji Karya / Kolaborasi 🤝',
    content: '',
    badgeEmoji: '💖'
  });

  const [messages, setMessages] = useState<UserMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Local storage guestbook management
  useEffect(() => {
    const defaultMessages: UserMessage[] = [
      {
        id: '1',
        name: 'Aris Setiawan',
        email: 'aris@mail.com',
        subject: 'Kagum!',
        content: 'Portofolio terlucu yang pernah saya temukan! Pilihan warnanya cerah dan membuat suasana hati saya langsung gembira. Emulator tanaman menyiramnya seru sekali! 🌿',
        emoji: '🌈',
        timestamp: '2026-05-25'
      },
      {
        id: '2',
        name: 'Santi Putri',
        email: 'santi.desain@co.id',
        subject: 'Kolaborasi Ilustrasi',
        content: 'Halo Cika! Saya suka desain maskot buatan Anda. Tertarik sekali untuk mengajak Anda berkolaborasi mendesain sticker pack brand kami minggu depan!',
        emoji: '🎨',
        timestamp: '2026-05-24'
      }
    ];

    const stored = localStorage.getItem('cika_visitor_messages');
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (err) {
        setMessages(defaultMessages);
      }
    } else {
      setMessages(defaultMessages);
      localStorage.setItem('cika_visitor_messages', JSON.stringify(defaultMessages));
    }
  }, []);

  // Determine emotional mascot emoji based on form fields
  const getMascotEmoji = () => {
    if (isSubmitSuccess) return '🎉';
    if (isSubmitting) return '💌';
    if (!formData.name) return '😴';
    if (!formData.email) return '🤔';
    
    // Check email simple validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return '🧐';
    
    if (!formData.content) return '✍️';
    if (formData.content.length > 25) return '😍';
    return '🚀';
  };

  const getMascotCaption = () => {
    if (isSubmitSuccess) return 'Terima kasih banyak! Pesanmu langsung dipajang di papan!';
    if (isSubmitting) return 'Mengirim pesan ceriamu sekarang...';
    if (!formData.name) return 'Siapa namamu? Cika ingin berkenalan!';
    if (!formData.email) return 'Beri tahu surelmu agar Cika bisa membalas nanti.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Hm, penulisan alamat email agak mencurigakan ya...';
    
    if (!formData.content) return 'Silakan ketikkan pesan seru, saran, atau pujian kamu!';
    if (formData.content.length > 25) return 'Yey! Pesanmu padat dan seru sekali!';
    return 'Formulir siap meluncur! Tinggal tekan tombol kirim saja!';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.name.trim()) {
      setValidationError('Nama tidak boleh kosong ya!');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Surel / email mohon diisi untuk korespondensi.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError('Alamat surel tidak sah.');
      return;
    }
    if (!formData.content.trim()) {
      setValidationError('Tulis pesan ceriamu terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const newMessage: UserMessage = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        content: formData.content,
        emoji: formData.badgeEmoji,
        timestamp: new Date().toISOString().split('T')[0]
      };

      const updated = [newMessage, ...messages];
      setMessages(updated);
      localStorage.setItem('cika_visitor_messages', JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSubmitSuccess(true);

      // Reset form states
      setFormData({
        name: '',
        email: '',
        subject: 'Puji Karya / Kolaborasi 🤝',
        content: '',
        badgeEmoji: '💖'
      });

      // Clear success screen after 4 seconds
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 5000);

    }, 1800);
  };

  const handleClearBoard = () => {
    if (window.confirm('Ingin mereset papan coretan dan mengembalikan ke pesan contoh?')) {
      const defaultMessages: UserMessage[] = [
        {
          id: '1',
          name: 'Aris Setiawan',
          email: 'aris@mail.com',
          subject: 'Kagum!',
          content: 'Portofolio terlucu yang pernah saya temukan! Pilihan warnanya cerah dan membuat suasana hati saya langsung gembira. Emulator tanaman menyiramnya seru sekali! 🌿',
          emoji: '🌈',
          timestamp: '2026-05-25'
        }
      ];
      setMessages(defaultMessages);
      localStorage.setItem('cika_visitor_messages', JSON.stringify(defaultMessages));
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-radial from-rose-50/35 via-white to-amber-50/25 border-t-3 border-dashed border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 font-extrabold text-xs tracking-widest uppercase rounded-full border-2 border-emerald-300 mb-2"
          >
            Sapa & Hubungi Cika 💌
          </motion.div>
          <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Koneksi <span className="text-rose-500">Penuh Keceriaan</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-lg mx-auto mt-3">
            Kirimkan coretan saran, pesan cinta, atau tanyakan penawaran kerjasama proyek melintasi formulir interaktif responsif di bawah!
          </p>
        </div>

        {/* Form and Board Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact Form with Reactive Mascot Card (Col 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white border-3 border-slate-900 rounded-[35px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
            <div>
              {/* Mascot Bubble Header */}
              <div className="flex items-center gap-4 bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 mb-6 relative shadow-[3px_3px_0px_0px_rgba(245,158,11,1)]">
                {/* Bouncing Circle Mascot avatar */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-2xl bg-amber-400 border-2 border-slate-950 flex items-center justify-center text-3xl shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none"
                >
                  {getMascotEmoji()}
                </motion.div>

                <div>
                  <h4 className="font-sans font-black text-sm text-slate-900 leading-none mb-1">CikaBot 🤖</h4>
                  <p className="text-slate-700 font-medium text-xs leading-relaxed">
                    {getMascotCaption()}
                  </p>
                </div>

                <div className="absolute right-4 -bottom-3 text-lg">✨</div>
              </div>

              {/* Main HTML Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 pl-1">Nama Kamu:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Budi Hartono"
                      disabled={isSubmitting || isSubmitSuccess}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 pl-1">Email Surel:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="budi@makan.com"
                      disabled={isSubmitting || isSubmitSuccess}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Subject Dropdown & Emoji badge picker */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Dropdown */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 pl-1">Subjek Pertemuan:</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting || isSubmitSuccess}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                    >
                      <option>Puji Karya / Kolaborasi 🤝</option>
                      <option>Tanya Tawaran Kerjasama 💼</option>
                      <option>Saran & Masukan Ceria 💬</option>
                      <option>Mengajak Ngopi Santai ☕</option>
                    </select>
                  </div>

                  {/* Stamp sticker selection */}
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 pl-1">Stiker Papan:</label>
                    <select
                      name="badgeEmoji"
                      value={formData.badgeEmoji}
                      onChange={handleInputChange}
                      disabled={isSubmitting || isSubmitSuccess}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                    >
                      <option value="💖">💖 Cinta</option>
                      <option value="🎨">🎨 Seni</option>
                      <option value="🌈">🌈 Pelangi</option>
                      <option value="👾">👾 Game</option>
                      <option value="☕">☕ Kopi</option>
                      <option value="🍭">🍭 Manis</option>
                    </select>
                  </div>

                </div>

                {/* Message Content */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 pl-1">Pesan Ceria Anda:</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tuliskan ide brilian, pertanyaan, atau kata-kata manis Anda di sini..."
                    disabled={isSubmitting || isSubmitSuccess}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white transition-all placeholder-slate-400 resize-none"
                  />
                </div>

                {/* Validation error visual banner */}
                <AnimatePresence>
                  {validationError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-rose-50 border border-rose-300 rounded-lg text-rose-500 font-black text-xs text-center"
                    >
                      ⚠️ {validationError}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccess}
                  className={`w-full font-black text-sm py-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 border-2 border-slate-950 cursor-pointer ${
                    isSubmitSuccess
                      ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
                      : 'bg-rose-500 hover:bg-rose-400 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <LoaderIcon /> Sedang Dikirim...
                    </>
                  ) : isSubmitSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Sukses Terkirim! Lihat Papannya! 🎉
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Terbang Kirim Pesan! 🚀
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Visitor Wall board / Guestbook (Col 6) */}
          <div className="lg:col-span-6 bg-[#FEF9C3] border-3 border-slate-900 rounded-[35px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative flex flex-col justify-between overflow-hidden">
            {/* Visual Cork or grid pins */}
            <div className="absolute inset-x-0 top-0 h-4 bg-amber-400/20 border-b border-dashed border-slate-900/10 pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6 pb-3 border-b-2 border-slate-950/10">
                <h3 className="font-sans font-black text-lg text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-rose-500" /> Papan Coretan Pengunjung
                </h3>
                <button
                  type="button"
                  onClick={handleClearBoard}
                  className="text-[10px] font-black text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
                >
                  Reset Contoh 🗑️
                </button>
              </div>

              {/* Feed board listings */}
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-transparent">
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                      whileHover={{ scale: 1.01, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
                      className="bg-white border-2 border-slate-950 rounded-2xl p-4 shadow-[3px_3px_0px_0px_rgba(15,23,42,0.95)] relative group"
                    >
                      {/* Sticker stamp */}
                      <span className="absolute top-2.5 right-3 text-lg leading-none filter drop-shadow-[1px_1.5px_0px_rgba(0,0,0,0.8)] select-none">
                        {msg.emoji}
                      </span>

                      {/* Msg Details header */}
                      <div className="flex items-center gap-2.5 mb-2 border-b border-dashed border-slate-100 pb-1.5 pr-8">
                        <span className="font-black text-xs text-slate-900">{msg.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {msg.timestamp}
                        </span>
                      </div>

                      {/* Content text */}
                      <p className="text-slate-700 font-semibold text-xs leading-relaxed break-words">
                        "{msg.content}"
                      </p>

                      {/* Subject tagline */}
                      <div className="text-[9px] font-black tracking-wide text-slate-400 uppercase mt-2 text-right">
                        🎯 {msg.subject}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {messages.length === 0 && (
                  <div className="py-12 text-center text-slate-400">
                    <span className="text-4xl">🌵</span>
                    <p className="text-xs font-bold uppercase tracking-wider mt-3">Belum ada coretan. Jadilah yang pertama!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick footer tips decoration inside corkboard */}
            <div className="mt-4 pt-4 border-t-2 border-dashed border-slate-950/10 flex items-center justify-between text-slate-500">
              <span className="text-[10px] font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" /> Saring, sapa, dan kirim sesukamu!
              </span>
              <span className="text-[10px] font-mono font-black text-slate-400 bg-white/40 px-2 py-0.5 rounded-lg border border-slate-950/5">
                Saved Offline 💾
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Bouncy custom React loading spinner icon
function LoaderIcon() {
  return (
    <div className="flex space-x-1 justify-center items-center">
      <div className="h-2.5 w-2.5 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2.5 w-2.5 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2.5 w-2.5 bg-slate-950 rounded-full animate-bounce"></div>
    </div>
  );
}
