export const ImageGalleryItem = ({ image }) => {
  return (
    <div>
      <p>Total: {image.total}</p>
      <p>TotalHits: {image.totalHits}</p>
      <p>TotalHits: {image.hits.length}</p>
      <ul>
        {image.hits.map(hits => (
          <li key={hits.id}>
            <img src={hits.webformatURL} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
