import { useState } from "react";
import NavbarContact from "./NavbarContact";
import BottomFooterRow from "./BottomFooterRow";
import MetaTags from "react-meta-tags";
import emailjs from "emailjs-com";
import { useSelector } from 'react-redux';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const language = useSelector((state) => state.language);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || text === "") {
      setError(true);
      if(language === true) {
        setMsg("Please fill in all the required fields");
      } else {
        setMsg("Molimo Vas popunite sva polja");
      }
    } else {
      e.preventDefault();

      emailjs.sendForm(
        "service_1btmmv5",
        "template_pnipj4i",
        e.target,
        "user_Szim6heWfmobPNX7EDJYt"
      ).then(res => {
        setSuccess(true);
        setError(false);
        setName("");
        setEmail("");
        setText("");
        if(language === true) {
          setMsg(name + " successfully sent a message");
        } else {
          setMsg(name + " je uspešno poslao/la poruku");
        }
      }).catch(err => {
        setError(true);
        setSuccess(false);
        if(language === true) {
          setMsg("An error has occurred. Please try again");
        } else {
          setMsg("Došlo je do greške. Molimo Vas pokušajte kasnije");
        }
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
        {(language === true)
          ?
          <title>Nextlab 3 - Contact us</title>
          :
          <title>Nextlab 3 - Kontaktirajte nas</title>
        }
      </MetaTags>
      <div className="container-fluid g-0 formContainer">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-7">
            <form onSubmit={handleSubmit}>
              <div className="form-group formGroupStyle">
                {(language === true)
                  ?
                  <label htmlFor="exampleInputName1">Name</label>
                  :
                  <label htmlFor="exampleInputName1">Ime</label>
                }
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
                {(language === true)
                  ?
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  :
                  <label htmlFor="exampleInputEmail1">Email adresa</label>
                }
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
                {(language === true)
                  ?
                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                  :
                  <label htmlFor="exampleFormControlTextarea1">Poruka</label>
                }
                <textarea
                  value={text}
                  name="text"
                  onChange={(e) => setText(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              {(language === true)
                ?
                <button type="submit" className="btn btn-primary mt-3">
                  Send message <i className="bi bi-chevron-double-right"></i>
                </button>
                :
                <button type="submit" className="btn btn-primary mt-3">
                  Pošalji poruku <i className="bi bi-chevron-double-right"></i>
                </button>
              }
            </form>
            {error && (
              <div className="alert alert-danger alert-dismissible fade show alertStyle" role="alert">
                <strong>{msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={toggleErrorAlert}></button>
              </div>
            )}

            {success && (
              <div className="alert alert-success alert-dismissible fade show alertStyle" role="alert">
                <strong>{msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={toggleSuccessAlert}></button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomFooterRow />
    </div>
  );
};

export default Contact;
