import type { TextInputField } from '../types/textInputFieldTypes';

export const textInputFields: TextInputField = {
  Name: {
    type: 'text',
    name: 'user-name',
  },
  Email: {
    type: 'email',
    name: 'user-email',
  },
  Message: {
    type: 'text',
    name: 'message',
    maxRows: 8,
    multiline: true,
  },
};