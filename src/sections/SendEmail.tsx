import { Form } from "../components";

export const SendEmail: React.FC = () => {
  return (
    <section className="display-flex flex-center center-column light-paper pd-block-end-6rem pd-2rem">
      {/* Contact form container */}
      <header>
        <h2 className="no-margin-bottom">Send me an email:</h2>
      </header>

      {/* Form */}
      <Form />
    </section>
  );
};
