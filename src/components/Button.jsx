import style from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${style.btn} ${style[type]}`}>
      {children}
    </button>
  );
};

export default Button;
