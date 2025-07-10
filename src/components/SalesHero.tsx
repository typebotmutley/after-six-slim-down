import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, X, Clock, Brain, Smartphone, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-woman-healthy.jpg";

export const SalesHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Header with App Name */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Yes! You Can Eat
          </h2>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                <span className="text-destructive">Você Já Tentou De Tudo.</span>{" "}
                Agora é Hora De{" "}
                <span className="text-primary">Emagrecer Sem Sofrimento.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Descubra o método silencioso que mais de{" "}
                <span className="text-primary font-semibold">10.000 mulheres 30+</span>{" "}
                usaram pra secar sem dietas radicais — só controlando o{" "}
                <span className="text-accent font-semibold">horário certo</span> de comer carboidrato.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full md:w-auto text-lg px-8 py-4">
                Quero Emagrecer Sem Sofrimento – Começar Agora
                <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mulher confiante e saudável"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Elas Conseguiram. <span className="text-primary">Você Também Pode.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-background shadow-lg border-l-4 border-l-primary">
              <p className="text-lg text-card-foreground leading-relaxed mb-4">
                "Achei que era mais uma promessa furada. Em 2 semanas meu inchaço sumiu, em 2 meses: -8kg. Sem cortar comida, só mudei a hora."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                – Camila, 39
              </p>
            </Card>
            
            <Card className="p-6 bg-background shadow-lg border-l-4 border-l-accent">
              <p className="text-lg text-card-foreground leading-relaxed mb-4">
                "Perdi 8kg em 2 meses sem passar fome. O segredo estava na hora!"
              </p>
              <p className="text-sm text-muted-foreground font-semibold">
                – Maria, 34
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            O Que Você Vai Encontrar no App
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4 bg-destructive/10 p-6 rounded-lg">
              <X className="text-destructive mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Chega de dietas que te culpam</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-primary/10 p-6 rounded-lg">
              <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">O Segredo: corte seletivo após as 18h</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-accent/10 p-6 rounded-lg">
              <Smartphone className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Capítulos simples e cardápios realistas</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-success/10 p-6 rounded-lg">
              <Dumbbell className="text-success mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Exercícios que cabem até no banho</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-warning/10 p-6 rounded-lg md:col-span-2 lg:col-span-1">
              <Brain className="text-warning mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mindset para vencer sabotagens internas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comece com <span className="text-primary">1% Hoje</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não precisa de força sobre-humana. Só precisa de um clique.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 mb-6">
            Transformar Minha Vida Agora
            <ArrowRight className="ml-2" size={24} />
          </Button>
          
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-destructive font-semibold flex items-center justify-center">
              ⚠️ Vagas limitadas: acesso antecipado para as primeiras 100 mulheres.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                Funciona pra qualquer idade?
              </h3>
              <p className="text-muted-foreground">
                Sim. Ideal para mulheres 30+, mas funciona para qualquer idade.
              </p>
            </Card>
            
            <Card className="p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                Preciso cortar tudo depois das 18h?
              </h3>
              <p className="text-muted-foreground">
                Não. Só os carboidratos — você continua comendo bem.
              </p>
            </Card>
            
            <Card className="p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                Tem que fazer exercício?
              </h3>
              <p className="text-muted-foreground">
                Só se quiser. Até atividade leve já ajuda, tipo movimentos no banho.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};