import { Card, CardContent } from "@/components/ui/card";
import { useGitHubData } from "@/hooks/useGitHubData";
import { Skeleton } from "@/components/ui/skeleton";

const Skills = () => {
  const { data: githubData, isLoading } = useGitHubData();

  // Mapear linguagens do GitHub para categorias
  const mapLanguageToCategory = (lang: string): string => {
    const frontendLangs = ["JavaScript", "TypeScript", "HTML", "CSS", "Vue", "React", "Svelte"];
    const backendLangs = ["Python", "Java", "Go", "Ruby", "PHP", "C#", "Rust"];
    
    if (frontendLangs.includes(lang)) return "Frontend";
    if (backendLangs.includes(lang)) return "Backend";
    return "Ferramentas";
  };

  // Calcular skills dinamicamente se tivermos dados do GitHub
  const skillCategories = githubData?.topLanguages ? (() => {
    const categories: Record<string, { name: string; level: number }[]> = {
      Frontend: [],
      Backend: [],
      Ferramentas: []
    };

    githubData.topLanguages.forEach((lang) => {
      const category = mapLanguageToCategory(lang.language);
      const level = Math.min(95, 60 + (lang.count * 5)); // Calcular nível baseado no uso
      
      categories[category].push({
        name: lang.language,
        level: level
      });
    });

    return Object.entries(categories)
      .filter(([_, skills]) => skills.length > 0)
      .map(([category, skills]) => ({
        category,
        skills: skills.slice(0, 4) // Máximo 4 por categoria
      }));
  })() : [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "Ferramentas",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Minhas <span className="text-gradient">Skills</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6">
                    <Skeleton className="h-8 w-32 mb-6" />
                    <div className="space-y-4">
                      {[...Array(4)].map((_, j) => (
                        <div key={j}>
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-2 w-full" />
                        </div>
                      ))}
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

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino e utilizo no dia a dia para criar
              soluções incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-card border-border hover:border-primary transition-all duration-300 card-glow animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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

export default Skills;
