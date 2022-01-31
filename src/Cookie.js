import CookieConsent from "react-cookie-consent"

export const Cookie = () => {

  return (
    <div>
        <CookieConsent
          debag={true}
          style={{ backgroundColor: "#424242" }}
          buttonStyle={{
            backgroundColor: "#039BE5",
            borderRadius: "5px",
            color: "white",
            width: "100px"
          }}
          buttonText="Accept"
          declineButtonStyle={{
            backgroundColor: "#dc3545",
            borderRadius: "5px",
            color: "white",
            width: "100px"
          }}
          declineButtonText="Refuse"
          cookieName="language"
          cookieValue="true"
          declineCookieValue="false"
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
    </div>
  );
};