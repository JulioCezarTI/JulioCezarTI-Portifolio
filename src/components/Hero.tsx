import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import codeBackground from "@/assets/code-background.jpg";
import { useGitHubData } from "@/hooks/useGitHubData";

const Hero = () => {
  const { data: githubData } = useGitHubData();
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor de Sistemas";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(${codeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-lg tracking-wider uppercase">
              Olá, eu sou
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Júlio Cezar Rodrigues
              <span className="text-gradient glow-red"> Pimentel</span>
            </h1>
            <div className="h-12 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                {text}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>
                  |
                </span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {githubData?.profile.bio || "16 anos, apaixonado por tecnologia e desenvolvimento. Especializado em criar soluções inovadoras e eficientes que transformam ideias em realidade."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 animate-glow-pulse"
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              Entre em Contato
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-4">
            <a
              href={githubData?.profile.html_url || "https://github.com/JulioCezarTI"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/juliocezar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:juliocezar.dev@email.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
