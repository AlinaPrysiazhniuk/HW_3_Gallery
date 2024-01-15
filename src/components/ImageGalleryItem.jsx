export const ImageGalleryItem = ({ image }) => {
  return (
    <div>
      <li style={{ listStyleType: 'none' }}>
        <img src={image.webformatURL} alt="" width="240" />
      </li>
    </div>
  );
};
