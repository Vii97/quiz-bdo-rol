import Image from "next/image";
import Link from "next/link";

// ( mx-auto centra la imagen )
export default function Home() {
  return (
   <div className="bg-black text-white text-center p-10">
    <Image src="/vercel.svg" alt="Logo" width={100} height={100} className="mx-auto p-4" /> 
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-2xl text-white font-bold"> Selecciona tu Quizz </h1>
      <Link href={"/eru"} className="w-full hover:bg-gray-800 rounded-lg p-4 font-semibold text-center transition-colors duration-300">Eru</Link>
      <Link href={"/akame"} className="w-full hover:bg-gray-800 rounded-lg p-4 font-semibold text-center transition-colors duration-300">Akame</Link>
      <Link href={"/anubis"} className="w-full hover:bg-gray-800 rounded-lg p-4 font-semibold text-center transition-colors duration-300">Anubis</Link>
      <Link href={"/luth"} className="w-full hover:bg-gray-800 rounded-lg p-4 font-semibold text-center transition-colors duration-300">Luth</Link>
      <Link href={"/character"}  className="w-full hover:bg-gray-800 rounded-lg p-4 font-semibold text-center transition-colors duration-300">¿A quién te pareces?</Link>
    </div>
   </div>
  );
}
