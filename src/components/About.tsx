import { Code2, Rocket, Users, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGitHubData } from "@/hooks/useGitHubData";

const About = () => {
  const { data: githubData } = useGitHubData();

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
              {githubData?.profile.bio && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {githubData.profile.bio}
                </p>
              )}
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
              
              {(githubData?.profile.location || githubData?.profile.company) && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {githubData.profile.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{githubData.profile.location}</span>
                    </div>
                  )}
                  {githubData.profile.company && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{githubData.profile.company}</span>
                    </div>
                  )}
                </div>
              )}
              
              {githubData && (
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{githubData.profile.public_repos}</div>
                    <div className="text-sm text-muted-foreground">Repositórios</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{githubData.profile.followers}</div>
                    <div className="text-sm text-muted-foreground">Seguidores</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{githubData.profile.following}</div>
                    <div className="text-sm text-muted-foreground">Seguindo</div>
                  </div>
                </div>
              )}
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
