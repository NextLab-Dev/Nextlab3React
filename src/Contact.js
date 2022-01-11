import { useState } from "react";
import NavbarContact from "./NavbarContact";
import FooterRow from "./FooterRow";
import BottomFooterRow from "./BottomFooterRow";
import axios from 'axios';
import MetaTags from "react-meta-tags";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || text === "") {
      setError(true);
      setMsg("Please fill in all the required fields");
    } else {
      sendMessage();
    }
  };

  const sendMessage = () => {
    axios
      .post(
        'https://nodeemailapi.herokuapp.com/email',
      )
      .then((res) => {
        setSuccess(true);
        setMsg("Your message is successfully sent");
        setName("");
        setEmail("");
        setText("");
      })
      .catch((error) => {
        setError(true);
        setMsg("An error occurred. Please try again later");
        setName("");
        setEmail("");
        setText("");
      });
  }

  const toggleErrorAlert = (event) => {
    event.preventDefault();
    setError(false);
  };

  const toggleSuccessAlert = (event) => {
    event.preventDefault();
    setSuccess(false);
  };

  return (
    <div>
      <NavbarContact />
      <MetaTags>
        <title>Nextlab 3 - Contact us</title>
      </MetaTags>
      <div className="container-fluid g-0 formContainer">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-7">
            <form onSubmit={handleSubmit}>
              <div className="form-group formGroupStyle">
                <label htmlFor="exampleInputName1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="form-group formGroupStyle">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group formGroupStyle">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send message <i className="bi bi-chevron-double-right"></i>
              </button>
            </form>
            {error && (
              <div
                className="alert alert-danger alert-dismissible alertStyle"
                role="alert"
              >
                {msg}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={toggleErrorAlert}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}

            {success && (
              <div
                className="alert alert-success alert-dismissible alertStyle"
                role="alert"
              >
                {msg}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={toggleSuccessAlert}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomFooterRow />
      <FooterRow />
    </div>
  );
};

export default Contact;
