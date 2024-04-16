import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.items}>
      {photos &&
        photos.map((photo, index) => {
          return (
            <li key={`${photo.id}_${index}`} className={css.item}>
              <ImageCard card={photo} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
