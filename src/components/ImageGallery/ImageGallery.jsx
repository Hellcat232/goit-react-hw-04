import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  console.log(photos);
  return (
    <ul>
      {photos.map((photo) => {
        console.log(photo);
        return (
          <li key={photo.id}>
            <ImageCard card={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
