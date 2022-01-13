import { useSelector } from 'react-redux';

const BottomFooterRow = () => {
    const language = useSelector((state) => state.language);

    return (
        <div className="container-fluid g-0 bottomFooterRowContainer">
            <div className="row justify-content-center">
                {(language === true)
                    ?
                    <div className="col-9 col-sm-7 col-md-5 col-lg-4 bottomFooterStyle">
                        <h4>Smart Protocol Exchange System</h4>
                        <p><span style={{ fontWeight: "bold" }}>Social address:</span> Topličin Venac 19a, Belgrade</p>
                        <p><span style={{ fontWeight: "bold" }}>Registration number:</span> 21696056</p>
                        <p><span style={{ fontWeight: "bold" }}>E-mail:</span> info@nextlab3.com</p>
                    </div>
                    :
                    <div className="col-9 col-sm-7 col-md-5 col-lg-4 bottomFooterStyle">
                        <h4>Smart Protocol Exchange System</h4>
                        <p><span style={{ fontWeight: "bold" }}>Adresa:</span> Topličin Venac 19a, Belgrade</p>
                        <p><span style={{ fontWeight: "bold" }}>Matični broj:</span> 21696056</p>
                        <p><span style={{ fontWeight: "bold" }}>E-mail:</span> info@nextlab3.com</p>
                    </div>
                }

                {(language === true)
                    ?
                    <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 bottomFooterStyle">
                        <h4>Nextlab 3</h4>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/">Home</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/teams">Teams</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/contact">Contact</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/terms-conditions">Terms & Conditions</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/privacy-policy">Policy Privacy</a></p>
                    </div>
                    :
                    <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 bottomFooterStyle">
                        <h4>Nextlab 3</h4>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/">O nama</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/teams">Tim</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/contact">Kontakt</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/terms-conditions">Uslovi korišćenja</a></p>
                        <p className="mb-1"><i className="bi bi-chevron-right"></i> <a href="/privacy-policy">Pravila o privatnosti</a></p>
                    </div>
                }
            </div>
        </div>
    )
}

export default BottomFooterRow;
