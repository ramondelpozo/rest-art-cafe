import Link from 'next/link';

export default function MapaSitio() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-sm shadow-md">
        <h1 className="text-3xl font-serif font-bold mb-6">Mapa del Sitio</h1>
        <ul className="space-y-3 text-lg">
          <li><Link href="/" className="text-amber-700 hover:underline">→ Inicio</Link></li>
          <li><Link href="/#menu-diario" className="text-amber-700 hover:underline">→ Menú del Día</Link></li>
          <li><Link href="/carta" className="text-amber-700 hover:underline">→ Carta Digital</Link></li>
          <li><Link href="/#reservas" className="text-amber-700 hover:underline">→ Reservas</Link></li>
          <li><Link href="/#galeria" className="text-amber-700 hover:underline">→ Galería</Link></li>
          <li><Link href="/#ubicacion" className="text-amber-700 hover:underline">→ Ubicación</Link></li>
          <li><Link href="/aviso-legal" className="text-amber-700 hover:underline">→ Aviso Legal</Link></li>
          <li><Link href="/privacidad" className="text-amber-700 hover:underline">→ Política de Privacidad</Link></li>
          <li><Link href="/cookies" className="text-amber-700 hover:underline">→ Política de Cookies</Link></li>
        </ul>
      </div>
    </main>
  );
}