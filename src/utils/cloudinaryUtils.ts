//import cloudinary ids
const cloudinaryVideoIds = {
  smartShoppingListRecording: import.meta.env.VITE_SMART_SHOP_ID,
  vigenereRecording: import.meta.env.VITE_VIGENERE_ID,
  weatherRecording: import.meta.env.VITE_WEATHER_ID,
  climateRecording: import.meta.env.VITE_CLIMATE_ID,
}

const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL;


export const getUrl = (videoId: string) => {
  return `${cloudinaryBaseUrl}${cloudinaryVideoIds[videoId]}.mp4`;
}