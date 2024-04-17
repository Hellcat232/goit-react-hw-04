const ImageCard = ({
  card: {
    urls: { small, regular },
    alt_description,
  },
  openModal,
}) => {
  return (
    <div>
      <img
        onClick={() => {
          openModal(regular, alt_description);
        }}
        src={small}
        alt={alt_description}
        width="400"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
