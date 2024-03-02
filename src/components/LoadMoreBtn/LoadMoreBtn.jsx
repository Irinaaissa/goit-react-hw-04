import CustomButton from '../CustomButton/CustomButton';
import { BTN_CAPTION } from '../js/constants';

const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <CustomButton onClick={onClick}>{BTN_CAPTION}</CustomButton>
      )}
    </>
  );
};

export default LoadMoreBtn;