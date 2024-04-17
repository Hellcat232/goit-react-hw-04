const LoadMore = ({ more }) => {
  if (!more) return;

  return (
    <>
      <button onClick={more} type="button">
        Load more...
      </button>
    </>
  );
};

export default LoadMore;
