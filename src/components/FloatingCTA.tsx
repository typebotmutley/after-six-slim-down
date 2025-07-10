import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  return (
    <Button 
      variant="destructive" 
      className="fixed bottom-4 right-4 z-50 shadow-2xl animate-pulse hover:animate-none transition-all duration-300 text-sm font-bold px-4 py-3"
    >
      Começar Agora – Vagas Limitadas
    </Button>
  );
};