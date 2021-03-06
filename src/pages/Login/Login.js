import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useAuth();
  const { showToast } = useToast();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      const { foundUser: user, encodedToken } = response.data;

      dispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", encodedToken);
      if (location.state !== null) {
        navigate(location?.state?.from?.pathname);
      } else {
        navigate("/products");
      }
      showToast("Logged In!", "success");
    } catch (error) {
      showToast(error.response.data.errors[0], "error");
    }
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: "kuldeepgupta@gmail.com",
        password: "kuldeepgupta",
      });

      const { foundUser: user, encodedToken } = response.data;

      dispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", encodedToken);
      if (location.state !== null) {
        navigate(location?.state?.from?.pathname);
      } else {
        navigate("/products");
      }
      showToast("Logged In!", "success");
    } catch (error) {
      showToast(error.response.data.errors[0], "error");
    }
  };

  return (
    <section className="login-section flex flexAlignItemsCenter flexJustifyCenter">
      <div className="vertical-card-wrapper login-card-wrapper box-shadow">
        <div>
          <h2 className="m-4 text-center">Login</h2>
        </div>
        <div className="vertical-card-body my-4 mx-3">
          <form action="#" onSubmit={loginHandler}>
            <label htmlFor="email-input" className="my-3 py-5">
              Email address
            </label>
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="kuldeep@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password-input" className="my-3">
              Password
            </label>
            <input
              type="password"
              id="password-input"
              name="name"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="form-options flex flexJustifyBetween flexAlignItemsCenter mt-3 mb-5">
              <label htmlFor="remember">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="remember"
                  name="rememberme"
                  value="RememberMe"
                />
                Remember me
              </label>
              <Link className="text-decoration-none" to="#">
                Forgot your password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-primary submit-btn mt-4"
              onClick={guestLoginHandler}
            >
              Login as Guest
            </button>
          </form>
        </div>
        <div className="vertical-card-footer text-center my-5">
          <Link className="text-decoration-none" to="/signup">
            Create new Account <i className="fa-solid fa-right-long mx-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Login };
