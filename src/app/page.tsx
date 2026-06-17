'use client';
import Header from '@/components/section/Header';
import LineUp from '@/components/section/LineUp';
import Contact from '@/components/section/Contact';
import Projects from '@/components/section/Projects';

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex flex-col gap-40 overflow-x-hidden"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <Header></Header>
      <LineUp></LineUp>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
