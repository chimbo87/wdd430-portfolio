import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js app for managing products, inventory, and orders with real-time updates.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    link: 'https://github.com/your-username/ecommerce-dashboard'
  },
  {
    title: 'Weather Application',
    description: 'A React app that fetches and displays real-time weather data with interactive maps.',
    technologies: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
    link: 'https://github.com/your-username/weather-app'
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management tool with drag-and-drop functionality and team features.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    link: 'https://github.com/your-username/task-manager'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}