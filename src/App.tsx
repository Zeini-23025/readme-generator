import { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';
import SkillsSelector from './components/SkillsSelector';

function App() {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSelectTemplate = (template: string) => {
    setSelectedTemplate(template);
  };

  const handleSelectSkill = (skill: string) => {
    setSelectedSkills((prevSkills) => [...prevSkills, skill]);
  };

  const handleDeselectSkill = (skill: string) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="lg:w-1/2 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">GitHub README Generator</h1>
        <div className="space-y-8">
          <Form setFormData={setFormData} />
          <TemplateSelector
            onSelectTemplate={handleSelectTemplate}
            selectedTemplate={selectedTemplate}
          />
          <SkillsSelector
            onSelectSkill={handleSelectSkill}
            onDeselectSkill={handleDeselectSkill}
            selectedSkills={selectedSkills}
          />
        </div>
      </div>
      <div className="lg:w-1/2 p-4 bg-white overflow-y-auto">
        <Preview
          formData={formData}
          selectedTemplate={selectedTemplate}
          selectedSkills={selectedSkills}
        />
      </div>
    </div>
  );
}

export default App;