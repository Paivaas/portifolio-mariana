export default function Projects() {
  return (
      <section className="w-full flex flex-col gap-8  justify-center  items-center">
    
        <h1 className='text-4xl md:text-5xl'>Projetos</h1>

        <div className="flex flex-wrap w-screen md:w-[80vw] gap-8 justify-center  relative z-10">

          <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">PROJETO 1</h1>     
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>


          </div>

          <div className="w-75">
              <p className="text-xs">2025</p>
              <h1 className="text-sm font-semibold">PROJETO 2</h1>
              <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>

        <div className="w-75">
            <p className="text-xs">2025</p>
            <h1 className="text-sm font-semibold">PROJETO 3</h1>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2"></div>
          </div>

        

        </div>
        
      </section>
  )
}


