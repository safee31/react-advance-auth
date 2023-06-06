import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "../../APIs/axios";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const defaultRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    userName: "",
  };

  const [registerData, setRegisterData] = useState(defaultRegister);
  const [steps, setSteps] = useState(1);
  const [imgMsg, setImgMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      let validExtensions = /\.(jpg|jpeg|png)$/;
      if (!validExtensions.test(file.name)) {
        setImgMsg("Only (.jpg, .jpeg, .png) Allowed!");
        e.target.value = "";
      } else if (file.size > 5 * 1024 * 1024) {
        setImgMsg("Image size must be 5MB or less!");
        e.target.value = "";
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64 = reader.result;
          setRegisterData({ ...registerData, image: base64 });
          setImgMsg("");
        };
        reader.onerror = function (error) {
          setImgMsg(error.message);
          e.target.value = "";
        };
      }
    }
  };

  const { mutate, isLoading } = useMutation(
    (payload) => axios.post("/auth/register", payload),

    {
      onSuccess: (res) => {
        const { data } = res;
        dispatch(setUser(data?.user));
      },
      onError: (err) => {
        const msg = err.response.data.message || "Request failed check network";
        console.log(msg || err);
        setImgMsg(msg);
        dispatch(setUser(null));
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (steps === 1) {
      setSteps(2);
    } else {
      mutate(registerData);
    }
  };

  const { mutate: verifyMail, isLoading: verifyMailLoading } = useMutation(
    (payload) => axios.post("/auth/verifyMail", payload),

    {
      onSuccess: (res) => {
        setImgMsg("");
        setSteps(2);
      },
      onError: (err) => {
        const msg =
          err.response.data.message || "Request failed check network!";
        console.log(msg || err);
        setImgMsg(msg);
      },
    }
  );

  const handleVerifyMail = (e) => {
    e.preventDefault();
    verifyMail({ email: registerData.email });
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
                  Please use this form to register.
                  <br />
                  If you are a member, please
                  <Link to="/auth/login" className="white">
                    {" "}
                    LOGIN
                  </Link>
                  .
                </p>
              </div>
              <div className="form-side pt-1">
                <div className="sw-main sw-theme-check mb-3">
                  <ul className="card-header nav nav-tabs step-anchor d-flex justify-content-between">
                    <li className={`nav-item ${steps === 1 ? "active" : ""}`}>
                      <a href="#" className="nav-link">
                        Step 1<br />
                        <small>Verify your valid email</small>
                      </a>
                    </li>
                    <li className={`nav-item ${steps === 2 ? "active" : ""}`}>
                      <a href="#" className="nav-link">
                        Step 2<br />
                        <small>Finish your registration</small>
                      </a>
                    </li>
                  </ul>
                </div>
                <Link to="/">
                  <span className="logo-single" />
                </Link>
                {imgMsg && (
                  <div className="alert alert-danger mt-1" role="alert">
                    {imgMsg}
                  </div>
                )}

                {steps === 1 ? (
                  <form onSubmit={handleVerifyMail}>
                    <label className="form-group has-float-label mb-4">
                      <input
                        value={registerData.firstName}
                        className="form-control"
                        type="text"
                        name="firstName"
                        onChange={handleInputChange}
                        required
                      />
                      <span>First Name</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        value={registerData.lastName}
                        className="form-control"
                        type="text"
                        name="lastName"
                        onChange={handleInputChange}
                        required
                      />
                      <span>Last Name</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        value={registerData.email}
                        className="form-control"
                        type="email"
                        name="email"
                        required
                        onChange={handleInputChange}
                      />
                      <span>E-mail</span>
                    </label>

                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        disabled={verifyMailLoading}
                        className="btn btn-primary btn-lg btn-shadow"
                        type="submit"
                        name="next"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <form onSubmit={handleSubmit}>
                      <label className="form-group has-float-label mb-4">
                        <input
                          className="form-control"
                          type="text"
                          name="userName"
                          onChange={handleInputChange}
                          required
                        />
                        <span>Username</span>
                      </label>
                      <label className="form-group has-float-label mb-4">
                        <input
                          className="form-control"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="image"
                          required
                          onChange={handleImageChange}
                        />

                        <span>Image</span>
                      </label>
                      <label className="form-group has-float-label mb-4">
                        <input
                          className="form-control"
                          type="password"
                          minLength={6}
                          name="password"
                          onChange={handleInputChange}
                          required
                        />
                        <span>Password</span>
                      </label>

                      <button
                        disabled={isLoading}
                        className="btn btn-primary btn-lg btn-shadow float-right"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                    <button
                      disabled={isLoading}
                      className="btn btn-light btn-lg btn-shadow"
                      onClick={() => {
                        setSteps(1);
                      }}
                    >
                      Back
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
