import type React from "react";
import { useState } from "react";

import { Tooltip } from "@mui/material";

import { IconWithTooltip } from "../components/index";
import { contactsData, email } from "../data/contactsData";
import { icons } from "../data/svgIcons";

const contacts = contactsData.map((contact) => {
  return (
    <div
      key={contact.link.ariaLabel}
      className="display-flex flex-center bg-hover border-radius-4px transparent-border"
    >
      <IconWithTooltip
        icon={contact.icon}
        link={contact.link}
        placement="bottom"
      />
    </div>
  );
});

export const Contacts: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    try {
      // Copy the text inside the text field
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      alert(
        `Couldn't copy email. Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  };

  return (
    <section>
      <div className="display-flex flex-center center-column full-width flex-gap-2rem">
        {/* GitHub and LinkedIn container */}
        <div className="display-flex flex-center flex-gap-2rem light-paper pd-2rem">
          {contacts}
        </div>

        {/* email container */}
        <div
          className="display-flex flex-center light-paper pd-2rem pointer bg-hover"
          onClick={copyEmail}
          onKeyDown={copyEmail}
        >
          <Tooltip
            title={<p>{copied ? "Copied!" : "Click to copy my email"}</p>}
            placement="bottom"
            arrow
          >
            <div className="display-flex flex-center center-column md-font">
              <p>
                <b>{email}</b>
              </p>
              <p className="height-2rem">
                {copied ? <span>{icons.CheckCircle}</span> : "click to copy"}
              </p>
            </div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
