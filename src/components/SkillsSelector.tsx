import React from 'react';
import { Button } from 'react-bootstrap';

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
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Bootstrap', 'HTML', 'CSS'
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
    <div className="mb-4">
      <h2 className="h5 mb-3">Skills & Technologies</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-3">
          <h3 className="h6 mb-2">{category}</h3>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Button
                key={skill}
                variant={selectedSkills.includes(skill) ? 'primary' : 'outline-secondary'}
                size="sm"
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSelector;
