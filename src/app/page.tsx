import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-700 tracking-tighter flex items-center gap-2">
            Rest Art Café
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-stone-600">
            <Link href="#menu-diario" className="hover:text-amber-600 transition">Menú del Día</Link>
            <Link href="#carta" className="hover:text-amber-600 transition">Carta</Link>
            <Link href="#reservas" className="hover:text-amber-600 transition">Reservas</Link>
            <Link href="#ubicacion" className="hover:text-amber-600 transition">Ubicación</Link>
          </nav>
          <a 
            href="https://wa.me/34910712322" 
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-md"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="/img/hero-fachada.webp" 
          alt="Terraza Rest Art Café" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-black/30">
          <div className="mb-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm font-medium">4.3 (819 reseñas verificadas)</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg tracking-tight">Rest Art Café</h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl">Restaurante & Terraza en el corazón de Vallecas. Donde la tradición culinaria se encuentra con la innovación.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#reservas" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-bold transition text-lg shadow-lg transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#carta" className="bg-white hover:bg-gray-100 text-stone-900 px-8 py-3 rounded-md font-bold transition text-lg shadow-lg transform hover:-translate-y-1">
              Ver Carta
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO RÁPIDA --- */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
          <div className="p-4">
            <h3 className="font-bold text-amber-700 mb-2 uppercase text-sm tracking-wide">Ubicación</h3>
            <p className="text-stone-600">C. de Sierra Toledana, 4<br/>28038 Madrid, España</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-amber-700 mb-2 uppercase text-sm tracking-wide">Horario</h3>
            <p className="text-stone-600">Lunes, Miércoles - Domingo: 13:00 - 00:00<br/>Viernes - Sábado hasta las 01:00</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-amber-700 mb-2 uppercase text-sm tracking-wide">Servicios</h3>
            <p className="text-stone-600">✅ Terraza con jardines<br/>✅ Accesible PMR ✅ Para llevar</p>
          </div>
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menu-diario" className="py-20 container mx-auto px-4 bg-stone-50">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Lunes a Viernes</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4">Menú del Día</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Disfruta de nuestra cocina casera al mejor precio. Incluye pan, postre o café. Bebida no incluida.</p>
          <div className="mt-6 inline-block bg-amber-100 text-amber-900 px-6 py-2 rounded-full font-bold text-xl border border-amber-200">
            12,50 €
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Primeros */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-6">🥗</div>
            <h3 className="text-2xl font-bold mb-6 text-stone-800">Primeros Platos</h3>
            <ul className="space-y-4 text-stone-700">
              <li className="border-b border-stone-100 pb-2 last:border-0">Alubias blancas con matanza asturiana</li>
              <li className="border-b border-stone-100 pb-2 last:border-0">Tallarines con langostinos y verduritas</li>
              <li className="border-b border-stone-100 pb-2 last:border-0">Calabacín relleno de picada de ternera gratinado</li>
              <li>Ensalada mixta</li>
            </ul>
          </div>

          {/* Segundos */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition duration-300 transform md:-translate-y-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-6">🥩</div>
            <h3 className="text-2xl font-bold mb-6 text-stone-800">Segundos Platos</h3>
            <ul className="space-y-4 text-stone-700">
              <li className="border-b border-stone-100 pb-2 last:border-0">Entraña de ternera a la plancha</li>
              <li className="border-b border-stone-100 pb-2 last:border-0">Pechuga de pollo crispy</li>
              <li>Lomo de salmón a la plancha</li>
            </ul>
          </div>

          {/* Postres */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-6">🍮</div>
            <h3 className="text-2xl font-bold mb-6 text-stone-800">Postres</h3>
            <ul className="space-y-4 text-stone-700">
              <li className="border-b border-stone-100 pb-2 last:border-0">Flan casero</li>
              <li className="border-b border-stone-100 pb-2 last:border-0">Natillas</li>
              <li className="border-b border-stone-100 pb-2 last:border-0">Fruta del tiempo</li>
              <li>Café o infusión</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- QR MESAS (Digital Menu) --- */}
      <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">📱 Menú Digital</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Estás en una de nuestras mesas?</h2>
          <p className="mb-10 text-stone-300 max-w-2xl mx-auto text-lg">Selecciona tu número de mesa para acceder directamente al menú digital y realizar tu pedido.</p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link 
                key={num}
                href={`/carta?mesa=${num}`} 
                className="w-14 h-14 flex items-center justify-center bg-white text-stone-900 hover:bg-amber-500 hover:text-white rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:scale-110"
              >
                {num}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/carta" className="text-amber-400 hover:text-amber-300 underline font-medium text-lg">
              Ver carta completa sin asignar mesa →
            </Link>
          </div>
        </div>
      </section>

      {/* --- CARTA DESTACADA --- */}
      <section id="carta" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Nuestra Carta</h2>
          <p className="text-stone-600">Una selección de nuestros platos más populares</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Carnes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2">🥩 Carnes</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Medallones de solomillo</h4>
                  <p className="text-stone-500 text-sm mt-1">Queso cheddar, cebolla caramelizada, crema de P.X.</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">12,80€</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Lomo madurado de vaca</h4>
                  <p className="text-stone-500 text-sm mt-1">A la plancha (350 gr. apx.)</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">25,50€</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Cachopo asturiano</h4>
                  <p className="text-stone-500 text-sm mt-1">Aprox 300gr</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">16,50€</span>
              </div>
            </div>
          </div>

          {/* De Patatas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2">🍟 De Patatas</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Sartén de Huevos camperos</h4>
                  <p className="text-stone-500 text-sm mt-1">Con jamón ibérico</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">13,50€</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Patatas Bravas</h4>
                  <p className="text-stone-500 text-sm mt-1">Nuestra salsa especial</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">7,50€</span>
              </div>
              <div className="flex justify-between items-start group">
                <div>
                  <h4 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition">Patatas Rancheras</h4>
                  <p className="text-stone-500 text-sm mt-1">Bacon, triple queso fundido, salsa ranchera</p>
                </div>
                <span className="font-bold text-amber-700 text-lg whitespace-nowrap ml-4">13,50€</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
           <Link href="/carta" className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-md font-bold transition">
             Ver Carta Completa
           </Link>
        </div>
      </section>

      {/* --- RESERVAS --- */}
      <section id="reservas" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Reserva tu Mesa</h2>
              <p className="text-stone-600 mb-8">Asegura tu lugar en nuestra terraza o salón. Confirmación inmediata.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span>Confirmación inmediata</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</div>
                  <span>Cancelación gratuita hasta 2h antes</span>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <p className="text-sm text-stone-500 mb-1">O reserva por teléfono:</p>
                <a href="tel:+34910712322" className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition">
                  📞 910 71 23 22
                </a>
              </div>
            </div>

            <div className="md:w-1/2 bg-stone-900 p-8 md:p-12 text-white">
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Fecha</label>
                  <input type="date" className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 focus:ring-2 focus:ring-amber-500 outline-none text-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Hora</label>
                    <select className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 focus:ring-2 focus:ring-amber-500 outline-none text-white appearance-none">
                      <option>13:00</option>
                      <option>13:30</option>
                      <option>14:00</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Personas</label>
                    <select className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 focus:ring-2 focus:ring-amber-500 outline-none text-white appearance-none">
                      <option>2 personas</option>
                      <option>3 personas</option>
                      <option>4 personas</option>
                      <option>5+ personas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Teléfono</label>
                  <input type="tel" placeholder="+34 600 000 000" className="w-full bg-stone-800 border border-stone-700 rounded-md p-3 focus:ring-2 focus:ring-amber-500 outline-none text-white" />
                </div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-md transition text-lg mt-4 shadow-lg shadow-amber-900/50">
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-2xl mb-4 tracking-tight">Rest Art Café</h4>
            <p className="mb-6 max-w-xs">Donde la tradición culinaria se encuentra con la innovación en un ambiente acogedor en Vallecas.</p>
            <div className="flex gap-4">
               {/* Aquí podrías poner iconos de redes sociales si quisieras */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li><a href="tel:+34910712322" className="hover:text-white transition">📞 910 71 23 22</a></li>
              <li><a href="https://wa.me/34910712322" className="hover:text-white transition">💬 WhatsApp</a></li>
              <li><a href="mailto:info@restartcafe.com" className="hover:text-white transition">✉️ info@restartcafe.com</a></li>
              <li className="pt-2">📍 C. de Sierra Toledana, 4, Madrid</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-900 text-center text-xs text-stone-600">
          <p>© 2026 Rest Art Café. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}