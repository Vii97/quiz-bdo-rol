"use client"
import Image from "next/image";
import Quiz from "@/components/quiz";
import { questions } from "../data/akame";

export default function Akame() {
  return (
    <>
  <h1 className="text-2xl font-bold text-center text-white py-4">Akame</h1>
  <Image src="/akame.jpg" alt="Logo" width={200} height={100} className="mx-auto p-4 border rounded-full" />
  <Quiz questions={questions} />;
    </>
  );
}