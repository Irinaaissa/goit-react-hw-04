import { ERR_EMPTY_LOAD } from '../js/constants';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ isError }) => {
  return isError && <p className={css.empty}>{ERR_EMPTY_LOAD}</p>;
};

export default ErrorMessage;