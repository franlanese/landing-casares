'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: "team-member-1",
    name: "Dra. Juana Pérez",
    title: "Contadora Pública, Socia Fundadora",
    bio: "Con más de 15 años de experiencia, Juana se especializa en derecho tributario y planificación fiscal para grandes empresas.",
    initials: "JP",
  },
  {
    id: "team-member-2",
    name: "Lic. Martin García",
    title: "Contador Público, Socio",
    bio: "Martin lidera nuestro departamento de auditoría, con una vasta experiencia en normas internacionales de información financiera (NIIF).",
    initials: "MG",
  },
  {
    id: "team-member-3",
    name: "Lic. Carlos Rodríguez",
    title: "Contador Público, Especialista en Pymes",
    bio: "Carlos es nuestro experto en pequeñas y medianas empresas, ayudándolas a crecer y optimizar su carga impositiva.",
    initials: "CR",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-headline"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Conozca a Nuestro Equipo
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Profesionales dedicados y con la experiencia para guiarlo hacia el éxito financiero.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.id);
            return (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <Card className="text-center border-0 shadow-none h-full">
                  <CardHeader className="items-center p-0">
                    <Avatar className="w-32 h-32 mb-4">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Retrato de ${member.name}`} className="object-cover object-[50%_25%]" data-ai-hint={memberImage.imageHint} />}
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-accent font-semibold">{member.title}</p>
                  </CardHeader>
                  <CardContent className="mt-4 p-0">
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  );
}
