import { InfinitySpin } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <InfinitySpin
          className={css.loader}
          visible={isLoading}
          ariaLabel="Loading"
        />
      )}
    </>
  );
};

export default Loader;