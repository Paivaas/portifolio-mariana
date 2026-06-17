import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import { GraduationCap } from 'lucide-react';


export default function LineUp() {

  return (

    <section className="flex gap-8 w-full justify-center items-center px-6 md:p-0">

      <div className="flex flex-col  w-148 h-full items-start gap-8 justify-end">
        <div className="bg-gray-200 w-120 h-50 rounded-3xl rounded-bl-none">

        </div>
          <h1 className="text-5xl">Sobre mim:</h1>

          <p>Estudante de Relações Públicas na FECAP, atualmente
            no segundo ano de graduação. Durante minha trajetória
            acadêmica, venho buscando o constante aprendizado e
            a exploração de áreas da comunicação, a fim de
            desenvolver um olhar estratégico, criativo e inovador,
            focado nos públicos. Meu objetivo é crescer
            profissionalmente, contribuindo em projetos que gerem
            impacto e resultados significativos para a organização.
          </p>

      </div>
      <div className="flex flex-col gap-6 justify-center items-start">
        <div className="flex">
          <h1 className="text-5xl">Educação</h1>
          <GraduationCap size={40}  className="rotate-30"/>
        </div>
        
        <Experience1></Experience1>
        <Experience2></Experience2>
        <Experience3></Experience3>
      </div>

    </section>
  );
}