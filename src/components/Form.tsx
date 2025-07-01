import { useForm } from 'react-hook-form';

const Form = ({ setFormData }) => {
  const { register, handleSubmit, watch } = useForm();

  watch((data) => {
    setFormData(data);
  });

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          {...register('bio')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
          Technologies (comma separated)
        </label>
        <input
          type="text"
          id="technologies"
          {...register('technologies')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="projects" className="block text-sm font-medium text-gray-700">
          Projects/Portfolio (comma separated links)
        </label>
        <input
          type="text"
          id="projects"
          {...register('projects')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="github" className="block text-sm font-medium text-gray-700">
          GitHub Username
        </label>
        <input
          type="text"
          id="github"
          {...register('github')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </form>
  );
};

export default Form;
