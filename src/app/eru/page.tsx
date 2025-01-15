"use client"
import Image from "next/image";
import Quiz from "@/components/quiz";
import { questions } from "../data/eru";

export default function Eru() {
  return (
    <>
  <h1 className="text-2xl font-bold text-center text-white py-4">Eru</h1>
  <Image src="/eru.jpg" alt="Logo" width={200} height={100} className="mx-auto p-4 border rounded-full" />
  <Quiz questions={questions} />;
    </>
  );
}