//import cloudinary ids
const cloudinaryMediaIds = {
  smartShopRecording: import.meta.env.VITE_SMART_SHOP_ID,
  vigenereRecording: import.meta.env.VITE_VIGENERE_ID,
  weatherRecording: import.meta.env.VITE_WEATHER_ID,
  climateRecording: import.meta.env.VITE_CLIMATE_ID,
  climateThumbnails: import.meta.env.VITE_CLIMATE_THUMBNAILS_ID,
  smartShopThumbnails: import.meta.env.VITE_SMART_SHOP_THUMBNAILS_ID,
  vigenereThumbnails: import.meta.env.VITE_VIGENERE_THUMBNAILS_ID,
  weatherThumbnails: import.meta.env.VITE_WEATHER_THUMBNAILS_ID,
  avatar: import.meta.env.VITE_AVATAR_ID,
}

const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL;
 
export const getUrl = (array: string[]) => {
  const [mediaId, mediaType] = array;
  const mediaFormat = mediaType === 'image' ? 'webp' : 'mp4';
  return `${cloudinaryBaseUrl}${mediaType}/upload/${cloudinaryMediaIds[mediaId]}.${mediaFormat}`;
}
