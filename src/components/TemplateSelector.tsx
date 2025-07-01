const TemplateSelector = ({ setTemplate }) => {
  return (
    <div>
      <label htmlFor="template" className="block text-sm font-medium text-gray-700">
        Template
      </label>
      <select
        id="template"
        onChange={(e) => setTemplate(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="minimalist">Minimalist</option>
        <option value="technical">Technical</option>
        <option value="dev-friendly">Dev-Friendly</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
