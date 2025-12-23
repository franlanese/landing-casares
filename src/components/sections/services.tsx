import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale, ShieldCheck, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Scale className="h-10 w-10 text-primary" />,
    title: "Preparación de Impuestos",
    description: "Maximice sus deducciones y asegure el cumplimiento con las últimas regulaciones fiscales de AFIP.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Auditoría y Aseguramiento",
    description: "Servicios de auditoría exhaustivos para garantizar la precisión de sus estados financieros y la confianza de los inversores.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Planificación Financiera",
    description: "Estrategias personalizadas para el crecimiento financiero, la gestión patrimonial y la planificación de la jubilación.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un abanico completo de servicios contables para satisfacer sus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                {service.icon}
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
