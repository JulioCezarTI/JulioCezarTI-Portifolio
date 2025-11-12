import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { useGitHubData } from "@/hooks/useGitHubData";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const { data: githubData, isLoading } = useGitHubData();

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meus <span className="text-gradient">Projetos</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-20 w-full" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const projects = githubData?.repos || [];

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
              Projetos reais do meu GitHub, demonstrando minhas habilidades e experiência
              em diferentes tecnologias
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado no momento.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={project.name}
                  className="bg-card border-border hover:border-primary transition-all duration-300 card-glow group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                        {project.name.split("-").map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(" ")}
                      </h3>
                      {project.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">{project.stargazers_count}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.language && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">
                          {project.language}
                        </span>
                      )}
                      {project.topics.slice(0, 2).map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                      {project.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          <span>{project.forks_count}</span>
                        </div>
                      )}
                      <span>•</span>
                      <span>
                        Atualizado {new Date(project.updated_at).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
