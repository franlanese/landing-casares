import { Mountain } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-primary">Contador Argentino</span>
          </Link>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Contador Argentino. Todos los derechos reservados.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground">Servicios</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground">Sobre Nosotros</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Contacto</h4>
          <address className="not-italic text-muted-foreground space-y-1">
            <p>Av. Corrientes 1234, CABA, Argentina</p>
            <p>(011) 4567-8901</p>
            <p>contacto@contadorargentino.com.ar</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
