import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import { Highlighter } from "@/components/ui/highlighter"
import { GraduationCap } from 'lucide-react';
import Image from "next/image";
import Reveal from '@/components/ui/Reveal';


export default function LineUp() {

  return (

    <section className="flex gap-16 md:gap-24 w-full justify-center items-center px-6 flex-col md:p-0 md:flex-row">

      <div className="flex flex-col  md:w-120 h-full items-center md:items-start gap-4 md:gap-8 justify-end">
        <Reveal>
          <div className="bg-gray-200 w-80 md:w-120 h-60 rounded-md relative overflow-hidden">
            <Image
              src="/foto.jpg"
              alt=""
              className="object-cover object-[50%_15%]"
              fill
            />
          </div>
        </Reveal>
       
        <Reveal><h1 className="text-4xl md:text-2xl">Sobre mim:</h1></Reveal> 
        <Reveal>
          <p className="text-sm text-justify leading-relaxed relative">
            Estudante de <Highlighter action="underline" color="#FF9800">Relações Públicas na FECAP,</Highlighter>   atualmente
            no segundo ano de graduação. Durante minha trajetória
            acadêmica, venho buscando o constante aprendizado e
            a exploração de áreas da comunicação, a fim de
            desenvolver um olhar estratégico, criativo e inovador,
            focado nos públicos. Meu objetivo é crescer
            profissionalmente, contribuindo em projetos que gerem
            impacto e resultados significativos para a organização.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center md:items-start">
        <div className="flex">
          <h1 className="text-4xl md:text-5xl">Educação</h1>
          <GraduationCap size={40}  className="rotate-30"/>
        </div>
        
        <Reveal><Experience1></Experience1></Reveal>
        <Reveal><Experience2></Experience2></Reveal>
        <Reveal><Experience3></Experience3></Reveal>
      </div>

    </section>
  );
}