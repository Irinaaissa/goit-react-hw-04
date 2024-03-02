import css from './CustomButton.module.css';

const CustomButton = ({ onClick, typeBtn, children }) => {
  return (
    <button className={css.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};

export default CustomButton;