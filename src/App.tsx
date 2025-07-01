import { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';

function App() {
  const [formData, setFormData] = useState({});
  const [template, setTemplate] = useState('default');

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="lg:w-1/2 p-4">
        <TemplateSelector setTemplate={setTemplate} />
        <Form setFormData={setFormData} />
      </div>
      <div className="lg:w-1/2 p-4 bg-white">
        <Preview formData={formData} template={template} />
      </div>
    </div>
  );
}

export default App;