import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ image }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        paddingLeft: '0px',
      }}
    >
      {image.hits.map(hits => {
        return <ImageGalleryItem image={hits} key={hits.id} />;
      })}
    </ul>
  );
};

//в кожну лішку треба кинути компонент лішки
