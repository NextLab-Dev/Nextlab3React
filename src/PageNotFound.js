export const PageNotFound = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="notFoundStyle">
            <h2 className="font-weight-bold">404: Page Not Found</h2>
            <p>Oops we couldn't find that page. Try going: <a href="/">HOME</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
