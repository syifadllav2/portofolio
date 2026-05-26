/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, FunFact, Achievement } from './types';

export const ME = {
  name: 'Cika Clarissa',
  nickname: 'Cika',
  role: 'Kreator Web & Desainer Interaktif',
  bio: 'Seorang developer web penuh energi yang gemar meracik kode menjadi antarmuka yang ceria, interaktif, dan ramah pengguna! Berbasis di Bandung, saya memandang coding sebagai media seni modern dengan bumbu logika.',
  subBio: 'Saya percaya bahwa website tidak harus selalu kaku. Dengan sentuhan warna-warna cerah, micro-interaction yang asyik, dan tata letak yang ramah, kita bisa membuat setiap pengunjung tersenyum bahagia!',
  avatar: '/src/assets/images/creative_avatar_1779785571442.png',
  birthDate: '2002-11-12',
  location: 'Bandung, Indonesia 🇮🇩',
  hobbies: [
    { name: 'Kode Sambil Ngopi', emoji: '☕', color: 'from-amber-400 to-orange-400' },
    { name: 'Koleksi Seni Pixel', emoji: '👾', color: 'from-purple-400 to-pink-400' },
    { name: 'Desain Sticker Lucu', emoji: '🎨', color: 'from-yellow-400 to-amber-500' },
    { name: 'Eksplorasi Efek Animasi', emoji: '✨', color: 'from-cyan-400 to-blue-400' },
    { name: 'Menulis Blog Kreatif', emoji: '✍️', color: 'from-rose-400 to-pink-500' }
  ],
  socials: {
    github: 'https://github.',
    instagram: 'https://instagram.',
    linkedin: 'https://linkedin.',
    dribbble: 'https://dribbble.'
  }
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', count: 18, label: 'Proyek Selesai', iconName: 'Sparkles', color: 'bg-amber-100 text-amber-600 border-amber-300' },
  { id: '2', count: 42, label: 'Pelanggan Senang', iconName: 'Heart', color: 'bg-rose-100 text-rose-600 border-rose-300' },
  { id: '3', count: 250, label: 'Gelas Kopi', iconName: 'Coffee', color: 'bg-orange-100 text-orange-600 border-orange-300', suffix: 'k+' },
  { id: '4', count: 9999, label: 'Lini Kode Ceria', iconName: 'Code', color: 'bg-cyan-100 text-cyan-600 border-cyan-300', suffix: 'k' }
];

