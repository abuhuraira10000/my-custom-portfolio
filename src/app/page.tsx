import React from 'react';

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-32 animate-fade-in">
      {/* Header / Intro Section */}
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Hi, I'm Abdullah ☻
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          I am a software Developer.
        </p>
      </header>

      <hr className="my-10 border-zinc-800" />

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-200">Info</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          
          <ProjectCard 
            title="Black Hat Hacker"
            description="Anonymous Activities"
            link="#"
          />
          
          <ProjectCard 
            title="Cyber Criminal"
            description="Suspicious & Deep Pentesting"
            link="#"
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-xs text-zinc-600 tracking-wide">
        © {new Date().getFullYear()} — All Right Reserved!.
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <a 
      href={link}
      className="group block rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40"
    >
      <h3 className="font-medium text-zinc-200 group-hover:text-sky-400 transition-colors duration-200">
        {title} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </h3>
      <p className="mt-2 text-sm text-zinc-400 leading-normal">
        {description}
      </p>
    </a>
  );
}

