import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200/50 overflow-x-hidden scroll-smooth">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide group">
            Rest <span className="text-[#b45309] group-hover:text-amber-700 transition-colors">Art</span> Café
          </Link>
          
          <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            {['Inicio', 'Menú', 'Carta', 'Reservas', 'Galería', 'Ubicación'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#b45309] transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#b45309] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition shadow-lg flex items-center gap-2">
            WhatsApp
          </a>
        </div>
      </header>

      {/* --- HERO CORREGIDO (Título Grande, Subtítulo Pequeño) --- */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-fachada.webp" alt="Rest Art Café" fill className="object-cover brightness-[0.5]" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-4 leading-tight drop-shadow-2xl tracking-tight text-white">
            REST ART CAFÉ
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-10 font-light italic opacity-90">
            Donde la tradición se encuentra con la innovación
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#reservas" className="bg-[#b45309] hover:bg-amber-800 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 shadow-xl transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 hover:border-white transform hover:-translate-y-1">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO CARDS --- */}
      <section className="py-20 bg-white relative -mt-20 z-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ubicación", icon: "📍", text: "C. de Sierra Toledana, 4\n28038 Madrid, Vallecas", link: "#ubicacion" },
            { title: "Horario", icon: "🕒", text: "L-D: 13:00 - 00:00\nV-S: Hasta las 01:00", link: null },
            { title: "Servicios", icon: "✨", text: "Terraza Jardín · PMR\nCocina de Autor", link: null }
          ].map((card, idx) => (
            <div key={idx} className="bg-[#fdfbf7] p-8 rounded-sm shadow-lg border-t-4 border-[#b45309] hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-3">{card.title}</h3>
              <p className="text-stone-600 whitespace-pre-line leading-relaxed mb-4 font-light">{card.text}</p>
              {card.link && <Link href={card.link} className="text-[#b45309] font-bold text-sm uppercase tracking-wide hover:text-amber-800 inline-flex items-center gap-1">Cómo llegar →</Link>}
            </div>
          ))}
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menú" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#b45309] font-serif italic text-lg">Lunes a Viernes</span>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
            <div className="mt-8 inline-block bg-white border-2 border-[#b45309] text-[#b45309] px-8 py-3 rounded-sm font-serif font-bold text-2xl shadow-sm">
              12,50 €
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
             <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-[#b45309]">
                <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">🥗 Primeros Platos</h3>
                <ul className="space-y-4 text-stone-700 font-light">
                  <li>Alubias blancas con matanza asturiana</li>
                  <li>Tallarines con langostinos</li>
                  <li>Calabacín relleno gratinado</li>
                  <li>Ensalada mixta gourmet</li>
                </ul>
             </div>
             
             <div className="bg-stone-900 text-white p-8 rounded-sm shadow-2xl text-center transform md:-translate-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#b45309]"></div>
                <h3 className="font-serif text-2xl mb-2">Menú Completo</h3>
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Incluye Pan, Postre y Café</p>
                <Link href="#reservas" className="inline-block border border-white/30 px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all">Reservar Ahora</Link>
             </div>

             <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-[#b45309]">
                <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">🥩 Segundos Platos</h3>
                <ul className="space-y-4 text-stone-700 font-light">
                  <li>Entraña de ternera a la plancha</li>
                  <li>Pechuga de pollo crispy</li>
                  <li>Lomo de salmón salvaje</li>
                  <li>Opción Vegetariana del día</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* --- PEDIDO DESDE MESA --- */}
      <section id="pedido-mesa" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Digital Table Service</h2>
          <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto font-light">Selecciona tu mesa y realiza tu pedido directamente a cocina mediante WhatsApp.</p>
          
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-4xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link key={num} href={`/carta?mesa=${num}`} className="aspect-square flex items-center justify-center bg-white/5 border border-white/10 rounded-sm hover:bg-[#b45309] hover:border-[#b45309] hover:scale-110 transition-all duration-300 font-serif text-xl font-bold">
                {num}
              </Link>
            ))}
          </div>
          <Link href="/carta" className="text-[#d97706] hover:text-white underline decoration-[#d97706] underline-offset-4 transition-colors">Ver carta sin asignar mesa</Link>
        </div>
      </section>

      {/* --- GALERÍA --- */}
      <section id="galería" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-stone-900 mb-2">Galería</h2>
            <p className="text-stone-500 font-light">Nuestros espacios y creaciones</p>
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

      {/* --- UBICACIÓN & CONTACTO --- */}
      <section id="ubicacion" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Visítanos</h2>
              <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">En el corazón de Puente de Vallecas, te esperamos para ofrecerte una experiencia gastronómica inolvidable.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-[#b45309] text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-stone-900">Dirección</h4>
                    <p className="text-stone-600 font-light">C. de Sierra Toledana, 4, 28038 Madrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#b45309] text-xl">📞</span>
                  <div>
                    <h4 className="font-bold text-stone-900">Reservas</h4>
                    <a href="tel:+34910712322" className="text-stone-600 font-light hover:text-[#b45309] transition">910 71 23 22</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] bg-stone-200 rounded-sm overflow-hidden shadow-xl relative">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6666666666665!2d-3.6500000000000004!3d40.390000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42270000000001%3A0x1234567890abcdef!2sC.%20de%20Sierra%20Toledana%2C%204%2C%2028038%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-2xl mb-6">Rest Art Café</h4>
            <p className="max-w-xs font-light leading-relaxed mb-8">Donde la tradición culinaria se encuentra con la innovación en un ambiente acogedor y sofisticado.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Explorar</h4>
            <ul className="space-y-3 font-light">
              <li><Link href="#inicio" className="hover:text-[#d97706] transition">Inicio</Link></li>
              <li><Link href="#menú" className="hover:text-[#d97706] transition">Menú</Link></li>
              <li><Link href="#reservas" className="hover:text-[#d97706] transition">Reservas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 font-light">
              <li><Link href="/aviso-legal" className="hover:text-[#d97706] transition">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-[#d97706] transition">Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-[#d97706] transition">Cookies</Link></li>
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