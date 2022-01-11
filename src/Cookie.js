import CookieConsent from "react-cookie-consent";
import { useState, useEffect } from "react";

const Cookie = () => {
  const [cookieExist, setCookieExist] = useState(false);

  const handleClick = () => {
    setCookieExist(true);
  }

  // useEffect(() => {
  //   if (checker === true) {
  //     console.log('cookie exist');
  //     setCookieExist(true)
  //   } else {
  //     console.log('cookie does not exist')
  //   }
  // });
  return (
    <div>
      {!cookieExist &&
        <CookieConsent
          style={{ backgroundColor: "#424242" }}
          buttonStyle={{
            backgroundColor: "#039BE5",
            borderRadius: "5px",
            color: "white",
            width: "100px"
          }}
          onAccept={handleClick}
          buttonText="Accept"
          cookieName="language"
          cookieValue="true"
          expires={1}
          overlay
        >
          <h4>
            <i className="fas fa-cookie-bite"></i> Cookie Privacy
          </h4>
          This website uses cookies in order to offer you the most relevant
          information. Please accept cookies for optimal performances.
          <a href="/privacy-policy" className="cookieStyle"> Privacy Policy</a>
        </CookieConsent>
      }
    </div>
  );
};

export default Cookie;
