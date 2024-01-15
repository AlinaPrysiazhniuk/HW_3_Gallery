import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ image }) => {
  return (
    <ul>
      {image.hits.map(hits => {
        return <ImageGalleryItem image={hits} key={hits.id} />;
      })}
    </ul>
  );
};

//в кожну лішку треба кинути компонент лішки
