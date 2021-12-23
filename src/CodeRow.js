const CodeRow = () => {
    const codeImg = require("./img/code.png");
  
    return (
      <div className="container-fluid g-0 codeRowContainer">
        <div className="row justify-content-center">
          <div className="col-9 col-sm-7 col-md-5 col-lg-4">
            <div className="paragraphStyle">
              <p className="paragraphBold">Generate your:</p>
              <p>Vouchers <i className="bi bi-arrow-right"></i> Tokens <i className="bi bi-arrow-right"></i> Rewards</p>
              <p>and distribute them in your</p>
              <p>customers wallet</p>
            </div>
          </div>
          <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3">
            <img src={codeImg} alt="Code" className="mockupStyle" />
          </div>
        </div>
      </div>
    );
  };
  
  export default CodeRow;