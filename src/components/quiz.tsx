'use client'

import React, { useState } from "react";
import AnswerButton from "./answer-button";

type Answer = {
  text: string;
  correct: boolean;
};

type Question = {
  question: string;
  answers: Answer[];
};

type QuizProps = {
  questions: Question[];
};

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (!answered) {
      setSelectedAnswerIndex(index);
      setAnswered(true);
      if (question.answers[index].correct) {
        setScore((score) => score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswerIndex(-1);
    } else {
      setFinished(true);
    }
  };


  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {finished ? (
          <p className="text-2xl text-gray-800 font-bold text-center mb-6">
            Tu puntuación es: {score}/{questions.length}
          </p>
        ) : (
          <>
            <p className="text-2xl font-semibold text-center text-gray-800 mb-6">{question.question}</p>
            <div className="space-y-2">
              {question.answers.map((answer, index) => {
                // Controlar las clases según si la pregunta ha sido respondida
                let buttonClass = "w-full py-3 px-4 border border-gray-300 rounded-lg shadow-md text-left transition-colors duration-300";
                // Si la pregunta ya fue respondida, aplicar colores
                if (answered) {
                  if (answer.correct) {
                    buttonClass += " bg-green-500 text-white"; // Correcta: verde
                  } else if (index === selectedAnswerIndex) {
                    buttonClass += " bg-red-500 text-white"; // Incorrecta: roja
                  }
                } else {
                  buttonClass += " text-gray-800 hover:bg-gray-200"; // Hover normal si no se ha respondido
                }
                
                return (
                  <AnswerButton
                    key={index}
                    item={answer}
                    onClick={() => handleAnswer(index)}
                    buttonClass={buttonClass}
                    disabled={answered}
                  />
                );
              })}
            </div>
            {answered && (
              <div className="text-center mt-4">
                <button
                  onClick={handleNextQuestion}
                  className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  {currentQuestion < questions.length - 1 ? "Siguiente" : "Ver resultado"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}