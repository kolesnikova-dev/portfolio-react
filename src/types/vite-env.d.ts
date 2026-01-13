/// <reference types="vite/client" />

// interface ImportMetaEnv {
//   VITE_PUBLIC_KEY: string;
//   VITE_SERVICE_ID: string;
//   VITE_TEMPLATE_ID: string;
//   VITE_SMART_SHOP_ID: string;
//   VITE_VIGENERE_ID: string;
//   VITE_WEATHER_ID: string;
//   VITE_CLIMATE_ID: string;
//   VITE_CLIMATE_THUMBNAILS_ID: string;
//   VITE_SMART_SHOP_THUMBNAILS_ID: string;
//   VITE_VIGENERE_THUMBNAILS_ID: string;
//   VITE_WEATHER_THUMBNAILS_ID: string;
//   VITE_CLOUDINARY_BASE_URL: string;
//   VITE_AVATAR_ID: string;
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

export interface PreviewBoxProps extends BoxProps {
  theme?: Theme;
  thumbnails?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface CustomBoxProps extends BoxProps {
  theme?: Theme;
  children?: React.ReactNode;
}
