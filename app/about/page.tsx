import SkillsCard from '@/components/SkillsCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I'm a passionate full-stack developer with a love for building modern web applications. 
        I enjoy learning new technologies and solving complex problems.
      </p>
      
      <SkillsCard 
        title="Technical Skills"
        skills={['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL']}
      />
    </main>
  );
}