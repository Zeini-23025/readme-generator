import { useForm } from 'react-hook-form';

const Form = ({ setFormData }) => {
  const { register, watch } = useForm();

  watch((data) => {
    setFormData(data);
  });

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="githubUsername" className="block text-sm font-medium text-gray-700">
          Nom d'utilisateur GitHub
        </label>
        <input
          type="text"
          id="githubUsername"
          {...register('githubUsername')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="customSectionName" className="block text-sm font-medium text-gray-700">
          Nom de section personnalisée
        </label>
        <input
          type="text"
          id="customSectionName"
          {...register('customSectionName')}
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
          Twitter / X
        </label>
        <input
          type="text"
          id="twitter"
          {...register('twitter')}
          placeholder="@yourhandle"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700">
          Portfolio / Site web
        </label>
        <input
          type="url"
          id="portfolioUrl"
          {...register('portfolioUrl')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </form>
  );
};

export default Form;
