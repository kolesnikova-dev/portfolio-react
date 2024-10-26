import 'intersection-observer';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './index.css';

const rootElement: HTMLElement | null = document.getElementById('root');

try {
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
          <App />
      </StrictMode>,
    );
  }
} catch (error) {
  throw new Error(`Could not find root element. Error: ${error}`);
}
