import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLogin } from "../../APIs/auth";
import { setUser } from "../../Redux/Slices/User";
import { useMutation } from "react-query";
import axios from "../../APIs/axios";

const Login = () => {
  const [loginMsg, setLoginMsg] = useState("");
  const dispatch = useDispatch();
  // const { mutateAsync, data, error, isLoading } = useLogin();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const { mutate, isLoading } = useMutation(
    (payload) => {
      return axios.post("/auth/login", payload);
    },
    {
      onSuccess: (res) => {
        const { data } = res;
        dispatch(setUser(data?.user));
      },
      onError: (err) => {
        setLoginMsg(err.response.data.message || "Request failed check network");
        console.log(err.response.data || err);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(loginData);
  };

  return (
    <>
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-md-10 mx-auto my-auto">
            <div className="card auth-card">
              <div className="position-relative image-side ">
                <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
                <p className="white mb-0">
                  Please use your credentials to login.
                  <br />
                  If you are not a member, please
                  <Link to="/auth/signup" className="white">
                    {" "}
                    REGISTER
                  </Link>
                  .
                </p>
              </div>
              <div className="form-side">
                <Link to="/">
                  <span className="logo-single" />
                </Link>
                {loginMsg && (
                  <div className="alert alert-danger" role="alert">
                    {loginMsg}
                  </div>
                )}
                <h6 className="mb-4">Login</h6>
                <form onSubmit={handleSubmit}>
                  <label className="form-group has-float-label mb-4">
                    <input
                      className="form-control"
                      type="email"
                      required
                      name="email"
                      onChange={handleInputChange}
                    />
                    <span>E-mail</span>
                  </label>
                  <label className="form-group has-float-label mb-4">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      minLength={6}
                      required
                      onChange={handleInputChange}
                    />
                    <span>Password</span>
                  </label>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/auth/forgetPassword">Forget password?</Link>
                    <button
                      disabled={isLoading}
                      className="btn btn-primary btn-lg btn-shadow"
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
