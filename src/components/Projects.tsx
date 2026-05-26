/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, FolderOpen, ExternalLink, Github, X, Play, Heart, RefreshCw, Layers } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Micro-emulator states
  const [emulatorPlantHeight, setEmulatorPlantHeight] = useState(30);
  const [emulatorPlantCount, setEmulatorPlantCount] = useState(0);
  const [emulatorMoodResponse, setEmulatorMoodResponse] = useState('Klik emoji di atas untuk hitung mood!');
  const [emulatorDinoJump, setEmulatorDinoJump] = useState(false);
  const [emulatorDinoScore, setEmulatorDinoScore] = useState(0);
  
  // Abstract Canvas state for others
  const [canvasColor, setCanvasColor] = useState('#EC4899');
  const [canvasStamps, setCanvasStamps] = useState<{ x: number, y: number, char: string }[]>([]);

  // Get distinct categories
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map((p) => p.category));
    return ['Semua', ...Array.from(cats)];
  }, []);

  // Filter projects based on search + category
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'Semua' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    // Reset emulator states on open
    setEmulatorPlantHeight(35);
    setEmulatorPlantCount(1);
    setEmulatorMoodResponse('Pilih kombinasi emoji kamu Hari ini! 👇');
    setEmulatorDinoJump(false);
    setEmulatorDinoScore(0);
    setCanvasStamps([]);
  };

  const jumpDino = () => {
    if (emulatorDinoJump) return;
    setEmulatorDinoJump(true);
    setEmulatorDinoScore(prev => prev + 10);
    setTimeout(() => {
      setEmulatorDinoJump(false);
    }, 400);
  };

  const handleAddStamp = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const emojis = ['✨', '💖', '🍭', '🍄', '⭐', '🦖', '🎨', '🔥'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setCanvasStamps(prev => [...prev, { x, y, char: randomEmoji }]);
  };

  return (
    <section id="projects" className="py-24 px-4 bg-radial from-cyan-50/20 via-white to-orange-50/20 relative overflow-hidden">
      
      {/* Decorative stars / backgrounds */}
      <div className="absolute top-1/3 right-5 text-5xl opacity-10 animate-spin duration-10000 pointer-events-none">⭐</div>
      <div className="absolute bottom-1/3 left-5 text-5xl opacity-10 animate-bounce pointer-events-none">🌀</div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 font-extrabold text-xs tracking-widest uppercase rounded-full border-2 border-cyan-300 mb-2"
          >
            Galeri Seni Kreatif 🚀
          </motion.div>
          <h2 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Koleksi <span className="text-cyan-500">Projek Ceria</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-lg mx-auto mt-3">
            Inilah petualangan digital saya! Cari, saring, dan nikmati emulator demo interaktif di setiap detail proyek!
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col gap-6 mb-12 bg-white border-3 border-slate-900 rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search inputs */}
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Cari nama projek, teknologi, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-800 font-bold text-sm focus:outline-none focus:border-cyan-400 focus:bg-white transition-all shadow-inner placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-slate-200 text-slate-600 hover:text-slate-950 font-black text-[10px] rounded-lg cursor-pointer"
                >
                  X
                </button>
              )}
            </div>

            {/* Filter tags (bubbly chips) */}
            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-2xl font-black text-xs md:text-sm tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-400 text-slate-950 border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] scale-102'
                        : 'bg-slate-50 text-slate-600 border-2 border-slate-100 hover:border-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'Semua' ? '🌟 Semua Karya' : cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Live Active Results Information */}
        <div className="mb-6 flex items-center justify-between px-2">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <FolderOpen className="w-4 h-4 text-cyan-500" /> Menampilkan {filteredProjects.length} Hasil Ceria
          </span>
          {searchQuery && (
            <span className="text-xs font-black text-rose-500 bg-rose-50 px-3 py-1 border border-rose-300 rounded-lg">
              Saringan pencarian aktif 🔎
            </span>
          )}
        </div>

        {/* Projects Grid Container with motion layouts */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white border-3 border-slate-900 rounded-[35px] overflow-hidden shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between cursor-pointer group hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all ${project.color}`}
                  onClick={() => handleOpenProject(project)}
                >
                  {/* Image/Gradient cover */}
                  <div className="relative h-48 overflow-hidden border-b-3 border-slate-100">
                    <div className={`absolute inset-0 bg-linear-to-br ${project.bannerColor} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Big floating Emoji badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white border-2 border-slate-950 flex items-center justify-center text-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] group-hover:rotate-12 transition-transform">
                      {project.emoji || '🚀'}
                    </div>

                    {/* Category Label */}
                    <span className="absolute bottom-4 left-4 font-black text-xs text-slate-900 bg-white border-2 border-slate-950 px-3 py-1 rounded-xl shadow-[1.5px_1.5px_0px_0px_rgba(15,23,42,1)]">
                      📁 {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans font-black text-xl text-slate-900 leading-tight mb-2 flex items-center justify-between">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 font-medium text-xs leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags List */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-black tracking-wide text-slate-700 bg-white/60 border border-slate-300 rounded-lg px-2 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore Action Banner */}
                      <div className="flex items-center justify-between border-t-2 border-dashed border-slate-900/10 pt-3 text-slate-900">
                        <span className="text-xs font-extrabold text-slate-400 group-hover:text-amber-500 transition-colors">Cobain Demo Kreatif!</span>
                        <div className="w-8 h-8 rounded-full bg-slate-950 group-hover:bg-amber-400 flex items-center justify-center border-2 border-slate-950 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                          <Play className="w-3.5 h-3.5 text-white group-hover:text-slate-950 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-white border-3 border-slate-900 rounded-[30px] p-12 text-center max-w-lg mx-auto shadow-[6px_6px_0px_0px_rgba(244,63,94,1)]">
            <span className="text-5xl">😭</span>
            <h3 className="font-sans font-black text-xl text-slate-900 mt-4">Waduh, Projek Tidak Ditemukan!</h3>
            <p className="text-slate-500 font-semibold text-xs mt-2 leading-relaxed">
              Cika belum pernah membuat projek dengan kata kunci tersebut. Coba cari kata kunci lain seperti "React", "Canvas", atau "Figma"!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="mt-6 bg-amber-400 text-slate-900 font-black text-xs px-5 py-2.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] cursor-pointer"
            >
              Ulangi Pencarian 🔄
            </button>
          </div>
        )}
      </div>

      {/* Project Expansion Detail Pop-up Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white border-4 border-slate-950 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] overflow-hidden z-25 max-h-[85vh] flex flex-col md:flex-row"
            >
              
              {/* Left Column (Details & Info) */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[45vh] md:max-h-[85vh]">
                
                {/* Header tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black px-2.5 py-1 bg-rose-100 text-rose-600 rounded-full border border-rose-300">
                    📂 {activeProject.category}
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-1 bg-amber-100 border border-amber-400 text-amber-900 rounded-full">
                    No. {activeProject.id}
                  </span>
                </div>

                {/* Main title */}
                <h3 className="font-sans font-black text-2xl md:text-3xl text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">{activeProject.emoji}</span>
                  {activeProject.title}
                </h3>

                {/* Full description */}
                <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed mb-6 bg-slate-50 p-4 border-2 border-dashed border-slate-200 rounded-2xl">
                  {activeProject.fullDescription}
                </p>

                {/* Tech tags list */}
                <div className="mb-6">
                  <h4 className="font-sans font-black text-xs text-slate-900 mb-2 uppercase tracking-wide">Teknologi Terpakai:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-50 border-2 border-slate-200 hover:border-slate-800 transition-colors font-black text-xs text-slate-800 rounded-xl cursor-default"
                      >
                        ⚡ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Redirection Links */}
                <div className="flex flex-wrap gap-3 mt-6 border-t-2 border-slate-100 pt-6">
                  <a
                    href={activeProject.demoUrl}
                    className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs md:text-sm py-3 px-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-slate-950 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Kunjungi Live Web
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    className="flex-1 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs md:text-sm py-3 px-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 border-2 border-slate-950 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" /> Kode GitHub
                  </a>
                </div>

              </div>

              {/* Right Column (The Magical Interactive Emulator Playground) */}
              <div className="w-full md:w-96 bg-slate-900 border-t-4 md:border-t-0 md:border-l-4 border-slate-950 p-6 flex flex-col justify-between max-h-[40vh] md:max-h-[85vh] text-white">
                
                {/* Simulated frame header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-[#10B981] font-black shrink-0 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    ● DEMO PLAYGROUND
                  </span>
                </div>

                {/* Emulator center play stage */}
                <div className="flex-1 py-6 flex flex-col justify-center items-center relative overflow-hidden">
                  
                  {/* EMULATOR #1: TAMAN VIRTUAL BUBU */}
                  {activeProject.id === 'p1' && (
                    <div className="w-full text-center">
                      <div className="h-32 flex items-end justify-center mb-4 relative">
                        {/* Interactive Growing Plant */}
                        <motion.div
                          animate={{ 
                            scaleY: [1, 1.05, 1],
                            rotate: [-2, 2, -2]
                          }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                          className="origin-bottom flex flex-col items-center"
                          style={{ height: `${emulatorPlantHeight}px` }}
                        >
                          {/* Flower Top */}
                          <div className="text-4xl select-none">{emulatorPlantHeight > 85 ? '🌸' : '🌿'}</div>
                          {/* Plant Stem */}
                          <div className="w-2.5 bg-emerald-500 border border-emerald-600 flex-1 rounded-full relative">
                            {/* Animated leaves */}
                            <span className="absolute left-[-8px] top-1/3 text-xs">🍃</span>
                            {emulatorPlantHeight > 60 && (
                              <span className="absolute right-[-8px] top-2/3 text-xs">🍃</span>
                            )}
                          </div>
                        </motion.div>
                        
                        {/* Mini cloud visual element */}
                        <div className="absolute top-1 right-8 text-xl opacity-60 animate-bounce">☁️</div>
                      </div>

                      <p className="font-mono text-[11px] text-emerald-400 font-bold mb-3">
                        Tinggi Tumbuhan: {emulatorPlantHeight}cm | Siram: {emulatorPlantCount}x
                      </p>

                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => {
                            if (emulatorPlantHeight < 110) {
                              setEmulatorPlantHeight(prev => prev + 8);
                              setEmulatorPlantCount(prev => prev + 1);
                            }
                          }}
                          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2 border border-slate-950 rounded-xl cursor-pointer"
                        >
                          💧 Siram Air
                        </button>
                        <button
                          onClick={() => {
                            setEmulatorPlantHeight(35);
                            setEmulatorPlantCount(0);
                          }}
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-xl cursor-pointer"
                          title="Ulangi"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* EMULATOR #2: KALKULATOR MOOD */}
                  {activeProject.id === 'p2' && (
                    <div className="w-full text-center">
                      <div className="flex justify-center gap-3 mb-4 text-3xl">
                        {[
                          { char: '🍩', msg: 'Harimu penuh manisnya donat! Coba lukis ilustrasi gemas hari ini! 🎨' },
                          { char: '😴', msg: 'Waduh, energi butuh dicharge. Cika sarankan bikin teh sereh madu hangat! ☕' },
                          { char: '🚀', msg: 'Semangat menyala! Ayo tulis kode animasi css gila-gilaan 1 jam saja! 🔥' },
                          { char: '🎯', msg: 'Fokus tinggi. Saatnya menyelesaikan tantangan bug yang tertunda! 🛡️' }
                        ].map((m) => (
                          <button
                            key={m.char}
                            onClick={() => setEmulatorMoodResponse(m.msg)}
                            className="hover:scale-120 transition-transform cursor-pointer p-1 rounded-lg hover:bg-white/10"
                          >
                            {m.char}
                          </button>
                        ))}
                      </div>

                      {/* Screen box wrapper */}
                      <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 min-h-[90px] flex items-center justify-center mb-3">
                        <p className="font-sans font-bold text-xs text-amber-300 leading-relaxed">
                          "{emulatorMoodResponse}"
                        </p>
                      </div>

                      <span className="font-mono text-[10px] text-slate-400">Sentuh salah satu emoji di atas untuk hitung mood!</span>
                    </div>
                  )}

                  {/* EMULATOR #3: PIXEL DINO RUNNER PARTY */}
                  {activeProject.id === 'p4' && (
                    <div className="w-full text-center">
                      <div className="relative h-28 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-4 flex items-end justify-between px-6 pb-2">
                        {/* Moving floor banner */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" />
                        
                        {/* Score Board */}
                        <span className="absolute top-2 right-3 font-mono text-[11px] text-[#10B981]">
                          SKOR: {emulatorDinoScore}
                        </span>

                        {/* Obstacle marshy logs */}
                        <motion.div
                          animate={{ x: [260, -30] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
                          className="text-lg w-5 h-5 absolute bottom-1"
                        >
                          🌵
                        </motion.div>

                        {/* Jumping cute dinosaur representation */}
                        <motion.div
                          animate={emulatorDinoJump ? { y: -50 } : { y: 0 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                          className="text-3xl relative z-10 origin-bottom"
                        >
                          🦖
                        </motion.div>
                        
                        {/* Crowd emojis simulation */}
                        <div className="text-sm absolute left-2 bottom-1 opacity-50">🎉</div>
                      </div>

                      <div className="flex justify-center gap-2">
                        <button
                          onClick={jumpDino}
                          className="bg-indigo-500 hover:bg-indigo-400 text-white font-black text-xs px-5 py-2.5 border border-slate-950 rounded-xl cursor-pointer"
                        >
                          🦘 LOMPAT! (Spasi)
                        </button>
                        <button
                          onClick={() => setEmulatorDinoScore(0)}
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-xl cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* EMULATOR FOR OTHERS (Interactive Canvas stamping box) */}
                  {activeProject.id !== 'p1' && activeProject.id !== 'p2' && activeProject.id !== 'p4' && (
                    <div className="w-full text-center flex flex-col items-center">
                      
                      {/* Stamp area wrapper */}
                      <div
                        onClick={handleAddStamp}
                        className="w-full h-28 bg-slate-950 border-2 border-dashed border-slate-700/60 rounded-2xl relative overflow-hidden cursor-crosshair flex items-center justify-center mb-3"
                      >
                        {canvasStamps.length === 0 ? (
                          <div className="text-center">
                            <span className="text-xl">🖌️</span>
                            <p className="font-mono text-[10px] text-slate-400 mt-1">Ketuk area ini untuk menempelkan sticker!</p>
                          </div>
                        ) : (
                          canvasStamps.map((stamp, sIdx) => (
                            <span
                              key={sIdx}
                              className="absolute text-md pointer-events-none select-none select-none"
                              style={{ left: stamp.x - 8, top: stamp.y - 12 }}
                            >
                              {stamp.char}
                            </span>
                          ))
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-slate-400">Efek Menempel Ceria aktif.</span>
                        {canvasStamps.length > 0 && (
                          <button
                            onClick={() => setCanvasStamps([])}
                            className="font-black text-[10px] text-rose-400 hover:underline cursor-pointer"
                          >
                            Hapus Papan 🗑️
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated frame footer */}
                <div className="border-t border-white/10 pt-3 flex items-center justify-between shrink-0">
                  <span className="font-mono text-[10px] text-slate-500">Karya Buatan Cika Clarissa 👩‍💻</span>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                  >
                    Tutup Explorer <X className="w-3 h-3" />
                  </button>
                </div>

              </div>

              {/* Close corner float button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 md:right-auto md:left-4 w-9 h-9 rounded-full bg-slate-950 hover:bg-rose-500 text-white flex items-center justify-center border-2 border-slate-950 transition-colors cursor-pointer z-30"
              >
                <X className="w-4 h-4" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
