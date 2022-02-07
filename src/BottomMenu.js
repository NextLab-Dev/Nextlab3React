import { useSelector } from "react-redux";

export const BottomMenu = () => {
    const language = useSelector((state) => state.language);
    const home = useSelector((state) => state.navHome);
    const teams = useSelector((state) => state.navTeams);
    const contact = useSelector((state) => state.navContact);
    const terms = useSelector((state) => state.navTerms);
    const privacy = useSelector((state) => state.navPrivacy);

    return (
        <div className="container-fluid bottomMenuContainer">
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-10 col-lg-10 col-xl-7 bottomFooterTitle">
                    <h4>Nextlab 3</h4>
                </div>
            </div>
            <div className="row justify-content-center">
                {(language === true)
                    ?
                    <div className="col-10 col-sm-7 col-md-5 col-xl-4 leftSideStyle">
                        <p><span style={{ fontWeight: "bold" }}>Address:</span> Topličin Venac 19a, Belgrade - Serbia</p>
                        <p><span style={{ fontWeight: "bold" }}>Registration number:</span> 21696056</p>
                        <p className="mb-0"><span style={{ fontWeight: "bold" }}>E-mail:</span> <a href="mailto:info@nextlab3.com">info@nextlab3.com</a></p>
                    </div>
                    :
                    <div className="col-10 col-sm-7 col-md-5 col-xl-4 leftSideStyle">
                        <p><span style={{ fontWeight: "bold" }}>Adresa:</span> Topličin Venac 19a, Beograd - Srbija</p>
                        <p><span style={{ fontWeight: "bold" }}>Matični broj:</span> 21696056</p>
                        <p className="mb-0"><span style={{ fontWeight: "bold" }}>E-mail:</span> <a href="mailto:info@nextlab3.com">info@nextlab3.com</a></p>
                    </div>
                }
                <div className="col-10 col-sm-7 col-md-5 col-xl-3 rightSideStyle">
                    <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/">{home}</a></p>
                    <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/teams">{teams}</a></p>
                    <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/contact">{contact}</a></p>
                    <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/terms-conditions">{terms}</a></p>
                    <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/privacy-policy">{privacy}</a></p>
                </div>
            </div>
        </div>
    )
}
