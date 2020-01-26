import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Registration from "../Registration/Registration";
import { Button } from "reactstrap";
import pic from "../../../assets/img/brand/logo.svg";

function Login(props) {
  console.log(props);
  const [showLogin, setShowLogin] = useState(true);

  function handleChange() {
    setShowLogin(true);
  }
  function handleNew() {
    setShowLogin(false);
  }
  return (
    <>
      <div className="app bg-dark d-flex justify-content-center align-items-center">
        <img src={pic} alt="travelWealth" className="loginLogo mt-n5" />
        <div className="d-flex mb-2">
          <Button onClick={handleChange}>Sign In</Button>
          <Button onClick={handleNew}>Sign Up</Button>
        </div>
        {showLogin ? <LoginForm props={props} /> : <Registration />}
      </div>
    </>
  );
}

export default Login;
