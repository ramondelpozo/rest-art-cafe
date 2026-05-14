import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200 scroll-smooth">
      
      {/* --- HEADER ELEGANTE --- */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide flex items-center gap-1">
            Rest <span className="text-amber-700">Art</span> Café
          </Link>
          
          {/* Navegación Desktop */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium uppercase tracking-wider text-stone-600">
            <Link href="#inicio" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Inicio</Link>
            <Link href="#menu-diario" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Menú</Link>
            <Link href="#carta" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Carta</Link>
            <Link href="#reservas" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Reservas</Link>
            <Link href="#galeria" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Galería</Link>
            <Link href="#ubicacion" className="hover:text-amber-700 transition-colors py-2 border-b-2 border-transparent hover:border-amber-700">Ubicación</Link>
          </nav>

          {/* Botones Acción */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.882 3.309.883h.001c3.181 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.767-5.767-5.767zm12 5.767c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-4.447 3.19c-.237-.119-1.403-.692-1.62-.771-.216-.079-.373-.119-.53.119-.158.238-.613.771-.751.929-.139.158-.277.178-.515.059-.238-.119-1.005-.371-1.913-1.179-.707-.631-1.185-1.41-1.323-1.648-.139-.238-.015-.366.104-.484.108-.107.238-.277.357-.416.119-.139.158-.238.238-.397.079-.158.04-.297-.02-.416-.059-.119-.534-1.283-.731-1.758-.193-.464-.391-.4-.535-.408-.139-.008-.297-.008-.456-.008-.158 0-.416.059-.634.297-.218.238-.831.812-.831 1.981 0 1.169.851 2.298.97 2.457.119.158 1.679 2.564 4.075 3.597.571.247 1.017.394 1.363.504.573.182 1.095.156 1.507.094.461-.069 1.403-.574 1.601-1.129.198-.555.198-1.031.139-1.129-.059-.099-.218-.158-.456-.277z"/></svg>
              WhatsApp
            </a>
            <a href="tel:+34910712322" className="hidden md:flex items-center gap-2 text-stone-700 font-bold hover:text-amber-700 transition">
              📞 910 71 23 22
            </a>
          </div>
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
          <div className="mb-6 animate-fade-in-up">
            <span className="text-amber-400 text-lg font-serif italic tracking-widest block mb-2">Restaurante & Terraza</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-xl">Rest Art Café</h1>
            <div className="flex items-center justify-center gap-2 text-yellow-400 text-lg mb-6 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              ★★★★★ <span className="text-white text-base font-normal ml-2">4.3 (819 reseñas verificadas)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="#reservas" className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl border border-amber-600 transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#carta" className="bg-white hover:bg-stone-100 text-stone-900 px-10 py-4 rounded-sm font-serif font-bold transition text-lg shadow-xl transform hover:-translate-y-1">
              Ver Carta
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO RÁPIDA --- */}
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
      <section id="menu-diario" className="py-24 container mx-auto px-4 bg-[#fdfbf7]">
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

      {/* --- QR MESAS --- */}
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
          <div className="mt-8">
            <Link href="/carta" className="text-amber-400 hover:text-amber-300 underline font-medium text-lg">
              Ver carta completa sin asignar mesa →
            </Link>
          </div>
        </div>
      </section>

      {/* --- CARTA DESTACADA --- */}
      <section id="carta" className="py-24 container mx-auto px-4 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Nuestra Carta</h2>
          <p className="text-stone-600 text-lg">Una selección de nuestros platos más populares</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Carnes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 font-serif">🥩 Carnes</h3>
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
            </div>
          </div>

          {/* De Patatas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 font-serif">🍟 De Patatas</h3>
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
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
           <Link href="/carta" className="inline-block border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-sm font-bold transition font-serif">
             Ver Carta Completa
           </Link>
        </div>
      </section>

      {/* --- GALERÍA DE 6 IMÁGENES PERFECTAMENTE CUADRADAS --- */}
      <section id="galeria" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Galería</h2>
            <p className="text-stone-600 text-lg">Descubre nuestro espacio, nuestra terraza y nuestros platos</p>
          </div>
          
          {/* Grid perfecto de 6 imágenes: 2 filas de 3 columnas en desktop, 2 columnas en móvil */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square group overflow-hidden rounded-sm shadow-md cursor-pointer">
                <Image 
                  src={`/img/galeria-${num}.webp`} 
                  alt={`Imagen galería ${num}`} 
                  fill 
                  className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="https://www.instagram.com/restartcafe/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-900 transition font-serif">
              📷 Ver más fotos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* --- RESEÑAS --- */}
      <section id="resenas" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Reseñas</h2>
            <p className="text-stone-600 text-lg">Lo que dicen nuestros clientes</p>
            <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl mt-4">
              ★★★★★ <span className="text-stone-700 text-base font-normal ml-2">4.3 (819 reseñas verificadas)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reseña 1 */}
            <div className="bg-[#fdfbf7] p-8 rounded-sm shadow-md border-l-4 border-amber-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-800 text-lg">AC</div>
                <div>
                  <h4 className="font-bold text-stone-900">Andrea Cayetano</h4>
                  <p className="text-xs text-stone-500">Local Guide · 119 reseñas</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-stone-700 italic leading-relaxed">"Bar-restaurante con un interior pequeñito pero acogedor y una gran terraza rodeada de jardines. El servicio es atento y la comida casera. Ideal para una comida tranquila en Vallecas."</p>
              <p className="text-xs text-stone-500 mt-4">Hace 4 años</p>
            </div>

            {/* Reseña 2 */}
            <div className="bg-[#fdfbf7] p-8 rounded-sm shadow-md border-l-4 border-amber-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-800 text-lg">MG</div>
                <div>
                  <h4 className="font-bold text-stone-900">Miguel B.</h4>
                  <p className="text-xs text-stone-500">Local Guide · 443 reseñas</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-stone-700 italic leading-relaxed">"Buen menú de fin de semana. La terraza es una maravilla, se está súper agusto. La comida estuvo todo bastante buena y cantidad normal. Muy recomendable."</p>
              <p className="text-xs text-stone-500 mt-4">Hace 3 años</p>
            </div>

            {/* Reseña 3 */}
            <div className="bg-[#fdfbf7] p-8 rounded-sm shadow-md border-l-4 border-amber-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-800 text-lg">PA</div>
                <div>
                  <h4 className="font-bold text-stone-900">Pedro Aguado</h4>
                  <p className="text-xs text-stone-500">Local Guide · 152 reseñas</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-stone-700 italic leading-relaxed">"Muy agradable y buen servicio. Nos pusieron un aperitivo con gominolas que es muy de agradecer. Tienen una terraza bastante grande al aire libre. Muy recomendable."</p>
              <p className="text-xs text-stone-500 mt-4">Hace 9 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESERVAS --- */}
      <section id="reservas" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-stone-900 text-white">
              <h2 className="text-4xl font-serif font-bold mb-6">Reserva tu Mesa</h2>
              <p className="text-stone-300 mb-8 text-lg leading-relaxed">Reserva ahora y asegura tu lugar. Confirmación inmediata.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-stone-200">
                  <span className="text-amber-500">✅</span> Confirmación inmediata
                </div>
                <div className="flex items-center gap-3 text-stone-200">
                  <span className="text-amber-500">✅</span> Cancelación gratuita hasta 2h antes
                </div>
                <div className="flex items-center gap-3 text-stone-200">
                  <span className="text-amber-500">✅</span> Mejor precio garantizado
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
                <p className="text-xs text-stone-500 text-center mt-4">
                  Al reservar aceptas nuestra <Link href="/privacidad" className="underline hover:text-amber-700">Política de Privacidad</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN CON MAPA --- */}
      <section id="ubicacion" className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Ubicación</h2>
            <div className="bg-[#fdfbf7] p-8 rounded-sm mb-8 border border-stone-200">
              <h3 className="font-bold text-xl mb-2 font-serif">📍 Dirección</h3>
              <p className="text-stone-600 text-lg mb-4">C. de Sierra Toledana, 4<br/>Puente de Vallecas, 28038 Madrid</p>
              <a href="https://maps.google.com/?q=C.+de+Sierra+Toledana,+4,+Madrid" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline inline-flex items-center gap-2">
                Abrir en Google Maps →
              </a>
            </div>
            
            <h3 className="font-bold text-xl mb-4 font-serif">🚇 Cómo llegar</h3>
            <ul className="space-y-2 text-stone-600 mb-8">
              <li><strong>Metro:</strong> Puente de Vallecas (Línea 1)</li>
              <li><strong>Bus:</strong> Líneas de EMT cercanas</li>
            </ul>

            {/* Mapa Embebido de Google Maps */}
            <div className="w-full h-64 bg-stone-200 rounded-sm overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6666666666665!2d-3.6500000000000004!3d40.390000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42270000000001%3A0x1234567890abcdef!2sC.%20de%20Sierra%20Toledana%2C%204%2C%2028038%20Madrid!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Rest Art Café"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-bold text-stone-900">Teléfono</h4>
                  <a href="tel:+34910712322" className="text-amber-700 hover:underline text-lg">910 71 23 22</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-bold text-stone-900">WhatsApp</h4>
                  <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline text-lg">Enviar mensaje</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h4 className="font-bold text-stone-900">Email</h4>
                  <a href="mailto:info@restartcafe.com" className="text-amber-700 hover:underline text-lg">info@restartcafe.com</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-xl mb-4 font-serif">Síguenos en Redes</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition">📷</a>
                <a href="https://facebook.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition">📘</a>
                <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition">💬</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER COMPLETO CON LEGALES --- */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-serif font-bold text-2xl mb-4">Rest Art Café</h4>
            <p className="mb-6 max-w-xs leading-relaxed">Donde la tradición culinaria se encuentra con la innovación en un ambiente acogedor en Vallecas.</p>
            <div className="flex gap-4">
               <a href="https://instagram.com/restartcafe" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition text-xl">📷</a>
               <a href="https://facebook.com/restartcafe" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition text-xl">📘</a>
               <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition text-xl">💬</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Explorar</h4>
            <ul className="space-y-2">
              <li><Link href="#inicio" className="hover:text-amber-500 transition">Inicio</Link></li>
              <li><Link href="#menu-diario" className="hover:text-amber-500 transition">Menú del Día</Link></li>
              <li><Link href="#carta" className="hover:text-amber-500 transition">Carta</Link></li>
              <li><Link href="#reservas" className="hover:text-amber-500 transition">Reservas</Link></li>
              <li><Link href="#galeria" className="hover:text-amber-500 transition">Galería</Link></li>
              <li><Link href="#ubicacion" className="hover:text-amber-500 transition">Ubicación</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/aviso-legal" className="hover:text-amber-500 transition">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-amber-500 transition">Política de Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-amber-500 transition">Política de Cookies</Link></li>
              <li><Link href="/mapa-sitio" className="hover:text-amber-500 transition">Mapa del Sitio</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          <p>© 2026 Rest Art Café. Todos los derechos reservados.</p>
          <p className="mt-2">Este sitio usa cookies de Google para ofrecer sus servicios y analizar el tráfico. <Link href="/cookies" className="underline hover:text-stone-400">Más información</Link>.</p>
        </div>
      </footer>
    </main>
  );
}