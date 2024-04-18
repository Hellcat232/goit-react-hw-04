import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ more }) => {
  if (!more) return;

  return (
    <div className={css["load-more"]}>
      <button className={css.button} onClick={more} type="button">
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
