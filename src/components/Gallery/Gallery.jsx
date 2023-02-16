import { useEffect } from 'react';
import { GalleryList } from './Gallery.styled';

export const Gallery = ({ contentType }) => {
  useEffect(() => {
    switch (contentType) {
      case 'trending':
        console.log('trending');

        break;
      case 'watched':
        console.log('watched');
        break;
      case 'queue':
        console.log('queue');
        break;
      default:
        return;
    }
  }, [contentType]);
  return <GalleryList></GalleryList>;
};
