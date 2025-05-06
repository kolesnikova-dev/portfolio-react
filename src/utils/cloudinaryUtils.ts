//import cloudinary ids
const cloudinaryMediaIds = {
  // Prompto
  promptoRecording: import.meta.env.VITE_PROMPTO_ID,
  promptoThumbnails: import.meta.env.VITE_PROMPTO_THUMBNAILS_ID,
  // Stock Market Aggregator
  // Smart Shopping List
  smartShopRecording: import.meta.env.VITE_SMART_SHOP_ID,
  smartShopThumbnails: import.meta.env.VITE_SMART_SHOP_THUMBNAILS_ID,
  // Weather app
  weatherRecording: import.meta.env.VITE_WEATHER_ID,
  weatherThumbnails: import.meta.env.VITE_WEATHER_THUMBNAILS_ID,
  // Personal budgeting app
  budgetingRecording: import.meta.env.VITE_BUDGETING_ID,
  budgetingThumbnails: import.meta.env.VITE_BUDGETING_THUMBNAILS_ID,
  // Distributed rate limiter
  limiterRecording: import.meta.env.VITE_LIMITER_ID,
  limiterThumbnails: import.meta.env.VITE_LIMITER_THUMBNAILS_ID,
  // Avatar
  avatar: import.meta.env.VITE_AVATAR_ID,
};

const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL;

export const getUrl = (array: string[]) => {
  const [mediaId, mediaType] = array;
  const mediaFormat = mediaType === "image" ? "webp" : "mp4";
  return `${cloudinaryBaseUrl}${mediaType}/upload/${cloudinaryMediaIds[mediaId]}.${mediaFormat}`;
};
