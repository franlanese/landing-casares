import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Networking() {
    return (
        <section id="networking" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 md:mb-0">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">
                            Casares Connect
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Acceda a nuestra plataforma exclusiva para clientes y aliados estratégicos.
                            Una herramienta diseñada para potenciar sus conexiones comerciales y facilitar
                            el intercambio de oportunidades en tiempo real.
                        </p>
                        <div className="pt-4">
                            <Button asChild size="lg" className="gap-2">
                                <Link href="https://casares-consultores.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    Pruebalo ahora  <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual element or decoration */}
                    <div className="flex-1 w-full max-w-md relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
                        <div className="bg-background border rounded-2xl p-8 shadow-xl">
                            <div className="space-y-4">
                                <div className="h-2 w-1/3 bg-muted rounded animate-pulse" />
                                <div className="h-2 w-2/3 bg-muted rounded animate-pulse" />
                                <div className="h-2 w-full bg-muted rounded animate-pulse" />
                                <div className="h-2 w-full bg-muted rounded animate-pulse" />
                                <div className="h-2 w-3/4 bg-muted rounded animate-pulse" />
                            </div>
                            <div className="mt-8 flex justify-end">
                                <div className="h-8 w-24 bg-primary/20 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
