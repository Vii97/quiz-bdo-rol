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
  let buttonClass = "w-full py-3 px-4 rounded-lg border border-gray-300 shadow-md text-left transition-colors duration-300";

  // Si el botón está seleccionado, aplica estilos de fondo negro y texto blanco
  if (isSelected) {
    buttonClass = `${buttonClass} bg-black text-white`;  // Se aplica cuando está seleccionado
  } else {
    // Cuando no está seleccionado, el fondo es blanco con hover
    buttonClass = `${buttonClass} bg-white text-gray-900 hover:bg-gray-100`;
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {item.text}
    </button>
  );
};

export default CharacterButton;