export const FUN_FACTS: FunFact[] = [
  { id: '1', fact: 'Saya tidak bisa ngoding kalau tumpukan tab browser kurang dari 20. Itu sumber kekuatan rahasia saya!', emoji: '🌐' },
  { id: '2', fact: 'Pernah menghabiskan waktu 3 jam hanya untuk memilih kurva bezier transisi tombol yang paling "pleasing". Worth it!', emoji: '⏳' },
  { id: '3', fact: 'Warna favorit saya adalah "Semua Warna yang Terang". Palet gelap hanya untuk IDE, hidup harus penuh warna!', emoji: '🌈' },
  { id: '4', fact: 'Mascot kucing oranye sayur di rumah bertindak sebagai reviewer kode utama saya. Meow = Sip!', emoji: '🐱' },
  { id: '5', fact: 'Menulis kode sambil mendengarkan musik lofi bertema game klasik berkecepatan 2x lipat agar mengetik lebih bersemangat.', emoji: '🎧' }
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    level: 5,
    iconName: 'Code2',
    color: 'sky',
    description: 'Membangun antarmuka dinamis dan responsif dengan state management yang lincah dan modular.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 5,
    iconName: 'Palette',
    color: 'cyan',
    description: 'Merancang lembar gaya kilat dengan ratusan warna neon dan transisi micro yang mulus.'
  },
  {
    name: 'Framer Motion',
    category: 'frontend',
    level: 5,
    iconName: 'Activity',
    color: 'rose',
    description: 'Menambahkan nyawa ke elemen web lewat transisi pegas (spring) dan animasi geser-putar.'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 4,
    iconName: 'ShieldAlert',
    color: 'indigo',
    description: 'Menjaga kode tetap rapi dan terhindar dari bug misterius menggunakan sistem tipe yang kuat.'
  },
  // Backend
  {
    name: 'Node.js Express',
    category: 'backend',
    level: 4,
    iconName: 'Cpu',
    color: 'emerald',
    description: 'Membuat server backend yang efisien untuk melayani API-endpoint portofolio interaktif.'
  },
  // Design
  {
    name: 'Figma',
    category: 'design',
    level: 5,
    iconName: 'Compass',
    color: 'pink',
    description: 'Tempat ajaib untuk menggambar mockup layout, ilustrasi vektor, dan merancang wireframe ceria.'
  },
  {
    name: 'Karakter & Vektor',
    category: 'design',
    level: 4,
    iconName: 'Paintbrush',
    color: 'amber',
    description: 'Membuat maskot gemas, ilustrasi datar berwarna pastel, dan aset aset estetik visual.'
  },
  // Tools
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 4,
    iconName: 'Github',
    color: 'violet',
    description: 'Mengarsipkan coretan karya dan berkolaborasi secara luas dengan komunitas developer global.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Taman Virtual Bubu',
    description: 'Dunia simulasi menanam tanaman ajaib yang tumbuh seiring ketukan musik lofi. Sangat santai!',
    fullDescription: 'Taman Virtual Bubu adalah eksperimen interaktif yang menggabungkan manipulasi DOM kreatif, web audio API, dan animasi canvas. Pengguna dapat memilih bibit tanaman fantasi seperti "Monster Kribo" atau "Lavender Joget", memutar pilihan trek lagu lofi chill, dan menyiram tanaman secara virtual. Semakin sering disiram dan mendengarkan musik, tanaman akan menari dengan ritme visual yang sinkron!',
    image: 'https://picsum.photos/seed/bubu/800/600',
    category: 'Web Dev',
    tags: ['React', 'Framer Motion', 'Web Audio', 'Canvas'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    color: 'bg-emerald-50 border-emerald-400 hover:bg-emerald-100 text-emerald-900',
    bannerColor: 'from-emerald-400 to-teal-400',
    emoji: '🌱'
  },
  {
    id: 'p2',
    title: 'Kalkulator Mood Harian',
    description: 'Beri tahu perasaanmu lewat jajaran emoji lucu, dan dapatkan resep aktivitas harian & palet warna!',
    fullDescription: 'Sebuah aplikasi wellness micro yang didesain menyenangkan. Cukup klik gabungan 3 emoji yang menggambarkan emosimu hari ini (misal: ☕, 📝, 😴), dan algoritme ramah kalkulator kami akan memproses "Indeks Kebahagiaan". Aplikasi kemudian merekomendasikan resep camilan manis, kutipan motivasi konyol, serta lagu dinamis untuk merubah harimu menjadi lebih cerah!',
    image: 'https://picsum.photos/seed/mood/800/600',
    category: 'Interactive',
    tags: ['React.js', 'Tailwind', 'LocalState', 'Web Speech'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    color: 'bg-amber-50 border-amber-400 hover:bg-amber-100 text-amber-900',
    bannerColor: 'from-amber-400 to-orange-400',
    emoji: '🥳'
  },
  {
    id: 'p3',
    title: 'Kromatis - Komunitas Palet',
    description: 'Platform berbagi skema warna cerah yang dikelompokkan berdasarkan emosi & suasana hati.',
    fullDescription: 'Kromatis adalah ruang kreasi bagi desainer dsn desainer UI/UX amatir untuk membagikan kontras palet warna yang memancarkan optimisme dan keceriaan. Dilengkapi dengan sekali klik untuk menyalin kode HEX, melihat mockup mini antarmuka, serta fitur unduh aset palet dalam format CSS, Tailwind, dan SVG.',
    image: 'https://picsum.photos/seed/chroma/800/600',
    category: 'Desain UI/UX',
    tags: ['Figma Design', 'Tailwind CSS', 'React', 'Export SVG'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'bg-pink-50 border-pink-400 hover:bg-pink-100 text-pink-900',
    bannerColor: 'from-pink-400 to-rose-400',
    emoji: '🌈'
  },
  {
    id: 'p4',
    title: 'Pixel Dino Runner Party',
    description: 'Game mini dinosaurus legendaris versi pesta kostum retro dengan rintangan kembang api.',
    fullDescription: 'Membangkitkan nostalgia dengan sentuhan ceria! Game arcade browser ini ditulis menggunakan canvas murni dengan sistem kontrol tombol bilah spasi yang responsif. Menampilkan rintangan kaktus menari, badai marshmallow, dan power-up kacamata hitam yang mengubah dinosaurus menjadi kebal sambil memutar musik retro 8-bit!',
    image: 'https://picsum.photos/seed/dino/800/600',
    category: 'Interactive',
    tags: ['HTML5 Canvas', 'Game Dev', 'SoundFX', 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'bg-indigo-50 border-indigo-400 hover:bg-indigo-100 text-indigo-900',
    bannerColor: 'from-indigo-400 to-purple-400',
    emoji: '👾'
  },
  {
    id: 'p5',
    title: 'SuhuCeria - Konverter Cuaca Animasi',
    description: 'Konverter suhu interaktif yang memunculkan animasi badai confetti atau es krim meleleh!',
    fullDescription: 'Aplikasi edukasi cuaca sederhana yang dirancang agar sangat adiktif dikunjungi. Saat Anda menggeser input suhu dari dingin ke sangat panas, latar belakang website berganti secara dinamis dari biru salju yang bergetar menjadi jingga menyala dengan gelembung udara, dihiasi animasi es krim meleleh yang lucu.',
    image: 'https://picsum.photos/seed/weather/800/600',
    category: 'Web Dev',
    tags: ['React Hooks', 'Tailwind CSS', 'Confetti Engine'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'bg-cyan-50 border-cyan-400 hover:bg-cyan-100 text-cyan-900',
    bannerColor: 'from-cyan-400 to-blue-400',
    emoji: '🌞'
  },
  {
    id: 'p6',
    title: 'Brand Mascot Sticker Pack',
    description: 'Kumpulan ilustrasi stiker pet dan makanan penutup super imut untuk ekosistem developer.',
    fullDescription: 'Seri desain grafis kreatif yang didevelop dalam bentuk vektor mandiri siap pakai. Berbagai karakter seperti "Capy-Coder" (Kapibara yang sedang ngoding di bawah air) dan "Boba-React" (Gelas Boba berlogo atom React) dirilis untuk umum dengan lisensi gratis untuk menyebarkan keceriaan di README developer seluruh dunia.',
    image: 'https://picsum.photos/seed/stickers/800/600',
    category: 'Desain UI/UX',
    tags: ['Ilustrator', 'SVG Vector', 'Brand Identity', 'Sticker Pack'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'bg-amber-50 border-yellow-400 hover:bg-yellow-100 text-amber-900',
    bannerColor: 'from-yellow-400 to-amber-400',
    emoji: '🎨'
  }
];
