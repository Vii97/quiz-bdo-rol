type AnswerButtonProps = {
    item: {
      text: string;
      correct: boolean;
    };

    onClick: () => void;
    buttonClass: string;  // Clase con los estilos aplicados
    disabled: boolean;    // Propiedad para deshabilitar el botón
  };
  
  const AnswerButton: React.FC<AnswerButtonProps> = ({
    item,
    onClick,
    buttonClass,
    disabled
  }) => {
    return (
      <button
        onClick={disabled ? undefined : onClick} // Deshabilitar el click si se ha respondido
        className={buttonClass}
        disabled={disabled}
      >
        {item.text}
      </button>
    );
  };
  
  export default AnswerButton;