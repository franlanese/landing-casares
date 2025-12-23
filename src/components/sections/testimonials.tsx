'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        quote: "El equipo de Contador Argentino transformó nuestra gestión financiera. Su profesionalismo y conocimiento son invaluables. Altamente recomendados.",
        name: "Ana S.",
        company: "CEO de TechStark S.A."
    },
    {
        quote: "Como monotributista, la liquidación de impuestos siempre fue un dolor de cabeza. Gracias a ellos, ahora es un proceso simple y transparente.",
        name: "Marcos G.",
        company: "Diseñador Gráfico Freelance"
    },
    {
        quote: "La auditoría que realizaron nos dio la tranquilidad que necesitábamos para buscar una nueva ronda de inversión. Impecables en cada detalle.",
        name: "Lucía F.",
        company: "CFO de InnoVentures"
    },
    {
        quote: "No solo manejan nuestra contabilidad, sino que también nos asesoran estratégicamente. Son verdaderos socios de nuestro negocio.",
        name: "Diego M.",
        company: "Gerente de Logística Sur"
    }
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La confianza y los resultados hablan por sí solos.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm bg-card">
                    <CardContent className="flex flex-col items-start gap-4 p-6">
                      <p className="text-lg italic text-foreground">"{testimonial.quote}"</p>
                      <div className="mt-4 text-right w-full">
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
