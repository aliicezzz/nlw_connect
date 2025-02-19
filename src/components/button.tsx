import { ReactNode } from "react"; // Importa o tipo ReactNode do React

// Define a interface para as propriedades do componente Button
interface ButtonProps {
  children: ReactNode; // children representa o conteúdo interno do botão (pode ser um texto, ícone, etc.)
}

// Define um componente funcional chamado Button que recebe propriedades do tipo ButtonProps
export function Button(props: ButtonProps) {
  return (
    <button
      className="
    flex justify-between items-center      /* Organiza os elementos dentro do botão */
    px-5 h-12                              /* Define o padding horizontal e altura */
    bg-gray-500 text-blue              /* Define as cores de fundo e do texto */
    font-semibold rounded-xl               /* Deixa o texto mais destacado e arredonda as bordas */
    w-full cursor-pointer                  /* Faz o botão ocupar toda a largura disponível e mudar o cursor ao passar */
    transition-colors duration-300         /* Adiciona uma transição suave nas mudanças de cor */
    hover:bg-blue hover:text-gray-900  /* Altera as cores quando o mouse passa sobre o botão */
    "
    >
      {props.children} {/* Renderiza o conteúdo passado como filho do botão */}
    </button>
  );
}
