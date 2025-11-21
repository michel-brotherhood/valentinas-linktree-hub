import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-valentinas.svg";

const links = [
  {
    title: "Acessar Plataforma",
    url: "https://valentinasresolve.com.br/",
    variant: "primary" as const,
  },
  {
    title: "Quero contratar um profissional",
    url: "https://www.valentinasresolve.com.br/contratar-servico",
    variant: "primary" as const,
  },
  {
    title: "Quero trabalhar na Valentina's",
    url: "https://www.valentinasresolve.com.br/trabalhe-conosco",
    variant: "primary" as const,
  },
  {
    title: "Contabilidade Integrada",
    url: "https://www.valentinasresolve.com.br/contabilidade",
    variant: "primary" as const,
  },
  {
    title: "Contato",
    url: "https://www.valentinasresolve.com.br/contato",
    variant: "primary" as const,
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
          {links.map((link, index) => (
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
                className="w-full h-auto py-4 sm:py-5 px-6 text-base sm:text-lg font-semibold"
                asChild
              >
                <div className="flex items-center justify-center">
                  <span>{link.title}</span>
                </div>
              </Button>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <div className="flex justify-center gap-6 mb-6">
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
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Valentina's Resolve. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
