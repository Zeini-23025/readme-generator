import ReactMarkdown from 'react-markdown';
import { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';

interface FormData {
  fullName?: string;
  githubUsername?: string;
  customSectionName?: string;
  bio?: string;
  email?: string;
  twitter?: string;
  portfolioUrl?: string;
}

interface PreviewProps {
  formData: FormData;
  selectedTemplate: string | null;
  selectedSkills: string[];
}

const Preview: React.FC<PreviewProps> = ({ formData, selectedTemplate, selectedSkills }) => {
  const [copied, setCopied] = useState(false);
  const [markdown, setMarkdown] = useState('');

  const generateMarkdown = useCallback(() => {
    const { fullName, githubUsername, customSectionName, bio, email, twitter, portfolioUrl } = formData;

    const skillsList = selectedSkills.map(skill => `\`${skill}\``).join(' ');

    const githubStats = githubUsername ? `\n## GitHub Stats\n\n![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical)\n![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight)\n![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark)\n` : '';

    let generatedMarkdown = ``;

    switch (selectedTemplate) {
      case 'Professional':
        generatedMarkdown = `# ${fullName || ''}\n\n${customSectionName ? `## ${customSectionName}` : ''}\n\n${bio || ''}\n\n${email ? `**Email:** ${email}` : ''}\n${twitter ? `**Twitter:** [@${twitter.replace('@', '')}]` : ''}\n${portfolioUrl ? `**Portfolio:** [${portfolioUrl}](${portfolioUrl})` : ''}\n\n## Skills & Technologies\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
      case 'Funny':
        generatedMarkdown = `# Hey there, I'm ${fullName || ''}! 👋\n\n${bio || ''} 😂\n\n## My Awesome Skills 🚀\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
      case 'Joke':
        generatedMarkdown = `# ${fullName || ''} - The Legend (or not)\n\n${bio || ''} 🤡\n\n## My Super Secret Powers (aka Skills)\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
      case 'Mini':
        generatedMarkdown = `# ${fullName || ''}\n\n${bio || ''}\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
      case 'Creative':
        generatedMarkdown = `# ✨ ${fullName || ''} ✨\n\n> ${bio || ''}\n\n## 🎨 My Creative Toolkit 🛠️\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
      default:
        generatedMarkdown = `# ${fullName || ''}\n\n${bio || ''}\n\n${skillsList || ''}\n\n${githubStats}`;
        break;
    }

    return generatedMarkdown;
  }, [formData, selectedTemplate, selectedSkills]);

  useEffect(() => {
    setMarkdown(generateMarkdown());
  }, [generateMarkdown]);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <Button
          onClick={handleCopy}
          variant="secondary"
        >
          {copied ? 'Copied!' : 'Copy Markdown'}
        </Button>
        <Button
          onClick={handleDownload}
          variant="secondary"
        >
          Download README.md
        </Button>
      </div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Preview;
