import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError(true);
      setMsg("Please fill in all the required fields");
    } else {
      setSuccess(true);
      setMsg("Your message is successfully sent");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const toggleErrorAlert = (event) => {
    event.preventDefault();
    setError(false);
  };

  const toggleSuccessAlert = (event) => {
    event.preventDefault();
    setSuccess(false);
  }

  return (
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
  );
};

export default Contact;
