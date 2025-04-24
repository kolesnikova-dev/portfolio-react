import { Form } from "../components";

export const SendEmail: React.FC = () => {
  return (
    <section className="display-flex flex-center center-column">
      <div className="display-flex flex-center center-column light-paper padding-2rem">
        {/* Contact form container */}
        <header>
          <h2>Send me an email:</h2>
        </header>

        {/* Form */}
        <Form />
      </div>
    </section>
  );
};
