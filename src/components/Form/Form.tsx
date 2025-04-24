import { Fragment, useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { TextField, Typography } from "@mui/material";

import { textInputFields } from "../../data/formData";
import { isTimePeriodValid } from "../../utils/index";

import "./formStyles.css";

const STATUS = {
  SENDING: "Sending...",
  SENT: "Sent!",
};

// Import emailjs public key, service id and template id
const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID;

export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  // Initialize state for email last sent - to enable rate limit
  const [lastEmailSent, setLastEmailSent] = useState<Date | null>(null);
  const [status, setStatus] = useState<string>("");

  // Initialize emailjs with the public key
  useEffect(() => {
    emailjs.init(public_key_emailjs);
  }, []);

  const setStatusBox = (newStatus: string) => {
    setStatus(newStatus);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(STATUS.SENDING);

    try {
      const currentTime = new Date();

      // Check whether the last email was sent less than a minute ago
      if (isTimePeriodValid(currentTime, lastEmailSent) && form.current) {
        emailjs
          .sendForm(service_id_emailjs, template_id_emailjs, form.current)
          .then(() => {
            setStatusBox(STATUS.SENT);
            //set time last email was sent
            setLastEmailSent(currentTime);
          });
      }
    } catch (error) {
      setStatusBox(error.message);
    } finally {
      event.target.reset();
    }
  };

  return (
    <form
      id="contact-form"
      data-testid="emaill-js-form"
      ref={form}
      onSubmit={handleSubmit}
      className="display-flex flex-column width-80"
    >
      {Object.entries(textInputFields).map(([label, props]) => (
        <div key={label} className="full-width">
          <p className="md-font no-margin-bottom text-left pdne-15rem">
            {label}
          </p>
          <TextField
            data-testid={props.name}
            sx={{
              background: "whitesmoke",
              width: "100%",
              borderRadius: "4px",
            }}
            variant="filled"
            required
            {...props}
          />
        </div>
      ))}

      {/* Display SEND button or status message */}
      <div className="alert-box height-2rem drop-shadow">
        {status ? (
          <p className="md-font">{status}</p>
        ) : (
          <button
            className="pd-inline-2rem pd-block-1rem lg-font"
            aria-label="Send the form"
            type="submit"
          >
            Send
          </button>
        )}
      </div>
    </form>
  );
};
