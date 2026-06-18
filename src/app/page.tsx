'use client';
import Header from '@/components/section/Header';
import LineUp from '@/components/section/LineUp';
import Contact from '@/components/section/Contact';
import Projects from '@/components/section/Projects';
import Reveal from '@/components/ui/Reveal';

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex flex-col gap-40 overflow-x-hidden"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <Reveal>
        <Header />
      </Reveal>
      <Reveal>
        <LineUp />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  );
}
