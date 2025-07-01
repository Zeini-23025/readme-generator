import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

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
    <div className="mb-4">
      <h2 className="h5 mb-3">Sélection du style de template</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {templates.map((template) => (
          <Col key={template.name}>
            <Card
              className={`h-100 cursor-pointer ${selectedTemplate === template.name ? 'border-primary shadow' : ''}`}
              onClick={() => onSelectTemplate(template.name)}
            >
              <Card.Body>
                <Card.Title>{template.name}</Card.Title>
                <Card.Text className="text-muted">{template.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TemplateSelector;
