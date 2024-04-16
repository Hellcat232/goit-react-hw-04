const ImageCard = ({ card }) => {
  return (
    <div>
      <img
        src={card.urls.small}
        alt={card.alt_description}
        width="400"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
