import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "¿Qué necesito para inscribirme como monotributista?",
        answer: "Para inscribirte en el Monotributo, necesitarás tu CUIT, clave fiscal nivel 2 o superior, y definir tu actividad principal, ingresos brutos anuales, y otros parámetros que determinarán tu categoría."
    },
    {
        question: "¿Cómo se realiza la presentación de declaraciones juradas de Ganancias?",
        answer: "La declaración jurada del Impuesto a las Ganancias para personas humanas se presenta anualmente a través del servicio 'Ganancias Personas Humanas - Portal Integrado' en la web de AFIP. Nosotros podemos gestionar todo el proceso."
    },
    {
        question: "¿Ofrecen servicios para empresas en el exterior?",
        answer: "Sí, asesoramos a empresas y particulares sobre convenios de doble imposición, regímenes de información, y estructuración de inversiones internacionales para optimizar la carga fiscal global."
    },
    {
        question: "¿Cuál es la diferencia entre un balance y un estado de resultados?",
        answer: "El balance general es una 'foto' de la situación financiera de la empresa en un momento específico, mostrando activos, pasivos y patrimonio neto. El estado de resultados, en cambio, es una 'película' que muestra los ingresos, costos y gastos durante un período, resultando en una ganancia o pérdida."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respuestas a las dudas más comunes sobre contabilidad en Argentina.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
