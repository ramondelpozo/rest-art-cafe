'use client'; // Necesario para usar useSearchParams
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function CartaPage() {
  const searchParams = useSearchParams();
  const mesa = searchParams.get('mesa');
  
  // Estado simple para simular categorías
  const [activeCategory, setActiveCategory] = useState('carnes');

  const categories = [
    { id: 'patatas', name: 'De Patatas', icon: '🍟' },
    { id: 'carnes', name: 'Carnes', icon: '🥩' },
    { id: 'vinos', name: 'Vinos', icon: '🍷' },
    { id: 'cervezas', name: 'Cervezas', icon: '🍺' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'combinados', name: 'Combinados', icon: '🍸' },
  ];

  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      {/* Header Carta */}
      <div className="bg-stone-900 text-white p-6 sticky top-0 z-20 shadow-lg">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-bold flex items-center gap-2">
            ← Volver
          </Link>
          <div className="text-right">
            <h1 className="text-xl font-bold">La Carta</h1>
            {mesa && <span className="text-xs text-amber-500 font-mono bg-amber-900/30 px-2 py-1 rounded">Mesa {mesa}</span>}
          </div>
        </div>
      </div>

      {/* Navegación Categorías */}
      <div className="bg-white border-b border-stone-200 sticky top-[88px] z-10 overflow-x-auto no-scrollbar">
        <div className="max-w-2xl mx-auto flex p-2 gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition whitespace-nowrap ${
                activeCategory === cat.id 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido Carta */}
      <div className="max-w-2xl mx-auto p-4 mt-4 space-y-8">
        
        {/* Sección De Patatas */}
        {(activeCategory === 'patatas' || activeCategory === 'all') && (
          <section id="patatas" className="scroll-mt-40">
            <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              🍟 De Patatas
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <MenuItem name="Sartén de Huevos camperos" desc="Huevos camperos, jamón ibérico" price="13,50€" />
              <MenuItem name="Sartén de Huevos camperos (Trufa)" desc="Lascas de queso parmiggiano, trufa blanca" price="13,50€" />
              <MenuItem name="Patatas Bravas" desc="Nuestra salsa especial" price="7,50€" />
              <MenuItem name="Patatas Rancheras" desc="Bacon, triple queso fundido, salsa ranchera" price="13,50€" />
            </div>
          </section>
        )}

        {/* Sección Carnes */}
        {(activeCategory === 'carnes' || activeCategory === 'all') && (
          <section id="carnes" className="scroll-mt-40">
            <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              🥩 Carnes
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <MenuItem name="Medallones de solomillo" desc="Queso cheddar, cebolla caramelizada, crema de P.X." price="12,80€" />
              <MenuItem name="Lomo madurado de vaca" desc="A la plancha (350 gr. apx.)" price="25,50€" />
              <MenuItem name="Cachopo asturiano" desc="Aprox 300gr" price="16,50€" />
            </div>
          </section>
        )}

        {/* Sección Vinos */}
        {(activeCategory === 'vinos' || activeCategory === 'all') && (
          <section id="vinos" className="scroll-mt-40">
            <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              🍷 Vinos
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <MenuItem name="CARRAMIMBRE" desc="D.O. Ribera del Duero" price="3,50€" />
              <MenuItem name="SECTUM" desc="Rioja Crianza" price="3,50€" />
              <MenuItem name="RUEDA" desc="Castillo de Berisa" price="3,20€" />
              <MenuItem name="ALBARIÑO RÍAS BAIXAS" desc="Alvinte" price="3,80€" />
              <MenuItem name="TINTO DE VERANO" desc="Hecho en casa con Rioja, vermut y Fanta de limón" price="3,80€" />
            </div>
          </section>
        )}

         {/* Sección Cervezas */}
         {(activeCategory === 'cervezas' || activeCategory === 'all') && (
          <section id="cervezas" className="scroll-mt-40">
            <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              🍺 Cervezas
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <MenuItem name="ÁMBAR ESPECIAL (Copa)" desc="Cerveza de barril - 5,2% alc." price="3,20€" />
              <MenuItem name="MAHOU 5 ESTRELLAS" desc="Botella 1/3" price="3,50€" />
              <MenuItem name="ÁMBAR RADLER" desc="Botella 1/3" price="3,20€" />
              <MenuItem name="ÁMBAR TOSTADA 0.0" desc="Botella 1/3 (Sin Alcohol)" price="3,50€" />
              <MenuItem name="Jarra de cerveza ÁMBAR" desc="" price="4,50€" />
              <MenuItem name="ALHAMBRA 1925" desc="" price="3,50€" />
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

// Componente auxiliar para cada plato
function MenuItem({ name, desc, price }: { name: string, desc: string, price: string }) {
  return (
    <div className="flex justify-between items-start p-4 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition">
      <div className="pr-4">
        <h3 className="font-bold text-stone-900">{name}</h3>
        {desc && <p className="text-stone-500 text-sm mt-1 leading-tight">{desc}</p>}
      </div>
      <span className="font-bold text-amber-700 whitespace-nowrap">{price}</span>
    </div>
  );
}