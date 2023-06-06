import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row  ">
            <div className="col-12">
              <h1>Dashboard</h1>
              <nav
                className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb pt-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item ">
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                </ol>
              </nav>
              <div className="separator mb-5" />
            </div>
          </div>
        </div>
        <div className="row icon-cards-row mb-4 sortable">
          <div className="col-md-3 col-lg-3 col-sm-4 col-6 mb-2">
            <Link to="/admin/dashboard" className="card">
              <div className="card-body text-center">
                <i className="iconsminds-clock" />
                <p className="card-text font-weight-semibold mb-0">
                  Pending Orders
                </p>
                <p className="lead text-center">14</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-4 col-6 mb-2">
            <Link to="/admin/dashboard" className="card">
              <div className="card-body text-center">
                <i className="iconsminds-basket-coins" />
                <p className="card-text mb-0">Completed Orders</p>
                <p className="lead text-center">32</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-4 col-6 mb-2">
            <Link to="/admin/dashboard" className="card">
              <div className="card-body text-center">
                <i className="iconsminds-arrow-refresh" />
                <p className="card-text mb-0">Refund Requests</p>
                <p className="lead text-center">74</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-4 col-6 mb-2">
            <Link to="/admin/dashboard" className="card">
              <div className="card-body text-center">
                <i className="iconsminds-mail-read" />
                <p className="card-text mb-0">New Comments</p>
                <p className="lead text-center">25</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
