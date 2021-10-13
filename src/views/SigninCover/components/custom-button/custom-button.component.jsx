import React from 'react';
import './custom-button.styles.css';
// import { SignInWithGoogle } from '../../../../firebase/firebase.utils';
// import { signInWithGoogle } from '../../../../firebase/firebase.utils';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
  className = {`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
  {...otherProps}
  >
  {children}
  </button>
);

export default CustomButton;
