import css from "./LoadMore.module.css";

const LoadMore = ({ more }) => {
  if (!more) return;

  return (
    <div className={css["load-more"]}>
      <button className={css.button} onClick={more} type="button">
        Load more...
      </button>
    </div>
  );
};

export default LoadMore;
