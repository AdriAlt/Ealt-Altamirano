import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer " variant="light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>EALT | STORE</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Adri Alt ©todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;