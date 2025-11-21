import { ExternalLink, Users, Briefcase, Calculator, MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-valentinas.svg";

const links = [
  {
    title: "Acessar Plataforma",
    url: "https://valentinasresolve.com.br/",
    icon: ExternalLink,
    variant: "primary" as const,
  },
  {
    title: "Quero contratar um profissional",
    url: "https://www.valentinasresolve.com.br/contratar-servico",
    icon: Users,
    variant: "default" as const,
  },
  {
    title: "Quero trabalhar na Valentina's",
    url: "https://www.valentinasresolve.com.br/trabalhe-conosco",
    icon: Briefcase,
    variant: "default" as const,
  },
  {
    title: "Contabilidade Integrada",
    url: "https://www.valentinasresolve.com.br/contabilidade",
    icon: Calculator,
    variant: "default" as const,
  },
  {
    title: "WhatsApp",
    url: "https://www.valentinasresolve.com.br/contabilidade",
    icon: MessageCircle,
    variant: "secondary" as const,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/valentinasresolve.brasil/",
    icon: Instagram,
    variant: "secondary" as const,
  },
  {
    title: "Contato",
    url: "https://www.valentinasresolve.com.br/contato",
    icon: Mail,
    variant: "secondary" as const,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl">
        {/* Logo Section */}
        <div className="text-center mb-8 sm:mb-12 animate-scale-in">
          <div className="inline-block bg-card rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-soft)] mb-6">
            <img 
              src={logo} 
              alt="Valentina's Resolve Logo" 
              className="h-20 sm:h-28 w-auto mx-auto"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Valentina's Resolve
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Conectando você aos nossos serviços
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <Button
                  variant={link.variant}
                  className="w-full h-auto py-4 sm:py-5 px-6 text-base sm:text-lg font-semibold group hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <span className="text-left">{link.title}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </Button>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 sm:mt-16 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <p>© 2024 Valentina's Resolve. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
