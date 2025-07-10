import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Clock, Heart } from "lucide-react";
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
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                <span className="text-destructive">Emagreça</span>{" "}
                <span className="text-primary">Sem Radicalismo:</span>{" "}
                Descubra o Segredo de Mulheres 30+ que{" "}
                <span className="text-accent">Pararam de Sofrer</span> com Dietas.
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Você não precisa cortar tudo. Só precisa saber a{" "}
                <span className="text-primary font-semibold">hora certa:</span>{" "}
                depois das 18h, seu corpo decide seu destino.
              </p>
            </div>

            {/* Pain + Solution Block */}
            <Card className="p-6 bg-card/50 border-l-4 border-l-accent shadow-lg">
              <p className="text-lg text-card-foreground leading-relaxed">
                <span className="text-destructive font-semibold">
                  Você já tentou mil dietas.
                </span>{" "}
                Algumas funcionaram... por uma semana. O problema não é você.{" "}
                <span className="text-primary font-semibold">É o método.</span>{" "}
                A filosofia do 1% melhor é diferente:{" "}
                <span className="text-accent font-semibold">
                  sem pressão, sem neurose.
                </span>
              </p>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-success/10 p-4 rounded-lg">
                <Check className="text-success" size={20} />
                <span className="text-sm font-medium">Sem Radicalismos</span>
              </div>
              <div className="flex items-center space-x-3 bg-primary/10 p-4 rounded-lg">
                <Clock className="text-primary" size={20} />
                <span className="text-sm font-medium">Após as 18h</span>
              </div>
              <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                <Heart className="text-accent" size={20} />
                <span className="text-sm font-medium">1% Melhor</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <p className="text-xl font-semibold text-primary">
                Comece HOJE com o que você tem. Um clique. Um capítulo. Uma mudança de mentalidade.
              </p>
              <Button variant="hero" size="lg" className="w-full md:w-auto">
                Transformar Minha Vida Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Sem compromisso inicial • ✓ Resultados em 7 dias • ✓ Garantia total
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mulher confiante e saudável"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating testimonial */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-background shadow-xl border-l-4 border-l-accent max-w-xs">
              <p className="text-sm font-medium text-card-foreground">
                "Perdi 8kg em 2 meses sem passar fome. O segredo estava na hora!"
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                - Maria, 34 anos
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-6">
            Mais de 10.000 mulheres já transformaram suas vidas
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">⭐⭐⭐⭐⭐</div>
            <span className="text-lg font-semibold">4.9/5 estrelas</span>
            <span className="text-sm text-muted-foreground">
              baseado em 2.847 avaliações
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};