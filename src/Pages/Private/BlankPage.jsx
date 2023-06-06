import React from "react";
import { Link } from "react-router-dom";

const BlankPage = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>404 ?</h1>
            <button className="ml-5 btn btn-warning">
              <Link to="/admin/dashboard">Go to Dashboard</Link>
            </button>
            <div class="separator mb-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlankPage;
