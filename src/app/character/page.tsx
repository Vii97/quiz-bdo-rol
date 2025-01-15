'use client'

import { useState } from "react";
import { questions } from "../data/character";
import CharacterButton from "@/components/character-button";

export default function CharacterQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [characterScores, setCharacterScores] = useState<Record<string, number>>({
    "Eru": 0,
    "Luth": 0,
    "Akame": 0,
    "Anubis": 0,
  });
  const [finished, setFinished] = useState(false);
  const [tempSelection, setTempSelection] = useState<number>(-1);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (tempSelection === index) {
      // Desmarcar la respuesta si la misma opción es seleccionada nuevamente
      setTempSelection(-1);
    } else {
      // Marcar la nueva selección
      setTempSelection(index);
    }
  };

  const handleNextQuestion = () => {
    if (tempSelection !== -1) {
      // Sumar puntos al personaje seleccionado
      const selectedCharacter = question.answers[tempSelection].char;
      setCharacterScores(prev => ({
        ...prev,
        [selectedCharacter]: prev[selectedCharacter] + 1,
      }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTempSelection(-1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(...Object.values(characterScores));
    return Object.keys(characterScores).find(character => characterScores[character] === maxScore) || "";
  };

  const getCharacterInfo = (character: string) => {
    switch (character) {
      case "Eru":
        return {
          description:
            "Eres como el elfo arquero amante de los aguacates, callado y emocional. Te encanta la naturaleza y descubrir nuevos lugares.",
          imageUrl: "/eru.jpg",
        };
      case "Luth":
        return {
          description:
            "Eres como la elfa de Kamasylvia. Usas tu cabeza tanto para diseñar algo bonito como para ayudar en la defensa de Kamasylvia.",
          imageUrl: "/luth.jpg",
        };
      case "Akame":
        return {
          description:
            "Serás como una sacerdotisa bondadosa, pero luchar contra la oscuridad te hace alguien valiente y letal.",
          imageUrl: "/akame.jpg",
        };
      case "Anubis":
        return {
          description:
            "Eres como un diamante en bruto del desierto. Si lo necesitas no dudas en robar y engañar a los ricos, pero eres amigable.",
          imageUrl: "/anubis.jpg",
        };
      default:
        return { description: "", imageUrl: "" };
    }
  };

  const resultCharacter = getResult();
  const characterInfo = getCharacterInfo(resultCharacter);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">¿A qué personaje te pareces?</h2>
        {finished ? (
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800 mb-4">
              ¡Te pareces a {resultCharacter}!
            </p>
            <p className="text-gray-600 mb-4">{characterInfo.description}</p>
            <img
              src={characterInfo.imageUrl || "/placeholder.svg"}
              alt={resultCharacter}
              className="mx-auto mb-4"
              style={{ maxWidth: "200px", borderRadius: "50%" }}
            />
          </div>
        ) : (
          <>
            <p className="text-lg font-semibold text-gray-700 mb-4 text-center">{question.question}</p>
            <div className="space-y-2">
              {question.answers.map((answer, index) => (
                <CharacterButton
                  key={index}
                  item={{
                    text: answer.text,
                    correct: true, // En este quiz, todas las respuestas son "correctas"
                  }}
                  isSelected={tempSelection === index}
                  onClick={() => handleAnswer(index)}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <button
                onClick={handleNextQuestion}
                className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                disabled={tempSelection === -1}
              >
                {currentQuestion < questions.length - 1 ? "Siguiente" : "Ver resultado"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
