import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description:
        "Plataforma completa para gestão de empresas com dashboard interativo, controle de estoque e relatórios em tempo real.",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Moderno",
      description:
        "Loja virtual com carrinho de compras, integração de pagamento, painel administrativo e sistema de avaliações.",
      tags: ["Next.js", "Stripe", "Tailwind", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "App de Produtividade",
      description:
        "Aplicação para gestão de tarefas e projetos com sistema de notificações, colaboração em equipe e analytics.",
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      github: "#",
      demo: "#",
    },
    {
      title: "API RESTful Escalável",
      description:
        "API robusta com autenticação JWT, documentação automática, rate limiting e testes automatizados.",
      tags: ["Node.js", "Express", "MongoDB", "Jest"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Painel de análise de dados com gráficos interativos, filtros avançados e exportação de relatórios.",
      tags: ["React", "Chart.js", "TypeScript", "Redis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Sistema de Blog",
      description:
        "Plataforma de blogs com editor markdown, sistema de comentários, busca avançada e SEO otimizado.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "MDX"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e
              experiência em diferentes tecnologias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 card-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
