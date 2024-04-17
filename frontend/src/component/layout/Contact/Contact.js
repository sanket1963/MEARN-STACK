import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: tavethiyasanket598@gmail.com</Button>
        <h2 className="cnr">Mobile No :1234565432</h2><br />
      </a>
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
      <Button>Contact: khuntnil83@gmail.com</Button>
      <h2 className="cnr">Mobile No :1234565432</h2>
      </a>
    </div>
  );
};

export default Contact;
