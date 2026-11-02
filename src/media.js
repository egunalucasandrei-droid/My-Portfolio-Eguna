// Small derivatives are used in cards; previews continue to open the original assets.
const originals = import.meta.glob('./images/*.{png,jpg,webp}', { eager: true, query: '?url', import: 'default' });
const previews = import.meta.glob('./images/previews/*.webp', { eager: true, query: '?url', import: 'default' });
const thumbnails = new Map(Object.entries(originals).map(([path, url]) => {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '.webp');
  return [url, previews[`./images/previews/${name}`] || url];
}));

export const thumbnailFor = (source) => thumbnails.get(source) || source;
