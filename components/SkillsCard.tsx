interface SkillsCardProps {
    title: string;
    skills: string[];
  }
  
  export default function SkillsCard({ title, skills }: SkillsCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }