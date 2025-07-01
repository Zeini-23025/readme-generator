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
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-5 display-4 fw-bold">GitHub README Generator</h1>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100 overflow-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
              <div className="d-flex flex-column gap-4">
                <section>
                  <h2 className="h4 mb-3">1. Informations personnelles</h2>
                  <Form setFormData={setFormData} />
                </section>
                <section>
                  <h2 className="h4 mb-3">2. Sélection du style de template</h2>
                  <TemplateSelector
                    onSelectTemplate={handleSelectTemplate}
                    selectedTemplate={selectedTemplate}
                  />
                </section>
                <section>
                  <h2 className="h4 mb-3">3. Skills & Technologies</h2>
                  <SkillsSelector
                    onSelectSkill={handleSelectSkill}
                    onDeselectSkill={handleDeselectSkill}
                    selectedSkills={selectedSkills}
                  />
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm h-100 overflow-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
              <h2 className="h4 mb-3">Résultat final</h2>
              <Preview
                formData={formData}
                selectedTemplate={selectedTemplate}
                selectedSkills={selectedSkills}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;