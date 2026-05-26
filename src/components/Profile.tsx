/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smile, Award, Heart, Check, HelpCircle, Star, Sparkles, 
  Code2, Palette, Activity, ShieldAlert, Cpu, Compass, Paintbrush, Github, Info
} from 'lucide-react';
import { ME, SKILLS, FUN_FACTS } from '../data';

interface ProfileProps {
  onScrollToContact: () => void;
}

const lucideIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Palette,
  Activity,
  ShieldAlert,
  Cpu,
  Compass,
  Paintbrush,
  Github
};

const colorClasses: Record<string, { bg: string, border: string, text: string, accent: string }> = {
  sky: { bg: 'bg-sky-50', border: 'border-sky-300', text: 'text-sky-900', accent: 'bg-sky-400' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-300', text: 'text-cyan-900', accent: 'bg-cyan-400' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-900', accent: 'bg-rose-400' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-300', text: 'text-indigo-900', accent: 'bg-indigo-400' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-900', accent: 'bg-emerald-400' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-900', accent: 'bg-pink-400' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-900', accent: 'bg-amber-400' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-300', text: 'text-violet-900', accent: 'bg-violet-400' },
};

export default function Profile({ onScrollToContact }: ProfileProps) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isFactAnimating, setIsFactAnimating] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getNewFact = () => {
    if (isFactAnimating) return;
    setIsFactAnimating(true);
    setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * FUN_FACTS.length);
      while (nextIndex === currentFactIndex && FUN_FACTS.length > 1) {
        nextIndex = Math.floor(Math.random() * FUN_FACTS.length);
      }
      setCurrentFactIndex(nextIndex);
      setIsFactAnimating(false);
    }, 450);
  };

  const milestones = [
    { year: '2021', title: 'Belajar Coding Pertama', desc: 'Nyasar di HTML/CSS dan langsung jatuh cinta sama warna merah muda.', icon: '💡' },
    { year: '2022', title: 'Juara Mini-Hackathon Kampus', desc: 'Membuat peta cuaca interaktif bergaya game kasual.', icon: '🏆' },
    { year: '2023', title: 'Magang sebagai UI/UX di Startup', desc: 'Mendesain maskot brand dan merapikan komponen tombol.', icon: '💼' },
    { year: '2024', title: 'Lulus & Sukses Jadi Freelancer', desc: 'Bekerja keliling kafe membagikan kodingan ceria.', icon: '🎓' }
  ];

  return (
    <section id="profile" className="py-24 px-4 bg-linear-to-b from-pink-50/40 via-white to-amber-50/40 border-y-3 border-dashed border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-rose-100 text-rose-600 font-extrabold text-xs tracking-widest uppercase rounded-full border-2 border-rose-300 mb-2"
          >
            Kenali Lebih Dekat 🎈
          </motion.div>
          <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Cerita Kreatif & <span className="text-rose-500">Dunia Cika</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-lg mx-auto mt-3">
            Di balik tumpukan baris baris kode manis, inilah sekilas mengenai kepribadian, filosofi kerja, dan keahlian saya!
          </p>
          <div className="absolute right-12 top-0 hidden lg:block text-5xl animate-bounce">🎨</div>
        </div>

        {/* Bento Grid Layout (12 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento #1: Biografi Ceria (Col 7) */}
          <div className="md:col-span-7 flex flex-col justify-between bg-white border-3 border-slate-900 rounded-[32px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
            {/* Corner Decorative elements */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-200 rounded-full opacity-40 pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-500 flex items-center justify-center">
                  <Smile className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xl text-slate-900 leading-none">Cika Clarissa</h3>
                  <span className="text-xs font-bold text-slate-400">Pecinta Animasi Web</span>
                </div>
              </div>

              <h4 className="font-sans font-black text-lg md:text-xl text-slate-900 mt-2 mb-3">
                "Mengubah ide serius menjadi pengalaman visual yang menyenangkan."
              </h4>

              <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6">
                Saya menggemari frontend development karena memungkinkan saya menyatukan logika komputasi dengan ekspresi seni visual yang dinamis. Setiap transisi tombol atau putaran animasi adalah upaya untuk menghadirkan koneksi emosional yang tulus bagi siapa pun yang menggunakan web tersebut.
              </p>

              {/* Quick Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-50/50 p-4 border-2 border-dashed border-slate-200 rounded-2xl">
                {[
                  'Desain responsif tanpa cela',
                  'Komitmen transisi mulus 60fps',
                  'Fokus pada aksesibilitas warna',
                  'Sentuhan detail komedi visual',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-black text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-extrabold text-slate-400">Domisili:</span>
              <span className="text-xs font-black px-3 py-1 bg-amber-100 border border-amber-400 text-amber-900 rounded-lg">Bandung, Jawa Barat, ID 🏔️</span>
            </div>
          </div>

          {/* Bento #2: Fun Fact Generator (Col 5) */}
          <div className="md:col-span-5 flex flex-col justify-between bg-amber-300 border-3 border-slate-900 rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden group">
            <div className="absolute right-4 top-4 text-4xl opacity-20 group-hover:rotate-12 transition-transform">💡</div>
            
            <div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/60 border border-slate-950 font-black text-xs text-slate-900 rounded-full w-fit mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
                <span>FUN FACT SAYA</span>
              </div>

              <h3 className="font-sans font-black text-xl text-slate-900 mb-4">
                Tahukah Kamu? 🤔
              </h3>

              {/* Speech bubble card with exit/entrance */}
              <div className="min-h-[140px] bg-white border-2 border-slate-950 rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative flex flex-col justify-between mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFactIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl mb-1">{FUN_FACTS[currentFactIndex].emoji}</div>
                    <p className="text-slate-800 font-bold text-sm leading-relaxed">
                      "{FUN_FACTS[currentFactIndex].fact}"
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Speech Arrow */}
                <div className="absolute left-6 -bottom-3 w-5 h-3 bg-white border-b-2 border-r-2 border-slate-950 rotate-45" />
              </div>
            </div>

            <button
              onClick={getNewFact}
              disabled={isFactAnimating}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-sm py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <span>Ubah Cerita Lucu! 🔮</span>
            </button>
          </div>

          {/* Bento #3: Main Hobbies Array (Col 4) */}
          <div className="md:col-span-4 flex flex-col bg-white border-3 border-slate-900 rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <h3 className="font-sans font-black text-lg text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-xl">❤️</span> Kesenangan & Hobi
            </h3>
            
            <p className="text-slate-500 font-medium text-xs leading-relaxed mb-4">
              Aktivitas yang membakar semangat kreativitas saya selain menulis baris program:
            </p>

            <div className="flex flex-col gap-2.5">
              {ME.hobbies.map((hobby, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-slate-900 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${hobby.color} flex items-center justify-center text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-slate-950 group-hover:rotate-12 transition-transform`}>
                    {hobby.emoji}
                  </div>
                  <span className="font-black text-xs text-slate-800">{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bento #4: The Dynamic Skills Hub (Col 8) */}
          <div className="md:col-span-8 flex flex-col bg-white border-3 border-slate-900 rounded-[32px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative justify-between">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="font-sans font-black text-lg md:text-xl text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" /> Keahlian & Teknologi
                  </h3>
                  <p className="text-slate-400 font-semibold text-xs mt-0.5">
                    Klik teknologi di bawah untuk melihat bagaimana saya menggunakannya! 💡
                  </p>
                </div>
                
                <span className="px-3 py-1 bg-cyan-100 border border-cyan-400 text-cyan-800 rounded-full font-black text-xs animate-none">
                  ⚡ Berdaya Animasi Tinggi
                </span>
              </div>

              {/* Interactive Skills Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SKILLS.map((skill) => {
                  const Icon = lucideIcons[skill.iconName] || Code2;
                  const active = selectedSkill === skill.name;
                  const cols = colorClasses[skill.color] || colorClasses.sky;

                  return (
                    <motion.button
                      key={skill.name}
                      onClick={() => setSelectedSkill(active ? null : skill.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative p-3 rounded-2xl border-2 cursor-pointer flex flex-col transition-all text-left ${
                        active
                          ? `${cols.bg} ${cols.border} shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -translate-x-0.5 -translate-y-0.5`
                          : 'bg-white border-slate-200 hover:border-slate-800 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-lg border border-slate-950 ${cols.bg}`}>
                          <Icon className="w-4 h-4 text-slate-900" />
                        </div>
                        {/* Custom Heart Rating meters */}
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-2.5 h-2.5 ${
                                i < skill.level ? 'text-amber-500 fill-amber-500' : 'text-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="font-sans font-black text-xs text-slate-900">{skill.name}</h4>
                      <span className="text-[10px] font-bold text-slate-400 capitalize mt-0.5">Level {skill.level}/5</span>

                      {/* Display active state marker on mobile */}
                      {active && (
                        <div className={`absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full ${cols.accent}`} />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Dynamic explanations card when clicked */}
              <div className="mt-6 min-h-[90px] relative">
                <AnimatePresence mode="wait">
                  {selectedSkill ? (
                    <motion.div
                      key={selectedSkill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-slate-50 border-2 border-slate-900 rounded-2xl flex gap-3 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
                    >
                      <div className="p-2 shrink-0 h-fit bg-amber-400 border border-slate-950 rounded-xl">
                        <Info className="w-4 h-4 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-sm text-slate-900 mb-1">
                          Bagaimana Cika Menggunakan {selectedSkill}?
                        </h4>
                        <p className="text-slate-700 font-medium text-xs leading-relaxed">
                          {SKILLS.find((s) => s.name === selectedSkill)?.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default-tip"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-5 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-center"
                    >
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        ✨ Sentuh kartu teknologi di atas untuk melihat pandangan Cika ✨
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t-2 border-slate-100">
              <span className="text-xs font-extrabold text-slate-400">Punya projek menarik?</span>
              <button
                onClick={onScrollToContact}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs px-4 py-2 rounded-xl border-2 border-slate-900 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(244,63,94,1)]"
              >
                Ajak Diskusi Sekarang ➔
              </button>
            </div>
          </div>
        </div>

        {/* Milestone Timeline (Horizontal/Vertical) */}
        <div className="mt-16 bg-white border-3 border-slate-900 rounded-[35px] p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative">
          <div className="absolute left-6 -top-5 bg-rose-500 text-white font-black text-xs px-4 py-1.5 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            <span>PERJALANAN WAKTU CIKA</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 relative">
            {/* Horizontal connection line for larger screens */}
            <div className="absolute top-[35px] left-12 right-12 h-1 bg-slate-900/10 hidden lg:block" />

            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                whileHover={{ y: -4 }}
                className="flex flex-col relative z-10"
              >
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  {/* Timeline Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 border-2 border-slate-900 flex items-center justify-center text-xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                    {milestone.icon}
                  </div>
                  <div>
                    <span className="font-mono font-black text-sm text-rose-500 lg:mt-3 lg:block">{milestone.year}</span>
                    <h4 className="font-sans font-black text-md text-slate-900 leading-tight lg:mt-1">{milestone.title}</h4>
                  </div>
                </div>

                <p className="text-slate-500 font-semibold text-xs mt-2 pl-15 lg:pl-0">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
