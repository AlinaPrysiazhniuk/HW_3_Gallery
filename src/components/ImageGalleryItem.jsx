export const ImageGalleryItem = ({ image }) => {
  return (
    <div>
      <li>
        <img src={image.webformatURL} alt="" width="100" />
      </li>
    </div>
  );
};
