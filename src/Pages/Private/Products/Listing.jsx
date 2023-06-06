import React from "react";

const ProductsListing = () => {
  return (
    <div className="container-fluid disable-text-selection">
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <h1>Product Thumbs</h1>
            <div className="text-zero top-right-button-container">
              <button
                type="button"
                className="btn btn-primary btn-lg top-right-button mr-1"
              >
                ADD NEW
              </button>
              <div className="btn-group">
                <div className="btn btn-primary btn-lg pl-4 pr-0 check-button">
                  <label className="custom-control custom-checkbox mb-0 d-inline-block">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkAll"
                    />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </div>
              </div>
            </div>
            <nav
              className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </div>
          <div className="mb-2">
            <a
              className="btn pt-0 pl-0 d-inline-block d-md-none"
              data-toggle="collapse"
              href="#displayOptions"
              role="button"
              aria-expanded="true"
              aria-controls="displayOptions"
            >
              Display Options
              <i className="simple-icon-arrow-down align-middle" />
            </a>
            <div className="collapse d-md-block" id="displayOptions">
              <span className="mr-3 mb-2 d-inline-block float-md-left">
                <a href="#" className="mr-2 view-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                    <path
                      className="view-icon-svg"
                      d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                    />
                  </svg>
                </a>
                <a href="#" className="mr-2 view-icon active">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                    <path
                      className="view-icon-svg"
                      d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                    />
                  </svg>
                </a>
                <a href="#" className="mr-2 view-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                    <path
                      className="view-icon-svg"
                      d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"
                    />
                    <path
                      className="view-icon-svg"
                      d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"
                    />
                  </svg>
                </a>
              </span>
              <div className="d-block d-md-inline-block">
                <div className="btn-group float-md-left mr-1 mb-1">
                  <button
                    className="btn btn-outline-dark btn-xs dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Order By
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </div>
                <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                  <input placeholder="Search..." />
                </div>
              </div>
              <div className="float-md-right">
                <span className="text-muted text-small">
                  Displaying 1-10 of 210 items{" "}
                </span>
                <button
                  className="btn btn-outline-dark btn-xs dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  20
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                  <a className="dropdown-item active" href="#">
                    20
                  </a>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                  <a className="dropdown-item" href="#">
                    50
                  </a>
                  <a className="dropdown-item" href="#">
                    100
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="separator mb-5" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 list" data-check-all="checkAll">
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/fat-rascal-thumb.jpg"
                alt="Fat Rascal"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">Fat Rascal</p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Cupcakes
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  13.04.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-primary">
                    PROCESSED
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/goose-breast-thumb.jpg"
                alt="Goose Breast"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">
                    Goose Breast
                  </p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Cakes
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  21.03.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-primary">
                    PROCESSED
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/petit-gateau-thumb.jpg"
                alt="Petit Gateau"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">
                    Petit Gâteau
                  </p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Cupcakes
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  19.02.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-secondary">
                    ON HOLD
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/salzburger-nockerl-thumb.jpg"
                alt="Salzburger Nockerl"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">
                    Salzburger Nockerl
                  </p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Desserts
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  14.02.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-primary">
                    PROCESSED
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/napoleonshat-thumb.jpg"
                alt="Napoleonshat"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">
                    Napoleonshat
                  </p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Desserts
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  05.02.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-primary">
                    PROCESSED
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/souffle-thumb.jpg"
                alt="Soufflé"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">Soufflé</p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Cupcakes
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  14.01.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-secondary">
                    ON HOLD
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <div className="card d-flex flex-row mb-3">
            <a className="d-flex" href="Pages.Product.Detail.html">
              <img
                src="../img/products/marble-cake-thumb.jpg"
                alt="Marble Cake"
                className="list-thumbnail responsive border-0 card-img-left"
              />
            </a>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <a href="Pages.Product.Detail.html" className="w-40 w-sm-100">
                  <p className="list-item-heading mb-0 truncate">Marble Cake</p>
                </a>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  Desserts
                </p>
                <p className="mb-0 text-muted text-small w-15 w-sm-100">
                  09.01.2018
                </p>
                <div className="w-15 w-sm-100">
                  <span className="badge badge-pill badge-secondary">
                    ON HOLD
                  </span>
                </div>
              </div>
              <label className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">&nbsp;</span>
              </label>
            </div>
          </div>
          <nav className="mt-4 mb-3">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item ">
                <a className="page-link first" href="#">
                  <i className="simple-icon-control-start" />
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link prev" href="#">
                  <i className="simple-icon-arrow-left" />
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link next" href="#" aria-label="Next">
                  <i className="simple-icon-arrow-right" />
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link last" href="#">
                  <i className="simple-icon-control-end" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
