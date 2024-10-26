interface Input {
    type: string,
    name: string,
    maxRows?: number,
    multiline?: boolean,
  }
  
type TextInputFieldKey = 'Name' | 'Email' | 'Message';
  
export type TextInputField = Record<TextInputFieldKey, Input>;