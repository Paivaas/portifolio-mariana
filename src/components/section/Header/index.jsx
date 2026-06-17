'use client';
import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation"
import { SparklesText } from "@/components/ui/sparkles-text"

export default function Header() {
  return (
    <div className="flex flex-col w-full gap-24 justify-between items-center">
      <nav className="w-full h-8">
        <ul className="flex w-full h-full justify-center gap-2 md:gap-24 items-center text-xs">
          <li><a href="#">Página inicial</a></li>
          <li><a href="#">Sobre</a></li>
          <li className="font-semibold"><a href="#">Bem vindo(a) ao meu</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
        <div className="flex justify-end items-end md:gap-4">
             <div className="w-18 md:w-fit h-fit left-6 bottom-10 md:left-0 md:bottom-0 relative"><Image src="/megaphone.png"  alt="" width={126} height={136}/></div>
            <div className="flex flex-col justify-end items-end">
              <TypingAnimation className="font-semibold text-5xl md:text-9xl"> Portifólio.</TypingAnimation>
              <SparklesText colors={{ first: '#F4CE61', second: '#DE9FC1' }} className="font-semibold text-sm md:text-2xl" >Mariana Alves de Souza</SparklesText>
             
            </div>
            <div className="w-18 md:w-fit h-fit rotate-12"><Image src="/lamp.png" alt="" width={120} height={236}/></div>
        </div>
    </div>
  );
}
