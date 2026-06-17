import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import { GraduationCap } from 'lucide-react';


export default function LineUp() {

  return (

    <section className="flex gap-16 md:gap-8 w-full justify-center items-center px-6 flex-col md:p-0 md:flex-row">

      <div className="flex flex-col  md:w-148 h-full items-start gap-4 md:gap-8 justify-end">
        <div className="bg-gray-200 w-80 md:w-120 h-50 rounded-3xl rounded-bl-none "></div>
          <h1 className="">Sobre mim:</h1>
          <p className="text-sm text-justify">Estudante de Relações Públicas na FECAP, atualmente
            no segundo ano de graduação. Durante minha trajetória
            acadêmica, venho buscando o constante apreWndizado e
            a exploração de áreas da comunicação, a fim de
            desenvolver um olhar estratégico, criativo e inovador,
            focado nos públicos. Meu objetivo é crescer
            profissionalmente, contribuindo em projetos que gerem
            impacto e resultados significativos para a organização.
          </p>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center md:items-start">
        <div className="flex">
          <h1 className="text-4xl md:text-5xl">Educação</h1>
          <GraduationCap size={40}  className="rotate-30"/>
        </div>
        
        <Experience1></Experience1>
        <Experience2></Experience2>
        <Experience3></Experience3>
      </div>

    </section>
  );
}