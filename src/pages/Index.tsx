import { MessageCircle, Instagram, ExternalLink, Briefcase, Calculator, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoldenParticles } from "@/components/GoldenParticles";
import logo from "@/assets/logo-valentinas-new.svg";

const links = [
  {
    title: "Acessar Plataforma",
    url: "https://valentinasresolve.com.br/",
    variant: "primary" as const,
    size: "default" as const,
    icon: Home,
  },
  {
    title: "Quero contratar um profissional",
    url: "https://www.valentinasresolve.com.br/contratar-servico",
    variant: "primary" as const,
    size: "default" as const,
    icon: ExternalLink,
  },
  {
    title: "Quero trabalhar na Valentina's",
    url: "https://www.valentinasresolve.com.br/trabalhe-conosco",
    variant: "primary" as const,
    size: "default" as const,
    icon: Briefcase,
  },
  {
    title: "Contabilidade Integrada",
    url: "https://www.valentinasresolve.com.br/contabilidade",
    variant: "primary" as const,
    size: "default" as const,
    icon: Calculator,
  },
  {
    title: "Contato",
    url: "https://www.valentinasresolve.com.br/contato",
    variant: "primary" as const,
    size: "default" as const,
    icon: Mail,
  },
];

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://www.valentinasresolve.com.br/contabilidade",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/valentinasresolve.brasil/",
    icon: Instagram,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 relative">
      <GoldenParticles />
      <div className="w-full max-w-xl relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-12 animate-scale-in">
          <img 
            src={logo} 
            alt="Valentina's Resolve Logo" 
            className="h-28 sm:h-36 w-auto mx-auto logo-glow-effect"
          />
          <p className="text-lg sm:text-xl mt-10 animate-fade-in-up font-light tracking-wide" style={{ animationDelay: "0.3s", opacity: 0, color: "#ffffff" }}>
            Serviços que conectam, resultados que transformam.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in-up golden-glow-hover"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <Button
                  variant={link.variant}
                  size={link.size}
                  className="w-full shine-effect"
                  asChild
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{link.title}</span>
                  </div>
                </Button>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            © 2024 Valentina's Resolve. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
