import { ReactNode } from "react"; // Importa o tipo ReactNode do React

// Define a interface para as propriedades do componente IconButton
interface IconButtonProps {
  children: ReactNode; // children representa o conteúdo interno do botão (pode ser um texto, ícone, etc.)
}

// Define um componente funcional chamado Button que recebe propriedades do tipo ButtonProps
export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="
    p-1.5                                  /* Adiciona um pequeno padding interno */
    bg-gray-500 text-blue              /* Define a cor de fundo e a cor do texto */
    rounded-md                             /* Borda levemente arredondada */
    cursor-pointer                         /* Altera o cursor ao passar sobre o botão */
    transition-colors duration-300         /* Transição suave ao mudar de cor */
    hover:bg-blue hover:text-gray-900  /* Altera as cores ao passar o mouse */
  "
    >
      {props.children} {/* Renderiza o conteúdo passado como filho do botão */}
    </button>
  );
}
