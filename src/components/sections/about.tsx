import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    id: "team-member-1",
    name: "Dr. Juan Pérez",
    title: "Contador Público, Socio Fundador",
    bio: "Con más de 20 años de experiencia, Juan se especializa en derecho tributario y planificación fiscal para grandes empresas.",
    initials: "JP",
  },
  {
    id: "team-member-2",
    name: "Lic. María García",
    title: "Contadora Pública, Socia",
    bio: "María lidera nuestro departamento de auditoría, con una vasta experiencia en normas internacionales de información financiera (NIIF).",
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Conozca a Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesionales dedicados y con la experiencia para guiarlo hacia el éxito financiero.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.id);
            return (
              <Card key={member.name} className="text-center border-0 shadow-none">
                <CardHeader className="items-center p-0">
                  <Avatar className="w-32 h-32 mb-4">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={`Retrato de ${member.name}`} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm text-accent font-semibold">{member.title}</p>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
