import React from "react";
import { Row } from "reactstrap";
import logo from "../../assets/img/brand/logo.svg";

function Wallet() {
  return (
    <>
      <Row className="justify-content-center">
        <img src={logo} alt="logo" className="mainLogo" />
      </Row>
    </>
  );
}

export default Wallet;
