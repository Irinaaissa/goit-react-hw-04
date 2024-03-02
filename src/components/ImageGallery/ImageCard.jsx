import css from './ImageCard.module.css';
export const ImageCard = ({ image: { urls, description } }) => {
    return (
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img className={css.img} src={urls.small} alt={description} />
          <div className={css.imgDarkened}></div>
        </div>
      </div>
    );
  };