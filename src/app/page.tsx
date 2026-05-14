import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200/50 overflow-x-hidden">
      
      {/* --- HEADER PREMIUM --- */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide group">
            Rest <span className="text-amber-700 group-hover:text-amber-600 transition-colors">Art</span> Café
          </Link>
          
          <nav className="hidden lg:flex space-x-10 text-xs font-bold uppercase tracking-[0.15em] text-stone-500">
            {['Inicio', 'Experiencia', 'Menú', 'Carta', 'Reservas', 'Galería'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-700 transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-600/30 flex items-center gap-2">
            WhatsApp
          </a>
        </div>
      </header>

      {/* --- HERO IMPACTANTE (CORREGIDO) --- */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-fachada.webp" alt="Rest Art Café Luxury" fill className="object-cover brightness-[0.4] animate-slow-zoom" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
          <span className="inline-block py-1 px-4 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md bg-white/5 animate-fade-in-down">
            Experiencia Gastronómica en Vallecas
          </span>
          
          {/* TÍTULO PRINCIPAL GIGANTE */}
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-4 leading-tight drop-shadow-2xl animate-fade-in-up tracking-tight text-white">
            REST ART CAFÉ
          </h1>
          
          {/* SUBTÍTULO PEQUEÑO Y ELEGANTE (Abajo) */}
          <p className="text-base md:text-lg text-stone-300 mb-12 font-light italic opacity-80 animate-fade-in-up delay-100 max-w-xl mx-auto">
            Donde la tradición se encuentra con la innovación
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-200">
            <Link href="#reservas" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-600/40 transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 hover:border-white transform hover:-translate-y-1">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- RESTO DE SECCIONES (Mantenidas igual pero con estilo clásico) --- */}
      {/* ... Aquí irían las secciones de Experiencia, Menú, etc. que ya tenías ... */}
      
      {/* Footer simplificado para el ejemplo */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
        <p>© 2026 Rest Art Café. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}