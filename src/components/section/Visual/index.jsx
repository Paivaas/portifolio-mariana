import Image from "next/image";
export default function Visual() {
  return (
      <section className="w-full flex flex-wrap gap-4  justify-center  items-center">
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2 relative"><Image src="/banner.jpeg" alt="" className="object-cover" fill /></div>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2 relative"><Image src="/banner2.jpeg" alt="" className="object-cover" fill /></div>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2 relative"><Image src="/banner3.jpeg" alt="" className="object-cover" fill /></div>
            <div className="bg-zinc-100 w-75 h-50 rounded-sm mt-2 relative"><Image src="/banner4.jpeg" alt="" className="object-cover" fill /></div>
      </section>
  )
}


