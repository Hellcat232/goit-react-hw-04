const ImageCard = ({ card }) => {
  console.log(card);
  return (
    <div>
      <img src={card.urls.small} alt={card.alt_description} />
    </div>
  );
};

export default ImageCard;
