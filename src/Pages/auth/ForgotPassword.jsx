import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <>
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
                  <p className="white mb-0">
                    Please use your e-mail to reset your password.
                    <br />
                    If you are not a member, please
                    <a href="#" className="white">
                      register
                    </a>
                    .
                  </p>
                </div>
                <div className="form-side">
                  <a href="Dashboard.Default.html">
                    <span className="logo-single" />
                  </a>
                  <h6 className="mb-4">Forgot Password</h6>
                  <form>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>E-mail</span>
                    </label>
                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        className="btn btn-primary btn-lg btn-shadow"
                        type="submit"
                      >
                        RESET
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ForgotPassword;
