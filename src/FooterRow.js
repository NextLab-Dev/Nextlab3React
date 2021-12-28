const serbiaFlag = require ("./img/heartSerbia.png");

const FooterRow = () => {
    return (
        <div className="container-fluid g-0 footerRowContainer">
            <div className="row justify-content-center">
                <div className="col-9 col-sm-7 col-md-5 col-lg-4 footerStyle">
                    <p className="mb-1">Copyright &copy; 2021 Powered by Nextlab 3</p>
                    <p className="mb-0">Made with <img src={serbiaFlag} alt="Serbia Flag" /> in Serbia</p>
                </div>
            </div>
        </div>
    )
}

export default FooterRow;
