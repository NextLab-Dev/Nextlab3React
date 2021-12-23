const CodeRow = () => {
    const codeImg = require("./img/code.png");
  
    return (
      <div className="container-fluid g-0 codeRowContainer">
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="paragraphStyle">
              <p>Generate your:</p>
              <p>Vouchers <i className="bi bi-arrow-right"></i> Tokens <i className="bi bi-arrow-right"></i> Rewards</p>
              <p>and distribute them in your</p>
              <p>customers wallet</p>
            </div>
          </div>
          <div className="col-4">
            <img src={codeImg} alt="Code" className="mockupStyle" />
          </div>
        </div>
      </div>
    );
  };
  
  export default CodeRow;