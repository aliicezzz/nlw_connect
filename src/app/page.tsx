import { ArrowRight } from "lucide-react"; // Importa o ícone ArrowRight da biblioteca lucide-react
import { Button } from "@/components/button";// Importa o componente Button do diretório "@/components/button"
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
      <ArrowRight />
      </Button>
      
      <IconButton>
      <ArrowRight />
      </IconButton>
      
    </main>
  );
}
