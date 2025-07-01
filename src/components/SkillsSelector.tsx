import React from 'react';

interface SkillsSelectorProps {
  onSelectSkill: (skill: string) => void;
  onDeselectSkill: (skill: string) => void;
  selectedSkills: string[];
}

const skillsData = {
  'Langages de programmation': [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'C++', 'Go', 'Ruby', 'Rust'
  ],
  'Frontend': [
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'
  ],
  'Backend & Bases de données': [
    'Node.js', 'Express', 'NestJS', 'Django', 'Flask', 'Spring', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'
  ],
  'Outils & DevOps': [
    'Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'Linux', 'Figma', 'Postman', 'VSCode', 'Jira'
  ],
};

const SkillsSelector: React.FC<SkillsSelectorProps> = ({ onSelectSkill, onDeselectSkill, selectedSkills }) => {
  const handleSkillClick = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      onDeselectSkill(skill);
    } else {
      onSelectSkill(skill);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Skills & Technologies</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-md font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 border rounded-full cursor-pointer text-sm ${
                  selectedSkills.includes(skill)
                    ? 'bg-indigo-500 text-white border-indigo-500'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSelector;
