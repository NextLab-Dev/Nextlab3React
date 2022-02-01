import { Navigation } from "./Navigation";

export const NavbarContact = () => {
    const officeImg = require("./img/Office.webp");
    
    return (
        <header className="imageContainer">
            <img src={officeImg} alt="Office" className="navImage" />
            <div className="insideObjectFirst">
                <Navigation />
            </div>
        </header>
    );
};
