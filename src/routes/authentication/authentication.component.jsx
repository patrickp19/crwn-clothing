// import { useEffect, useState } from "react";
// import { getRedirectResult } from "firebase/auth";
// import FormInput from "../../components/form-input/form-input.component";
// import Button from "../../components/button/button.component";

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container flow-content">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
