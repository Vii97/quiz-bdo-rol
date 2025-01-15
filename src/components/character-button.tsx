import React from 'react';

type CharacterButtonProps = {
  item: {
    text: string;
    correct: boolean;
  };
  onClick: () => void;
  isSelected: boolean; // Si esta opción está seleccionada
};

const CharacterButton: React.FC<CharacterButtonProps> = ({ item, onClick, isSelected }) => {
  // Estilos base del botón
  let buttonClass = "w-full py-3 px-4 rounded-lg shadow-md text-left transition-colors duration-300";

  // Si el botón está seleccionado, solo aplica las clases de seleccionado sin hover
  if (isSelected) {
    buttonClass += "bg-black text-white"; // Estilo fijo cuando está seleccionado
  } else {
    // Cuando no está seleccionado, aplica el color normal y el hover
    buttonClass += "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300";
  }

  // Renderizamos el botón
  return (
    <button onClick={onClick} className={buttonClass}>
      {item.text}
    </button>
  );
};

export default CharacterButton;