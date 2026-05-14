import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

// Iconos SVG Reales para Redes Sociales
const SocialIcon = ({ type }: { type: string }) => {
  const icons: any = {
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
    facebook: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>,
    twitter: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>, // X Logo
    youtube: <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>,
    tiktok: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>,
    linkedin: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  };
  return <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{icons[type]}</svg>;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200/50 overflow-x-hidden">
      
      {/* --- LUXURY HEADER (Glassmorphism) --- */}
      <header className="fixed w-full top-0 z-50 glass-nav transition-all duration-500">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide group">
            Rest <span className="text-amber-600 italic group-hover:text-amber-700 transition-colors">Art</span> Café
          </Link>
          
          <nav className="hidden lg:flex space-x-10 text-xs font-bold uppercase tracking-[0.15em] text-stone-500">
            {['Inicio', 'Experiencia', 'Menú', 'Carta', 'Reservas', 'Galería'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-600/30 flex items-center gap-2">
            <SocialIcon type="twitter" /> {/* Usando X icon como placeholder si no hay WA específico, o cambiar path */}
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* --- CINEMATIC HERO --- */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-fachada.webp" alt="Rest Art Café Luxury" fill className="object-cover brightness-[0.4] animate-slow-zoom" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
          <span className="inline-block py-1 px-4 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md bg-white/5 animate-fade-in-up">
            Experiencia Gastronómica en Vallecas
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl animate-fade-in-up delay-100">
            Donde la tradición <br/> se encuentra con la <span className="text-amber-500 italic font-light">innovación</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Descubre una atmósfera única donde la cocina de autor se fusiona con la calidez mediterránea en nuestra terraza jardín.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
            <Link href="#reservas" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-600/40 transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 hover:border-white transform hover:-translate-y-1">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE CARDS (Floating) --- */}
      <section id="experiencia" className="py-24 bg-[#fdfbf7] relative -mt-24 z-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ubicación", icon: "📍", text: "C. de Sierra Toledana, 4\n28038 Madrid", link: "#ubicacion" },
            { title: "Horario", icon: "🕒", text: "L-D: 13:00 - 00:00\nV-S: Hasta las 01:00", link: null },
            { title: "Servicios", icon: "✨", text: "Terraza Jardín · PMR\nCocina de Autor", link: null }
          ].map((card, idx) => (
            <div key={idx} className="glass-card p-10 rounded-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-4">{card.title}</h3>
              <p className="text-stone-600 whitespace-pre-line leading-relaxed mb-6 font-light">{card.text}</p>
              {card.link && <Link href={card.link} className="text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-amber-800 inline-flex items-center gap-2">Explorar <span className="text-lg">→</span></Link>}
            </div>
          ))}
        </div>
      </section>

      {/* --- MENÚ DEL DÍA (Signature) --- */}
      <section id="menú" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-serif italic text-xl">Lunes a Viernes</span>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
             {/* Primeros */}
             <div className="space-y-8">
                <h3 className="font-serif text-2xl font-bold text-stone-800 border-b border-stone-200 pb-4">Primeros Platos</h3>
                {["Alubias blancas con matanza asturiana", "Tallarines con langostinos", "Calabacín relleno gratinado", "Ensalada mixta gourmet"].map((item, i) => (
                  <div key={i} className="group flex justify-between items-baseline">
                    <span className="text-stone-600 group-hover:text-amber-700 transition-colors font-light">{item}</span>
                    <span className="w-full border-b border-dotted border-stone-300 mx-4"></span>
                  </div>
                ))}
             </div>
             
             {/* Precio Central Destacado */}
             <div className="bg-stone-900 text-white p-12 rounded-sm shadow-2xl text-center transform md:-translate-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-amber-600"></div>
                <h3 className="font-serif text-3xl mb-2">Menú Completo</h3>
                <div className="text-6xl font-serif font-bold text-amber-500 my-6">12,50€</div>
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">Incluye Pan, Postre y Café</p>
                <Link href="#reservas" className="inline-block border border-white/30 px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all">Reservar Ahora</Link>
             </div>

             {/* Segundos */}
             <div className="space-y-8">
                <h3 className="font-serif text-2xl font-bold text-stone-800 border-b border-stone-200 pb-4">Segundos Platos</h3>
                {["Entraña de ternera a la plancha", "Pechuga de pollo crispy", "Lomo de salmón salvaje", "Opción Vegetariana del día"].map((item, i) => (
                  <div key={i} className="group flex justify-between items-baseline">
                    <span className="text-stone-600 group-hover:text-amber-700 transition-colors font-light">{item}</span>
                    <span className="w-full border-b border-dotted border-stone-300 mx-4"></span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- DIGITAL TABLE ORDERING (Dark Luxury) --- */}
      <section id="pedido-mesa" className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Digital Table Service</h2>
          <p className="text-stone-400 text-lg mb-16 max-w-2xl mx-auto font-light">Selecciona tu mesa y realiza tu pedido directamente a cocina mediante WhatsApp. Una experiencia fluida y moderna.</p>
          
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-4xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link key={num} href={`/carta?mesa=${num}`} className="aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-sm hover:bg-amber-600 hover:border-amber-600 hover:scale-110 transition-all duration-300 font-serif text-xl font-bold">
                {num}
              </Link>
            ))}
          </div>
          <Link href="/carta" className="text-amber-500 hover:text-white underline decoration-amber-500 underline-offset-4 transition-colors">Ver carta sin asignar mesa</Link>
        </div>
      </section>

      {/* --- GALLERY (Editorial Grid) --- */}
      <section id="galería" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-serif font-bold text-stone-900 mb-2">Galería</h2>
              <p className="text-stone-500 font-light">Nuestros espacios y creaciones</p>
            </div>
            <a href="https://instagram.com/restartcafe" target="_blank" className="hidden md:block text-amber-600 font-bold text-xs uppercase tracking-widest hover:text-stone-900 transition-colors">Instagram →</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className={`relative group overflow-hidden rounded-sm ${num === 1 || num === 6 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <Image src={`/img/galeria-${num}.webp`} alt={`Gallery ${num}`} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end p-6">
                  <span className="text-white font-serif text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">Plato Signature {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION & CONTACT (Split Layout) --- */}
      <section id="ubicacion" className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Visítanos</h2>
              <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">En el corazón de Puente de Vallecas, te esperamos para ofrecerte una experiencia gastronómica inolvidable.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-amber-600 text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-stone-900">Dirección</h4>
                    <p className="text-stone-600 font-light">C. de Sierra Toledana, 4, 28038 Madrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-amber-600 text-xl">📞</span>
                  <div>
                    <h4 className="font-bold text-stone-900">Reservas</h4>
                    <a href="tel:+34910712322" className="text-stone-600 font-light hover:text-amber-600 transition">910 71 23 22</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {['instagram', 'facebook', 'twitter', 'youtube', 'tiktok', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                    <SocialIcon type={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="h-[500px] bg-stone-200 rounded-sm overflow-hidden shadow-xl relative">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6666666666665!2d-3.6500000000000004!3d40.390000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42270000000001%3A0x1234567890abcdef!2sC.%20de%20Sierra%20Toledana%2C%204%2C%2028038%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* --- LUXURY FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-2xl mb-6">Rest Art Café</h4>
            <p className="max-w-xs font-light leading-relaxed mb-8">Donde la tradición culinaria se encuentra con la innovación en un ambiente acogedor y sofisticado.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Explorar</h4>
            <ul className="space-y-3 font-light">
              <li><Link href="#inicio" className="hover:text-amber-500 transition">Inicio</Link></li>
              <li><Link href="#menú" className="hover:text-amber-500 transition">Menú</Link></li>
              <li><Link href="#reservas" className="hover:text-amber-500 transition">Reservas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 font-light">
              <li><Link href="/aviso-legal" className="hover:text-amber-500 transition">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-amber-500 transition">Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-amber-500 transition">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-stone-800 text-center text-xs font-light">
          <p>© 2026 Rest Art Café. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}