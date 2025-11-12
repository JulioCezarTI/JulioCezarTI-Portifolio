import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "juliocezinha429@gmail.com",
      link: "mailto:juliocezinha429@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/JulioCezarTI",
      link: "https://github.com/JulioCezarTI",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/júlio-cezaar-rodrigues-pimentel",
      link: "https://www.linkedin.com/in/júlio-cezaar-rodrigues-pimentel-659568398/",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos
              conversar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 card-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <a
                    href={method.link}
                    target={method.link.startsWith("http") ? "_blank" : undefined}
                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                      <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border card-glow animate-fade-in">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">Vamos trabalhar juntos?</h3>
              <p className="text-muted-foreground">
                Se você está procurando um desenvolvedor dedicado e apaixonado por
                tecnologia, adoraria conversar sobre como posso contribuir para o seu projeto.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 animate-glow-pulse"
                asChild
              >
                <a href="mailto:juliocezinha429@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
