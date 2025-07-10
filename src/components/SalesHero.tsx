import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, X, Clock, Brain, Smartphone, Dumbbell, Star } from "lucide-react";
import heroImage from "@/assets/transformation-real.jpg";
import { CountdownTimer } from "./CountdownTimer";
import { FloatingCTA } from "./FloatingCTA";

export const SalesHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Header with App Name */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
            Yes! You Can Eat
          </h2>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground font-black block sm:inline">Você Já Tentou De Tudo.</span>{" "}
                <span className="text-primary font-black block sm:inline">Agora é Hora De Emagrecer Sem Sofrimento.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                Descubra o método silencioso que mais de{" "}
                <span className="text-primary font-semibold">10.000 mulheres 30+</span>{" "}
                usaram pra secar sem dietas radicais — só controlando o{" "}
                <span className="text-accent font-semibold">horário certo</span> de comer carboidrato.
              </p>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-h-[48px]">
                <span className="block sm:inline">Quero Emagrecer Sem Sofrimento –</span>
                <span className="block sm:inline sm:ml-1">Começar Agora</span>
                <ArrowRight className="ml-2 flex-shrink-0" size={20} />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Transformação real de mulher que emagreceu"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Legenda abaixo da imagem */}
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 font-medium px-2">
              Transformação real com o método das 18h – sem dietas extremas, sem academia obrigatória.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 px-2">
            Elas Conseguiram. <span className="text-primary">Você Também Pode.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="p-4 sm:p-6 bg-background shadow-lg border-l-4 border-l-primary">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-4">
                "Achei que era mais uma promessa furada. Em 2 semanas meu inchaço sumiu, em 2 meses: -8kg. Sem cortar comida, só mudei a hora."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xs sm:text-sm">C</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                  Camila, 39 anos
                </p>
              </div>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-background shadow-lg border-l-4 border-l-accent">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-4">
                "Perdi 8kg em 2 meses sem passar fome. O segredo estava na hora!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xs sm:text-sm">M</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                  Maria, 34 anos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 px-2">
            O Que Você Vai Encontrar no App
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-destructive/10 p-4 sm:p-6 rounded-lg">
              <X className="text-destructive mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Chega de dietas que te culpam</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 bg-primary/10 p-4 sm:p-6 rounded-lg">
              <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">O Segredo: corte seletivo após as 18h</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 bg-accent/10 p-4 sm:p-6 rounded-lg">
              <Smartphone className="text-accent mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Capítulos simples e cardápios realistas</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 bg-success/10 p-4 sm:p-6 rounded-lg">
              <Dumbbell className="text-success mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Exercícios que cabem até no banho</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 bg-warning/10 p-4 sm:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
              <Brain className="text-warning mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Mindset para vencer sabotagens internas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Comece com <span className="text-primary">1% Hoje</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Não precisa de força sobre-humana. Só precisa de um clique.
          </p>
          
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mb-6 max-w-md mx-auto">
            Transformar Minha Vida Agora
            <ArrowRight className="ml-2 flex-shrink-0" size={20} />
          </Button>
          
          <div className="max-w-md mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 px-2">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">
                Funciona pra qualquer idade?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Sim. Ideal para mulheres 30+, mas funciona para qualquer idade.
              </p>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">
                Preciso cortar tudo depois das 18h?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Não. Só os carboidratos — você continua comendo bem.
              </p>
            </Card>
            
            <Card className="p-4 sm:p-6 bg-background shadow-sm">
              <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">
                Tem que fazer exercício?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Só se quiser. Até atividade leve já ajuda, tipo movimentos no banho.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Botão CTA Flutuante */}
      <FloatingCTA />
    </div>
  );
};