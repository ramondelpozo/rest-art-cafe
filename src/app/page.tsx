import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f7f2] text-stone-800 font-sans selection:bg-amber-200">
      
      {/* --- HEADER CLÁSICO --- */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-serif font-bold text-stone-900 tracking-wide">
            Rest Art <span className="text-amber-700">Café</span>
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider text-stone-600">
            <Link href="#menu-diario" className="hover:text-amber-700 transition-colors">Menú</Link>
            <Link href="#carta" className="hover:text-amber-700 transition-colors">Carta</Link>
            <Link href="#galeria" className="hover:text-amber-700 transition-colors">Galería</Link>
            <Link href="#reservas" className="hover:text-amber-700 transition-colors">Reservas</Link>
            <Link href="#ubicacion" className="hover:text-amber-700 transition-colors">Ubicación</Link>
          </nav>
          <a 
            href="https://wa.me/34910712322" 
            className="bg-green-700 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-800 transition flex items-center gap-2 shadow-md"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* --- HERO CON ESTILO CLÁSICO --- */}
      <section id="inicio" className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="/img/hero-fachada.webp" 
          alt="Terraza Rest Art Café" 
          fill 
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <div className="mb-6 animate-fade-in-up">
            <span className="text-amber-400 text-lg font-serif italic tracking-widest block mb-2">Restaurante & Terraza</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 drop-shadow-xl">Rest Art Café</h1>
            <div className="flex items-center justify-center gap-2 text-yellow-400 text-xl mb-6">
              ★★★★★ <span className="text-white text-base font-normal ml-2">4.3 (819 reseñas verificadas)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#reservas" className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl border border-amber-600">
              Reservar Mesa
            </Link>
            <Link href="#carta" className="bg-white hover:bg-stone-100 text-stone-900 px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl">
              Ver Carta
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO RÁPIDA (Estilo Tarjetas Clásicas) --- */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
          <div className="p-6">
            <h3 className="font-serif font-bold text-amber-800 mb-3 text-xl">Ubicación</h3>
            <p className="text-stone-600 leading-relaxed">C. de Sierra Toledana, 4<br/>28038 Madrid, Vallecas</p>
            <Link href="#ubicacion" className="text-amber-700 font-bold text-sm mt-2 inline-block hover:underline">Cómo llegar →</Link>
          </div>
          <div className="p-6">
            <h3 className="font-serif font-bold text-amber-800 mb-3 text-xl">Horario</h3>
            <p className="text-stone-600 leading-relaxed">Lunes, Miércoles - Domingo: 13:00 - 00:00<br/>Viernes - Sábado hasta las 01:00</p>
          </div>
          <div className="p-6">
            <h3 className="font-serif font-bold text-amber-800 mb-3 text-xl">Servicios</h3>
            <p className="text-stone-600 leading-relaxed">✅ Terraza con jardines<br/>✅ Accesible PMR ✅ Para llevar</p>
          </div>
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menu-diario" className="py-24 container mx-auto px-4 bg-[#f9f7f2]">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-serif italic text-lg">Lunes a Viernes</span>
          <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">Disfruta de nuestra cocina casera al mejor precio. Incluye pan, postre o café.</p>
          <div className="mt-8 inline-block bg-white border-2 border-amber-700 text-amber-900 px-8 py-3 rounded-sm font-serif font-bold text-2xl shadow-sm">
            12,50 €
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Primeros */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-amber-700">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">🥗 Primeros Platos</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li className="flex justify-between"><span>Alubias blancas con matanza asturiana</span></li>
              <li className="flex justify-between"><span>Tallarines con langostinos y verduritas</span></li>
              <li className="flex justify-between"><span>Calabacín relleno de picada de ternera gratinado</span></li>
              <li className="flex justify-between"><span>Ensalada mixta</span></li>
            </ul>
          </div>

          {/* Segundos */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-amber-700 transform md:-translate-y-4">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">🥩 Segundos Platos</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li className="flex justify-between"><span>Entraña de ternera a la plancha</span></li>
              <li className="flex justify-between"><span>Pechuga de pollo crispy</span></li>
              <li className="flex justify-between"><span>Lomo de salmón a la plancha</span></li>
            </ul>
          </div>

          {/* Postres */}
          <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-amber-700">
            <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4">🍮 Postres</h3>
            <ul className="space-y-4 text-stone-700 font-medium">
              <li className="flex justify-between"><span>Flan casero</span></li>
              <li className="flex justify-between"><span>Natillas</span></li>
              <li className="flex justify-between"><span>Fruta del tiempo</span></li>
              <li className="flex justify-between"><span>Café o infusión</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- GALERÍA DE IMÁGENES (NUEVA SECCIÓN) --- */}
      <section id="galeria" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Nuestra Galería</h2>
            <p className="text-stone-600 text-lg">Descubre nuestro espacio, nuestra terraza y nuestros platos</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Asegúrate de tener estas imágenes en public/img/ o cambia los nombres */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-1.webp" alt="Terraza" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-2.webp" alt="Plato 1" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-3.webp" alt="Plato 2" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-4.webp" alt="Interior" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
             <div className="relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-5.webp" alt="Detalle" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
             <div className="relative group overflow-hidden rounded-sm">
              <Image src="/img/galeria-6.webp" alt="Ambiente" fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="https://www.instagram.com/restartcafe/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-900 transition">
              📷 Ver más fotos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* --- QR MESAS (Estilo Integrado) --- */}
      <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">¿Estás en una de nuestras mesas?</h2>
          <p className="mb-10 text-stone-300 text-lg">Selecciona tu número para acceder al menú digital</p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link 
                key={num}
                href={`/carta?mesa=${num}`} 
                className="w-12 h-12 flex items-center justify-center bg-amber-700 hover:bg-amber-600 rounded-sm font-serif font-bold text-xl transition-all duration-300 border border-amber-500"
              >
                {num}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESERVAS --- */}
      <section id="reservas" className="py-24 bg-[#f9f7f2]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-stone-900 text-white">
              <h2 className="text-4xl font-serif font-bold mb-6">Reserva tu Mesa</h2>
              <p className="text-stone-300 mb-8 text-lg leading-relaxed">Asegura tu lugar en nuestra terraza o salón. Confirmación inmediata y cancelación gratuita.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-stone-200">
                  <span className="text-amber-500">✓</span> Confirmación inmediata
                </div>
                <div className="flex items-center gap-3 text-stone-200">
                  <span className="text-amber-500">✓</span> Cancelación gratuita hasta 2h antes
                </div>
              </div>

              <div className="bg-stone-800 p-6 rounded-sm border border-stone-700">
                <p className="text-sm text-stone-400 mb-2 uppercase tracking-wide">O reserva por teléfono:</p>
                <a href="tel:+34910712322" className="text-3xl font-serif font-bold text-amber-500 hover:text-amber-400 transition">
                  📞 910 71 23 22
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-10 md:p-16 bg-white">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">Fecha</label>
                  <input type="date" className="w-full bg-stone-50 border border-stone-300 rounded-sm p-4 focus:ring-2 focus:ring-amber-700 outline-none text-stone-900" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">Hora</label>
                    <select className="w-full bg-stone-50 border border-stone-300 rounded-sm p-4 focus:ring-2 focus:ring-amber-700 outline-none text-stone-900 appearance-none">
                      <option>13:00</option>
                      <option>13:30</option>
                      <option>14:00</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">Personas</label>
                    <select className="w-full bg-stone-50 border border-stone-300 rounded-sm p-4 focus:ring-2 focus:ring-amber-700 outline-none text-stone-900 appearance-none">
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                      <option>5+ personas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">Teléfono</label>
                  <input type="tel" placeholder="+34 600 000 000" className="w-full bg-stone-50 border border-stone-300 rounded-sm p-4 focus:ring-2 focus:ring-amber-700 outline-none text-stone-900" />
                </div>
                <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-serif font-bold py-4 rounded-sm transition text-lg shadow-lg mt-4">
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN Y RESEÑAS --- */}
      <section id="ubicacion" className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Ubicación</h2>
            <div className="bg-stone-100 p-8 rounded-sm mb-8">
              <h3 className="font-bold text-xl mb-2">📍 Dirección</h3>
              <p className="text-stone-600 text-lg mb-4">C. de Sierra Toledana, 4<br/>Puente de Vallecas, 28038 Madrid</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline">Abrir en Google Maps →</a>
            </div>
            
            <h3 className="font-bold text-xl mb-4">🚇 Cómo llegar</h3>
            <ul className="space-y-2 text-stone-600">
              <li><strong>Metro:</strong> Puente de Vallecas (Línea 1)</li>
              <li><strong>Bus:</strong> Líneas de EMT cercanas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Reseñas</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-700 pl-6 py-2">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">★★★★★</div>
                <p className="text-stone-700 italic mb-2">"Bar-restaurante con un interior pequeñito pero acogedor y una gran terraza rodeada de jardines. El servicio es atento y la comida casera."</p>
                <p className="text-sm font-bold text-stone-500">- Andrea Cayetano, Local Guide</p>
              </div>
              <div className="border-l-4 border-amber-700 pl-6 py-2">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">★★★★★</div>
                <p className="text-stone-700 italic mb-2">"La terraza es una maravilla, se está súper agusto. La comida estuvo todo bastante buena y cantidad normal. Muy recomendable."</p>
                <p className="text-sm font-bold text-stone-500">- Miguel B., Local Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CLÁSICO --- */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-2xl mb-4">Rest Art Café</h4>
            <p className="mb-6 max-w-xs leading-relaxed">Donde la tradición culinaria se encuentra con la innovación en un ambiente acogedor en Vallecas.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li><a href="tel:+34910712322" className="hover:text-amber-500 transition">📞 910 71 23 22</a></li>
              <li><a href="https://wa.me/34910712322" className="hover:text-amber-500 transition">💬 WhatsApp</a></li>
              <li><a href="mailto:info@restartcafe.com" className="hover:text-amber-500 transition">✉️ info@restartcafe.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          <p>© 2026 Rest Art Café. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}