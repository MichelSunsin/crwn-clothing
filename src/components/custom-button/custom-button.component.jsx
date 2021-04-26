import { ReactComponent as Loading } from 'assets/loading.svg';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isLoading, disabled, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`}
    disabled={disabled || isLoading}
    {...otherProps}
  >
    {!isLoading ? children : <Loading className='loading-svg' />}
  </button>
);

export default CustomButton;
