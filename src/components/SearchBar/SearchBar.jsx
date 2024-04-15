import css from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSubmit, onEmpty }) => {
  const hendleSubmitForm = (event) => {
    event.preventDefault();

    if (event.target.elements.search.value.trim() === "") return onEmpty();

    onSubmit(event.target.elements.search.value);

    event.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={hendleSubmitForm}>
        <input
          className={css.input}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
