import type React from "react";

import { Typography } from "@mui/material";

import { Form } from "../components";

export const SendEmail: React.FC = () => {
  return (
    <section className="display-flex flex-center center-column">
      <div className="display-flex flex-center center-column light-paper padding-2rem">
        {/* contact form container */}
        <div>
          {/* lets get in touch */}
          <div>
            <Typography variant="h5">Send me an email:</Typography>
          </div>

          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  );
};
