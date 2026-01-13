'use client';

import * as React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function ConnextSlideshow() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    const slides = [
        {
            id: 1,
            content: "Panel de Control",
            description: "Vista general de sus servicios y estado de cuenta.",
            image: "/screenshot1.jpg"
        },
        {
            id: 2,
            content: "Gestión de Documentos",
            description: "Acceso seguro a sus declaraciones y comprobantes.",
            image: "/screenshot2.jpg"
        },
        {
            id: 3,
            content: "Comunicación Directa",
            description: "Canal exclusivo para consultas con su contador.",
            image: "/screenshot3.jpg"
        }
    ];

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-[280px] sm:max-w-xs"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="shadow-lg border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                                    <CardContent className="p-2">
                                        <img src={slide.image} alt={slide.content} className="w-full h-auto object-cover rounded-lg" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 sm:-left-16" />
                <CarouselNext className="-right-12 sm:-right-16" />
            </Carousel>
        </div>
    );
}
