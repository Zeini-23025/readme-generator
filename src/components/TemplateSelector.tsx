import React from 'react';

interface TemplateSelectorProps {
  onSelectTemplate: (template: string) => void;
  selectedTemplate: string | null;
}

const templates = [
  { name: 'Professional', description: 'Style propre, sérieux, classique' },
  { name: 'Funny', description: 'Style drôle avec émojis et humour' },
  { name: 'Joke', description: 'Style décalé/parodique' },
  { name: 'Mini', description: 'Version très simplifiée' },
  { name: 'Creative', description: 'Style artistique et coloré' },
];

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelectTemplate, selectedTemplate }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Sélection du style de template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.name}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedTemplate === template.name
                ? 'border-indigo-500 ring-2 ring-indigo-500'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => onSelectTemplate(template.name)}
          >
            <h3 className="text-md font-semibold">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;