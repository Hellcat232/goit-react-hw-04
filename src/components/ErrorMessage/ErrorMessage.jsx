import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  if (!message) return;

  return (
    <div className={css.error}>
      <p className={css.message}>
        Ooops! Something went wrong, try make reloading page...
        <> {message}</>
      </p>
    </div>
  );
};

export default ErrorMessage;
