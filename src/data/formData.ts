import type { TextInputField } from "../types/textInputFieldTypes";

export const textInputFields: TextInputField = {
  Name: {
    type: "text",
    name: "user-name",
    "aria-label": "Enter your name",
  },
  Email: {
    type: "email",
    name: "user-email",
    "aria-label": "Enter your email",
  },
  Message: {
    type: "text",
    name: "message",
    "aria-label": "Add a message",
    maxRows: 8,
    multiline: true,
  },
};
