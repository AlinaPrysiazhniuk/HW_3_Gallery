export const ImageGalleryItem = ({ image }) => {
  return (
    <div>
      <li style={{ listStyleType: 'none' }}>
        <img src={image.webformatURL} alt="" width="100" />
      </li>
    </div>
  );
};
