import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-headline">
            Soluciones Contables Profesionales en Argentina
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Navegue el complejo sistema tributario argentino con confianza. Ofrecemos servicios expertos para individuos y empresas.
          </p>
          <div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 shadow-lg">
              <Link href="#contact">Contáctenos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
