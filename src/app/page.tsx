import Image from 'next/image';
import Link from 'next/link';

// Iconos SVG Reales para Redes Sociales
const SocialIcon = ({ type }: { type: string }) => {
  const icons: any = {
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
    facebook: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>,
    twitter: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>,
  };
  return <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{icons[type]}</svg>;
};

export default function Home() {
  return (
    // FONDO UNIFICADO: Todo el sitio usa #fdfbf7 para evitar el efecto "a trozos"
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200 scroll-smooth">
      
      {/* --- HEADER UNIFICADO CON EL FONDO --- */}
      <header className="bg-[#fdfbf7]/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide flex items-center gap-1">
            Rest <span className="text-[#b45309]">Art</span> Café
          </Link>
          
          <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            <Link href="#inicio" className="hover:text-[#b45309] transition-colors">Inicio</Link>
            <Link href="#menu-diario" className="hover:text-[#b45309] transition-colors">Menú</Link>
            <Link href="#carta" className="hover:text-[#b45309] transition-colors">Carta</Link>
            <Link href="#reservas" className="hover:text-[#b45309] transition-colors">Reservas</Link>
            <Link href="#galeria" className="hover:text-[#b45309] transition-colors">Galería</Link>
            <Link href="#ubicacion" className="hover:text-[#b45309] transition-colors">Ubicación</Link>
          </nav>

          <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-md">
            WhatsApp
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="/img/hero-fachada.webp" 
          alt="Terraza Rest Art Café" 
          fill 
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <div className="mb-6">
            <span className="text-amber-400 text-lg font-serif italic tracking-widest block mb-2">Restaurante & Terraza</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-xl">Rest Art Café</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#reservas" className="bg-[#b45309] hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl border border-amber-600 transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white hover:bg-stone-100 text-stone-900 px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl transform hover:-translate-y-1">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO RÁPIDA (Sin fondo blanco, integrado) --- */}
      <section className="py-16 border-b border-stone-200/50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="font-serif font-bold text-[#b45309] mb-3 text-xl">Ubicación</h3>
            <p className="text-stone-600 leading-relaxed">C. de Sierra Toledana, 4<br/>28038 Madrid, Vallecas</p>
          </div>
          <div className="p-6 border-l-0 md:border-l border-r-0 md:border-r border-stone-300">
            <h3 className="font-serif font-bold text-[#b45309] mb-3 text-xl">Horario</h3>
            <p className="text-stone-600 leading-relaxed">Lunes - Domingo: 13:00 - 00:00<br/>Viernes - Sábado hasta las 01:00</p>
          </div>
          <div className="p-6">
            <h3 className="font-serif font-bold text-[#b45309] mb-3 text-xl">Servicios</h3>
            <p className="text-stone-600 leading-relaxed">✅ Terraza con jardines<br/>✅ Accesible PMR ✅ Para llevar</p>
          </div>
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menu-diario" className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#b45309] font-serif italic text-lg">Lunes a Viernes</span>
          <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
          <div className="mt-8 inline-block bg-white border-2 border-[#b45309] text-[#b45309] px-8 py-3 rounded-sm font-serif font-bold text-2xl shadow-sm">
            12,50 €
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/50 p-8 rounded-sm shadow-sm border border-stone-200">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-200 pb-4">🥗 Primeros Platos</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li>Alubias blancas con matanza asturiana</li>
              <li>Tallarines con langostinos y verduritas</li>
              <li>Calabacín relleno de picada de ternera gratinado</li>
              <li>Ensalada mixta</li>
            </ul>
          </div>

          <div className="bg-white/50 p-8 rounded-sm shadow-sm border border-stone-200 transform md:-translate-y-4">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-200 pb-4">🥩 Segundos Platos</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li>Entraña de ternera a la plancha</li>
              <li>Pechuga de pollo crispy</li>
              <li>Lomo de salmón a la plancha</li>
            </ul>
          </div>

          <div className="bg-white/50 p-8 rounded-sm shadow-sm border border-stone-200">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-200 pb-4">🍮 Postres</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li>Flan casero</li>
              <li>Natillas</li>
              <li>Fruta del tiempo</li>
              <li>Café o infusión</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PEDIDO DESDE MESA (2 FILAS DE 5) --- */}
      <section id="pedido-mesa" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">¿Estás en una de nuestras mesas?</h2>
          <p className="mb-10 text-stone-300 text-lg">Selecciona tu número para acceder al menú digital y pedir por WhatsApp</p>
          
          {/* GRID DE MESAS: 2 Filas de 5 columnas */}
          <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link 
                key={num}
                href={`/carta?mesa=${num}`} 
                className="aspect-square flex items-center justify-center bg-white/10 hover:bg-[#b45309] border border-white/20 rounded-sm font-serif font-bold text-2xl transition-all duration-300 backdrop-blur-sm"
              >
                {num}
              </Link>
            ))}
          </div>
          <Link href="/carta" className="text-amber-400 hover:text-amber-300 underline font-medium text-lg">
            Ver carta completa sin asignar mesa →
          </Link>
        </div>
      </section>

      {/* --- GALERÍA DE 6 IMÁGENES --- */}
      <section id="galeria" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Galería</h2>
            <p className="text-stone-600 text-lg">Descubre nuestro espacio y nuestros platos</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square group overflow-hidden rounded-sm shadow-md cursor-pointer">
                <Image 
                  src={`/img/galeria-${num}.webp`} 
                  alt={`Imagen galería ${num}`} 
                  fill 
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN Y CONTACTO --- */}
      <section id="ubicacion" className="py-24 border-t border-stone-200">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Ubicación</h2>
            <div className="bg-white/50 p-8 rounded-sm mb-8 border border-stone-200">
              <h3 className="font-bold text-xl mb-2 font-serif">📍 Dirección</h3>
              <p className="text-stone-600 text-lg mb-4">C. de Sierra Toledana, 4<br/>Puente de Vallecas, 28038 Madrid</p>
              <a href="https://maps.google.com/?q=C.+de+Sierra+Toledana,+4,+Madrid" target="_blank" rel="noopener noreferrer" className="text-[#b45309] font-bold hover:underline inline-flex items-center gap-2">
                Abrir en Google Maps →
              </a>
            </div>
            
            <div className="w-full h-64 bg-stone-200 rounded-sm overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6666666666665!2d-3.6500000000000004!3d40.390000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42270000000001%3A0x1234567890abcdef!2sC.%20de%20Sierra%20Toledana%2C%204%2C%2028038%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Contacto</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-bold text-stone-900">Teléfono</h4>
                  <a href="tel:+34910712322" className="text-[#b45309] hover:underline text-lg">910 71 23 22</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-bold text-stone-900">Email</h4>
                  <a href="mailto:info@restartcafe.com" className="text-[#b45309] hover:underline text-lg">info@restartcafe.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 font-serif">Síguenos en Redes</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#b45309] hover:text-white transition">
                  <SocialIcon type="instagram" />
                </a>
                <a href="https://facebook.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#b45309] hover:text-white transition">
                  <SocialIcon type="facebook" />
                </a>
                <a href="https://twitter.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 hover:bg-[#b45309] hover:text-white transition">
                  <SocialIcon type="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-serif font-bold text-2xl mb-4">Rest Art Café</h4>
          <p className="mb-8">© 2026 Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/aviso-legal" className="hover:text-white transition">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}