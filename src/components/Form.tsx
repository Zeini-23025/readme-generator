import { useForm } from 'react-hook-form';

const Form = ({ setFormData }) => {
  const { register, watch } = useForm();

  watch((data) => {
    setFormData(data);
  });

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="githubUsername" className="form-label">
          Nom d'utilisateur GitHub
        </label>
        <input
          type="text"
          id="githubUsername"
          {...register('githubUsername')}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="customSectionName" className="form-label">
          Nom de section personnalisée
        </label>
        <input
          type="text"
          id="customSectionName"
          {...register('customSectionName')}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bio" className="form-label">
          Bio
        </label>
        <textarea
          id="bio"
          {...register('bio')}
          rows={3}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="twitter" className="form-label">
          Twitter / X
        </label>
        <input
          type="text"
          id="twitter"
          {...register('twitter')}
          placeholder="@yourhandle"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="portfolioUrl" className="form-label">
          Portfolio / Site web
        </label>
        <input
          type="url"
          id="portfolioUrl"
          {...register('portfolioUrl')}
          className="form-control"
        />
      </div>
    </form>
  );
};

export default Form;
