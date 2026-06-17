
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from 'lucide-react';


export default function Contact() {
  return (
    
      <section className="w-full flex flex-col gap-4 items-center ">
          <h1 className='text-7xl' style={{ fontFamily: "var(--font-kapakana)" }}>Contato</h1>
          <div>
             <Tabs defaultValue="email" className="w-full h-full flex flex-col justify-center items-center">
              <TabsList variant="line">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="linkedin">Linkedin</TabsTrigger>
                <TabsTrigger value="telefone">Telefone</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                marialvessouzaa06@gmail.com
              </TabsContent>

              <TabsContent 
                className="flex flex-row-reverse items-center gap-1" 
                value="linkedin"
              >
                <a 
                  className="hover:text-zinc-600 flex  items-center gap-1" 
                  href="https://www.linkedin.com/in/mariana-alves-de-souza-aa0891338/"
                >
                  Ver perfil
                   <ExternalLink size={12}/>
                </a>
              </TabsContent>
            </Tabs>
          </div>
          
        <p className="text-zinc-200 pt-12"> Julia Paiva | Frontend Developer © 2026  Todos os direitos reservados.</p>
      </section>
  

  )}