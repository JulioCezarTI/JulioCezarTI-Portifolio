import { Code2, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Código limpo, organizado e bem documentado",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Soluções otimizadas e eficientes",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação clara",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com 16 anos, sou um desenvolvedor de sistemas apaixonado por tecnologia e
                inovação. Minha jornada no desenvolvimento começou pela curiosidade de entender
                como as coisas funcionam, e hoje me dedico a criar soluções que fazem a diferença.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especializado em desenvolvimento full-stack, busco sempre aprender novas
                tecnologias e boas práticas. Meu foco está em escrever código limpo,
                escalável e que resolva problemas reais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Além do código, valorizo muito o trabalho em equipe, a comunicação clara e o
                aprendizado contínuo. Estou sempre em busca de novos desafios que me permitam
                crescer profissionalmente.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all duration-300 card-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
