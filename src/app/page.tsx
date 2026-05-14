import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

// Componente principal
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-amber-200 scroll-smooth">
      
      {/* --- HEADER PREMIUM --- */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-wide flex items-center gap-2 group">
            Rest <span className="text-amber-700 group-hover:text-amber-600 transition-colors">Art</span> Café
          </Link>
          
          <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-widest text-stone-600">
            {['Inicio', 'Menú', 'Carta', 'Reservas', 'Galería', 'Ubicación'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-amber-700 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-amber-700 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.882 3.309.883h.001c3.181 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.767-5.767-5.767zm12 5.767c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-4.447 3.19c-.237-.119-1.403-.692-1.62-.771-.216-.079-.373-.119-.53.119-.158.238-.613.771-.751.929-.139.158-.277.178-.515.059-.238-.119-1.005-.371-1.913-1.179-.707-.631-1.185-1.41-1.323-1.648-.139-.238-.015-.366.104-.484.108-.107.238-.277.357-.416.119-.139.158-.238.238-.397.079-.158.04-.297-.02-.416-.059-.119-.534-1.283-.731-1.758-.193-.464-.391-.4-.535-.408-.139-.008-.297-.008-.456-.008-.158 0-.416.059-.634.297-.218.238-.831.812-.831 1.981 0 1.169.851 2.298.97 2.457.119.158 1.679 2.564 4.075 3.597.571.247 1.017.394 1.363.504.573.182 1.095.156 1.507.094.461-.069 1.403-.574 1.601-1.129.198-.555.198-1.031.139-1.129-.059-.099-.218-.158-.456-.277z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO IMPACTANTE --- */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Image 
          src="/img/hero-fachada.webp" 
          alt="Terraza Rest Art Café" 
          fill 
          className="object-cover brightness-[0.5] scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm bg-white/10 animate-fade-in-down">
            Experiencia Gastronómica en Vallecas
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl animate-fade-in-up">
            Donde la tradición <br/> se encuentra con la <span className="text-amber-400 italic">innovación</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
            Disfruta de nuestra terraza jardín, cocina casera de autor y un ambiente único en el corazón de Puente de Vallecas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <Link href="#reservas" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-amber-600/40 transform hover:-translate-y-1">
              Reservar Mesa
            </Link>
            <Link href="#pedido-mesa" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-serif font-bold text-lg transition-all duration-300 hover:border-white transform hover:-translate-y-1">
              Pedir desde la Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* --- INFO CARDS (Ubicación, Horario, Servicios) --- */}
      <section className="py-20 bg-white relative -mt-20 z-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Ubicación", icon: "📍", text: "C. de Sierra Toledana, 4\n28038 Madrid, Vallecas", link: "#ubicacion", linkText: "Cómo llegar →" },
            { title: "Horario", icon: "🕒", text: "Lunes, Miércoles - Domingo: 13:00 - 00:00\nViernes - Sábado hasta las 01:00", link: null },
            { title: "Servicios", icon: "✨", text: "✅ Terraza Jardín\n✅ Accesible PMR\n✅ Para llevar", link: null }
          ].map((card, idx) => (
            <div key={idx} className="bg-[#fdfbf7] p-8 rounded-sm shadow-lg border-t-4 border-amber-600 hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-3">{card.title}</h3>
              <p className="text-stone-600 whitespace-pre-line leading-relaxed mb-4">{card.text}</p>
              {card.link && (
                <Link href={card.link} className="text-amber-700 font-bold text-sm uppercase tracking-wide hover:text-amber-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {card.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- MENÚ DEL DÍA --- */}
      <section id="menú" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-700 font-serif italic text-lg">Lunes a Viernes</span>
            <h2 className="text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Menú del Día</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">Cocina casera al mejor precio. Incluye pan, postre o café.</p>
            <div className="mt-8 inline-block bg-white border-2 border-amber-700 text-amber-900 px-8 py-3 rounded-sm font-serif font-bold text-2xl shadow-sm">
              12,50 €
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { title: "Primeros Platos", icon: "🥗", items: ["Alubias blancas con matanza asturiana", "Tallarines con langostinos y verduritas", "Calabacín relleno de picada de ternera gratinado", "Ensalada mixta"] },
              { title: "Segundos Platos", icon: "🥩", items: ["Entraña de ternera a la plancha", "Pechuga de pollo crispy", "Lomo de salmón a la plancha"], highlight: true },
              { title: "Postres", icon: "🍮", items: ["Flan casero", "Natillas", "Fruta del tiempo", "Café o infusión"] }
            ].map((col, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-sm shadow-lg border-t-4 border-amber-700 ${col.highlight ? 'transform md:-translate-y-4' : ''}`}>
                <h3 className="text-2xl font-serif font-bold mb-6 text-stone-800 border-b border-stone-100 pb-4 flex items-center gap-3">
                  <span>{col.icon}</span> {col.title}
                </h3>
                <ul className="space-y-4 text-stone-700 font-medium">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center group">
                      <span className="group-hover:text-amber-700 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PEDIDO DESDE LA MESA (WHATSAPP) --- */}
      <section id="pedido-mesa" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/hero-fachada.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">🚀 Servicio Rápido</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">¿Estás en una de nuestras mesas?</h2>
            <p className="text-stone-300 text-lg mb-12 max-w-2xl mx-auto">
              Olvídate de esperar al camarero. Selecciona tu mesa, elige tus platos y envía el pedido directamente a cocina mediante WhatsApp.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", title: "Selecciona Mesa", desc: "Elige tu número de mesa." },
                { step: "2", title: "Explora la Carta", desc: "Descubre nuestros platos." },
                { step: "3", title: "Añade al Pedido", desc: "Selecciona lo que deseas." },
                { step: "4", title: "Envía por WhatsApp", desc: "Recibe atención inmediata." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-sm border border-white/10 hover:border-amber-500/50 transition-colors">
                  <div className="text-3xl font-serif font-bold text-amber-500 mb-3">{item.step}</div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20">
              <h3 className="text-2xl font-serif font-bold mb-6">Selecciona tu número de mesa:</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <Link 
                    key={num}
                    href={`/carta?mesa=${num}`} 
                    className="w-14 h-14 flex items-center justify-center bg-amber-600 hover:bg-amber-500 rounded-sm font-serif font-bold text-xl transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-amber-600/50"
                  >
                    {num}
                  </Link>
                ))}
              </div>
              <Link href="/carta" className="text-amber-400 hover:text-amber-300 underline font-medium text-lg">
                Ver carta completa sin asignar mesa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUESTRA CARTA (Preview) --- */}
      <section id="carta" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Nuestra Carta</h2>
            <p className="text-stone-600 text-lg">Una selección de nuestros platos más populares</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Carnes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 font-serif flex items-center gap-2">🥩 Carnes</h3>
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
              <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-200 pb-2 font-serif flex items-center gap-2">🍟 De Patatas</h3>
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
        </div>
      </section>

      {/* --- GALERÍA PREMIUM --- */}
      <section id="galería" className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Galería</h2>
            <p className="text-stone-600 text-lg">Descubre nuestro espacio, nuestra terraza y nuestros platos</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              { id: 1, name: "Nuestra Terraza Jardín" },
              { id: 2, name: "Entraña a la Plancha" },
              { id: 3, name: "Ambiente Acogedor" },
              { id: 4, name: "Cócteles de Autor" },
              { id: 5, name: "Detalle de Decoración" },
              { id: 6, name: "Postres Caseros" }
            ].map((img) => (
              <div key={img.id} className="relative aspect-square group overflow-hidden rounded-sm shadow-md cursor-pointer">
                <Image 
                  src={`/img/galeria-${img.id}.webp`} 
                  alt={img.name} 
                  fill 
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end justify-start p-6">
                  <span className="text-white font-serif font-bold text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    {img.name}
                  </span>
                </div>
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

      {/* --- RESEÑAS PREMIUM --- */}
      <section id="reseñas" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Reseñas</h2>
            <p className="text-stone-600 text-lg">Lo que dicen nuestros clientes</p>
            <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl mt-4">
              ★★★★★ <span className="text-stone-700 text-base font-normal ml-2">4.3 (819 reseñas verificadas)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Andrea Cayetano", role: "Local Guide", text: "Bar-restaurante con un interior pequeñito pero acogedor y una gran terraza rodeada de jardines. El servicio es atento y la comida casera.", time: "Hace 4 años" },
              { name: "Miguel B.", role: "Local Guide", text: "Buen menú de fin de semana. La terraza es una maravilla, se está súper agusto. La comida estuvo todo bastante buena y cantidad normal.", time: "Hace 3 años" },
              { name: "Pedro Aguado", role: "Local Guide", text: "Muy agradable y buen servicio. Nos pusieron un aperitivo con gominolas que es muy de agradecer. Tienen una terraza bastante grande al aire libre.", time: "Hace 9 meses" }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#fdfbf7] p-8 rounded-sm shadow-md border-l-4 border-amber-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-800 text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{review.name}</h4>
                    <p className="text-xs text-stone-500">{review.role}</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-sm mb-3">★★★★★</div>
                <p className="text-stone-700 italic leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-xs text-stone-500">{review.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UBICACIÓN & CONTACTO COMPLETO --- */}
      <section id="ubicación" className="py-24 bg-[#fdfbf7] border-t border-stone-200">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Ubicación & Contacto</h2>
            
            <div className="bg-white p-8 rounded-sm shadow-md mb-8 border border-stone-100">
              <h3 className="font-bold text-xl mb-4 font-serif flex items-center gap-2">📍 Dirección</h3>
              <p className="text-stone-600 text-lg mb-4">C. de Sierra Toledana, 4<br/>Puente de Vallecas, 28038 Madrid</p>
              <a href="https://maps.google.com/?q=C.+de+Sierra+Toledana,+4,+Madrid" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline inline-flex items-center gap-2">
                Abrir en Google Maps →
              </a>
            </div>

            <div className="space-y-6 mb-12">
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

            <div>
              <h3 className="font-bold text-xl mb-4 font-serif">Síguenos en Redes</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition shadow-sm">📷</a>
                <a href="https://facebook.com/restartcafe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition shadow-sm">📘</a>
                <a href="https://wa.me/34910712322" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl hover:bg-amber-100 hover:text-amber-700 transition shadow-sm">💬</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] bg-stone-200 rounded-sm overflow-hidden shadow-lg border border-stone-200">
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
      </section>

      {/* --- FOOTER PROFESIONAL --- */}
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
              <li><Link href="#menú" className="hover:text-amber-500 transition">Menú del Día</Link></li>
              <li><Link href="#carta" className="hover:text-amber-500 transition">Carta</Link></li>
              <li><Link href="#reservas" className="hover:text-amber-500 transition">Reservas</Link></li>
              <li><Link href="#galería" className="hover:text-amber-500 transition">Galería</Link></li>
              <li><Link href="#ubicación" className="hover:text-amber-500 transition">Ubicación</Link></li>
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