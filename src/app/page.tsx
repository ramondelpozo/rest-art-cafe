import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-800 font-sans selection:bg-amber-100">
      
      {/* --- HEADER CLÁSICO --- */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-serif font-bold text-stone-900 tracking-wide">
            Rest <span className="text-[#b45309]">Art</span> Café
          </Link>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            <Link href="#menu" className="hover:text-[#b45309] transition-colors">Menú</Link>
            <Link href="#carta" className="hover:text-[#b45309] transition-colors">Carta</Link>
            <Link href="#galeria" className="hover:text-[#b45309] transition-colors">Galería</Link>
            <Link href="#reservas" className="hover:text-[#b45309] transition-colors">Reservas</Link>
            <Link href="#ubicacion" className="hover:text-[#b45309] transition-colors">Ubicación</Link>
          </nav>

          <a href="https://wa.me/34910712322" className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-md">
            WhatsApp
          </a>
        </div>
      </header>

      {/* --- HERO ESTILO ORIGINAL --- */}
      <section id="inicio" className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="/img/hero-fachada.webp" 
          alt="Terraza Rest Art Café" 
          fill 
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg tracking-tight">
            REST ART CAFÉ
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light italic max-w-2xl drop-shadow-md">
            Donde la tradición se encuentra con la innovación
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#reservas" className="bg-[#b45309] hover:bg-amber-800 text-white px-8 py-3 rounded-sm font-serif font-bold transition text-lg shadow-lg">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white hover:bg-stone-100 text-stone-900 px-8 py-3 rounded-sm font-serif font-bold transition text-lg shadow-lg">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO RÁPIDA --- */}
      <section className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-300">
          <div className="p-4">
            <h3 className="font-serif font-bold text-[#b45309] mb-2 uppercase text-sm tracking-wide">Ubicación</h3>
            <p className="text-stone-600">C. de Sierra Toledana, 4<br/>28038 Madrid</p>
          </div>
          <div className="p-4">
            <h3 className="font-serif font-bold text-[#b45309] mb-2 uppercase text-sm tracking-wide">Horario</h3>
            <p className="text-stone-600">L-D: 13:00 - 00:00<br/>V-S: Hasta las 01:00</p>
          </div>
          <div className="p-4">
            <h3 className="font-serif font-bold text-[#b45309] mb-2 uppercase text-sm tracking-wide">Servicios</h3>
            <p className="text-stone-600">Terraza · Accesible · Para llevar</p>
          </div>
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menu" className="py-20 container mx-auto px-4 bg-white">
        <div className="text-center mb-16">
          <span className="text-[#b45309] font-serif italic text-lg">Lunes a Viernes</span>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
          <div className="inline-block bg-stone-100 border border-stone-300 px-6 py-2 rounded-sm font-serif font-bold text-xl text-stone-800">
            12,50 €
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border border-stone-200 p-8 rounded-sm bg-stone-50">
            <h3 className="text-xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-300 pb-2">Primeros</h3>
            <ul className="space-y-3 text-stone-700">
              <li>Alubias blancas con matanza</li>
              <li>Tallarines con langostinos</li>
              <li>Calabacín relleno gratinado</li>
              <li>Ensalada mixta</li>
            </ul>
          </div>
          <div className="border-2 border-[#b45309] p-8 rounded-sm bg-white shadow-lg transform md:-translate-y-4">
            <h3 className="text-xl font-serif font-bold mb-6 text-[#b45309] border-b border-[#b45309]/30 pb-2">Segundos</h3>
            <ul className="space-y-3 text-stone-700">
              <li>Entraña de ternera</li>
              <li>Pechuga de pollo crispy</li>
              <li>Lomo de salmón</li>
              <li>Opción vegetariana</li>
            </ul>
          </div>
          <div className="border border-stone-200 p-8 rounded-sm bg-stone-50">
            <h3 className="text-xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-300 pb-2">Postres</h3>
            <ul className="space-y-3 text-stone-700">
              <li>Flan casero</li>
              <li>Natillas</li>
              <li>Fruta del tiempo</li>
              <li>Café o infusión</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PEDIDO DESDE MESA --- */}
      <section id="pedido-mesa" className="py-20 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8">¿Estás en una de nuestras mesas?</h2>
          <p className="mb-10 text-stone-400">Selecciona tu número para acceder al menú digital y pedir por WhatsApp</p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link 
                key={num}
                href={`/carta?mesa=${num}`} 
                className="w-12 h-12 flex items-center justify-center bg-stone-800 hover:bg-[#b45309] rounded-sm font-serif font-bold text-xl transition-all duration-300 border border-stone-700"
              >
                {num}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALERÍA DE 6 IMÁGENES CUADRADAS --- */}
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">Galería</h2>
            <p className="text-stone-500">Nuestros espacios y platos</p>
          </div>
          
          {/* Grid perfecto de 6 imágenes: 3 columnas x 2 filas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square group overflow-hidden border border-stone-200">
                <Image 
                  src={`/img/galeria-${num}.webp`} 
                  alt={`Imagen ${num}`} 
                  fill 
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN Y MAPA --- */}
      <section id="ubicacion" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Ubicación</h2>
            <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm mb-6">
              <p className="text-lg font-medium text-stone-800 mb-2">📍 C. de Sierra Toledana, 4</p>
              <p className="text-stone-600 mb-4">28038 Madrid, Puente de Vallecas</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#b45309] font-bold hover:underline">Cómo llegar →</a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <a href="tel:+34910712322" className="text-stone-700 hover:text-[#b45309] font-medium">910 71 23 22</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <a href="mailto:info@restartcafe.com" className="text-stone-700 hover:text-[#b45309] font-medium">info@restartcafe.com</a>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-stone-300 rounded-sm overflow-hidden shadow-md">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6666666666665!2d-3.6500000000000004!3d40.390000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42270000000001%3A0x1234567890abcdef!2sC.%20de%20Sierra%20Toledana%2C%204%2C%2028038%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 text-center md:text-left">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-4">Rest Art Café</h4>
            <p className="text-sm">© 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/aviso-legal" className="hover:text-white transition text-sm">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition text-sm">Política de Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition text-sm">Política de Cookies</Link>
          </div>
          <div className="flex justify-center md:justify-end gap-4">
             <a href="#" className="text-stone-400 hover:text-white transition">Instagram</a>
             <a href="#" className="text-stone-400 hover:text-white transition">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}