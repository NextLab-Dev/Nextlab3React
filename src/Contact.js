import { useState } from "react";
import NavbarContact from "./NavbarContact";
import FooterRow from "./FooterRow";
import BottomFooterRow from "./BottomFooterRow";
import MetaTags from "react-meta-tags";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    if (name === "" || email === "" || text === "") {
      setError(true);
      setMsg("Please fill in all the required fields");
    } else {
      e.preventDefault();

      emailjs.sendForm(
        "service_1btmmv5",
        "template_pnipj4i",
        e.target,
        "user_Szim6heWfmobPNX7EDJYt"
      ).then(res => {
        setSuccess(true);
        setName("");
        setEmail("");
        setText("");
        setMsg(name + " successfully sent a message");
      }).catch(err => {
        setError(true);
        setMsg("Please fill in all the required fields");
      });
    }
  };

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
                  name="name"
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
                  name="email"
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
                  name="text"
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
