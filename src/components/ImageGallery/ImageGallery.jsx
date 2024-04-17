import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onOpenModal }) => {
  return (
    <ul className={css.items}>
      {photos.map((photo, index) => {
        return (
          <li key={photo.id} className={css.item}>
            <ImageCard idx={index} openModal={onOpenModal} card={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
