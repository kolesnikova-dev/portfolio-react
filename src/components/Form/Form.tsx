import { useState, useEffect, useRef, Fragment } from "react";

import emailjs from "@emailjs/browser";

import { TextField, Typography } from "@mui/material";

import { isTimePeriodValid } from "../../utils/index";
import { textInputFields } from "../../data/formData";

import "./formStyles.css";

//import emailjs public key, service id and template id
const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID;

export const Form: React.FC = () => {
  const form = useRef<any>("");

  //initialize state for email last email sent to enable rate limit
  const [lastEmailSent, setLastEmailSent] = useState<Date | null>(null);

  const [status, setStatus] = useState<string | Error>("");

  // initialize emailjs with the public key
  useEffect(() => {
    emailjs.init(public_key_emailjs);
  }, []);

  const setStatusBox = (newStatus: string | Error) => {
    setStatus(newStatus);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus("Sending...");

    try {
      const currentTime = new Date();

      //check whether last email was sent less than a minute ago
      if (isTimePeriodValid(currentTime, lastEmailSent)) {
        emailjs
          .sendForm(service_id_emailjs, template_id_emailjs, form.current)
          .then(() => {
            setStatusBox("Sent!");
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
      className="full-width"
    >
      {Object.entries(textInputFields).map(([label, props]) => (
        <Fragment key={label}>
          <Typography>{label}</Typography>
          <TextField
            data-testid={props.name}
            sx={{ background: "whitesmoke" }}
            variant="filled"
            required
            {...props}
          />
          <br />
        </Fragment>
      ))}

      {/* display SEND button or status message */}
      <div className="alert-box drop-shadow">
        {status ? (
          <Typography>
            <>{status}</>
          </Typography>
        ) : (
          <button aria-label="Send the form" type="submit">
            Send
          </button>
        )}
      </div>
    </form>
  );
};
