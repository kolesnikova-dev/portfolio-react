/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_PUBLIC_KEY: string;
    VITE_SERVICE_ID: string;
    VITE_TEMPLATE_ID: string;
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  