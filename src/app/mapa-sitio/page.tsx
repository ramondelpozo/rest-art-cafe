import Link from 'next/link';

export default function MapaSitio() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] py-24 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-sm shadow-md border-t-4 border-amber-700">
        <h1 className="text-3xl font-serif font-bold mb-8 text-stone-900">Mapa del Sitio</h1>
        <ul className="space-y-4 text-lg">
          <li><Link href="/" className="text-amber-700 hover:underline font-bold">→ Inicio</Link></li>
          <li><Link href="/#menú" className="text-amber-700 hover:underline">→ Menú del Día</Link></li>
          <li><Link href="/carta" className="text-amber-700 hover:underline">→ Carta Digital</Link></li>
          <li><Link href="/#reservas" className="text-amber-700 hover:underline">→ Reservas</Link></li>
          <li><Link href="/#galería" className="text-amber-700 hover:underline">→ Galería</Link></li>
          <li><Link href="/#ubicación" className="text-amber-700 hover:underline">→ Ubicación</Link></li>
          <li><Link href="/aviso-legal" className="text-amber-700 hover:underline">→ Aviso Legal</Link></li>
          <li><Link href="/privacidad" className="text-amber-700 hover:underline">→ Política de Privacidad</Link></li>
          <li><Link href="/cookies" className="text-amber-700 hover:underline">→ Política de Cookies</Link></li>
        </ul>
      </div>
    </main>
  );
}