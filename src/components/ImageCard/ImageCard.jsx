const ImageCard = ({
  card: {
    urls: { small },
    alt_description,
  },
  openModal,
  idx,
}) => {
  return (
    <div>
      <img
        onClick={openModal}
        src={small}
        alt={alt_description}
        width="400"
        height="300"
        id={idx}
      />
    </div>
  );
};

export default ImageCard;
