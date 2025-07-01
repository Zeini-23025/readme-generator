import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const Preview = ({ formData, template }) => {
  const [copied, setCopied] = useState(false);

  const generateMarkdown = () => {
    const { name, bio, technologies, projects, github } = formData;

    const technologiesList = technologies?.split(',').map(tech => `\`${tech.trim()}\``).join(' ');
    const projectsList = projects?.split(',').map(link => `- [Project](${link.trim()})`).join('\n');

    const githubStats = github ? `\n## GitHub Stats\n\n![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&theme=radical)\n![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${github}&layout=compact&theme=tokyonight)\n![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=dark)\n` : '';

    let markdown = ``;

    switch (template) {
      case 'dark':
        markdown = `# ${name || ''}\n\n${bio || ''}\n\n## Technologies\n\n${technologiesList || ''}\n\n## Projects\n\n${projectsList || ''}\n\n${githubStats}`;
        break;
      case 'minimalist':
        markdown = `# ${name || ''}\n\n${bio || ''}\n\n${githubStats}`;
        break;
      case 'technical':
        markdown = `# ${name || ''}\n\n## Bio\n\n${bio || ''}\n\n## Technologies\n\n${technologiesList || ''}\n\n## Projects\n\n${projectsList || ''}\n\n${githubStats}`;
        break;
      case 'dev-friendly':
        markdown = `> ${bio || ''}\n\n# ${name || ''}\n\n### Technologies: ${technologiesList || ''}\n\n### Projects:\n${projectsList || ''}\n\n${githubStats}`;
        break;
      default:
        markdown = `# ${name || ''}\n\n${bio || ''}\n\n${githubStats}`;
        break;
    }

    return markdown;
  };

  const markdown = generateMarkdown();

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="prose relative">
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 mt-2 mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        {copied ? 'Copied!' : 'Copy Markdown'}
      </button>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Preview;
