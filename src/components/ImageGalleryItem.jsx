import { ImageApi } from './Api';

export const ImageGalleryItem = ({ images: { total } }) => {
  return (
    <div>
      <p>Total: {total}</p>;
    </div>
  );
};
