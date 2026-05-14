'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, Suspense, useEffect } from 'react';

// Datos de ejemplo (puedes expandirlos)
const MENU_ITEMS = [
  { id: 1, category: 'patatas', name: 'Sartén de Huevos camperos', desc: 'Con jamón ibérico', price: 13.50 },
  { id: 2, category: 'patatas', name: 'Patatas Bravas', desc: 'Salsa especial de la casa', price: 7.50 },
  { id: 3, category: 'carnes', name: 'Medallones de solomillo', desc: 'Queso cheddar y cebolla caramelizada', price: 12.80 },
  { id: 4, category: 'carnes', name: 'Lomo madurado', desc: '350gr aprox', price: 25.50 },
  { id: 5, category: 'vinos', name: 'Carramimbre', desc: 'D.O. Ribera del Duero', price: 3.50 },
  { id: 6, category: 'cervezas', name: 'Ámbar Especial', desc: 'Copa', price: 3.20 },
];

function CartaContent() {
  const searchParams = useSearchParams();
  const mesa = searchParams.get('mesa');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<any[]>([]);

  // Filtrar items
  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Añadir al carrito
  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  // Generar enlace WhatsApp
  const sendOrder = () => {
    if (cart.length === 0) return;
    
    let message = `Hola Rest Art Café 👋\n`;
    if (mesa) message += `📍 *Mesa ${mesa}*\n\n`;
    else message += `📍 *Pedido General*\n\n`;
    
    message += `*Mi Pedido:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.price}€)\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\n💰 *Total estimado: ${total.toFixed(2)}€*`;
    
    const url = `https://wa.me/34910712322?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#fdfbf7] pb-32">
      {/* Header Carta */}
      <div className="bg-stone-900 text-white p-6 sticky top-0 z-30 shadow-lg">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-500 hover:text-white transition font-serif text-xl">← Volver</Link>
          <div className="text-right">
            <h1 className="font-serif text-2xl font-bold">La Carta</h1>
            {mesa && <span className="text-xs text-amber-500 font-mono bg-amber-900/30 px-2 py-1 rounded">MESA {mesa}</span>}
          </div>
        </div>
      </div>

      {/* Categorías Sticky */}
      <div className="bg-white border-b border-stone-200 sticky top-[88px] z-20 overflow-x-auto no-scrollbar shadow-sm">
        <div className="max-w-2xl mx-auto flex p-4 gap-3 min-w-max">
          {['all', 'patatas', 'carnes', 'vinos', 'cervezas'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat ? 'bg-stone-900 text-white shadow-lg' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Platos */}
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-sm shadow-sm border border-stone-100 flex justify-between items-start group hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">{item.name}</h3>
              <p className="text-stone-500 text-sm mt-1 font-light">{item.desc}</p>
              <span className="text-amber-700 font-bold mt-2 block">{item.price.toFixed(2)} €</span>
            </div>
            <button 
              onClick={() => addToCart(item)}
              className="bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            >
              +
            </button>
          </div>
        ))}
      </div>

      {/* Botón Flotante Enviar Pedido */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-0 right-0 px-6 z-40">
          <div className="max-w-2xl mx-auto bg-stone-900 text-white p-4 rounded-sm shadow-2xl flex justify-between items-center">
            <div>
              <span className="block text-xs text-stone-400 uppercase tracking-wider">{cart.length} platos seleccionados</span>
              <span className="font-bold text-lg">{cart.reduce((s, i) => s + i.price, 0).toFixed(2)} €</span>
            </div>
            <button 
              onClick={sendOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Enviar Pedido</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.882 3.309.883h.001c3.181 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.767-5.767-5.767zm12 5.767c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-4.447 3.19c-.237-.119-1.403-.692-1.62-.771-.216-.079-.373-.119-.53.119-.158.238-.613.771-.751.929-.139.158-.277.178-.515.059-.238-.119-1.005-.371-1.913-1.179-.707-.631-1.185-1.41-1.323-1.648-.139-.238-.015-.366.104-.484.108-.107.238-.277.357-.416.119-.139.158-.238.238-.397.079-.158.04-.297-.02-.416-.059-.119-.534-1.283-.731-1.758-.193-.464-.391-.4-.535-.408-.139-.008-.297-.008-.456-.008-.158 0-.416.059-.634.297-.218.238-.831.812-.831 1.981 0 1.169.851 2.298.97 2.457.119.158 1.679 2.564 4.075 3.597.571.247 1.017.394 1.363.504.573.182 1.095.156 1.507.094.461-.069 1.403-.574 1.601-1.129.198-.555.198-1.031.139-1.129-.059-.099-.218-.158-.456-.277z"/></svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function CartaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">Cargando experiencia...</div>}>
      <CartaContent />
    </Suspense>
  );
}