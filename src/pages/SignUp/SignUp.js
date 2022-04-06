import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import "./SignUp.css";
import { useReducer } from "react";
import { signupReducer } from "../../reducers";
import axios from "axios";
import { useAuth } from "../../contexts";

const SignUp = () => {
  const { dispatch: authDispatch } = useAuth();

  const [state, dispatch] = useReducer(signupReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = state;

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      const { createdUser: user, encodedToken } = response.data;

      authDispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", encodedToken);
      dispatch({ type: "CLEAR" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="signup-section flex flexAlignItemsCenter flexJustifyCenter">
        <div className="vertical-card-wrapper signup-card-wrapper box-shadow">
          <div>
            <h2 className="m-4 text-center">SignUp</h2>
          </div>
          <div className="vertical-card-body my-4 mx-3">
            <form id="signup-form" action="#" onSubmit={signupHandler}>
              <fieldset form="signup-form">
                <label htmlFor="first-name-input">First Name</label>
                <input
                  id="first-name-input"
                  type="text"
                  name="firstname"
                  placeholder="Kuldeep"
                  value={firstName}
                  onChange={(e) =>
                    dispatch({ type: "FIRST_NAME", payload: e.target.value })
                  }
                  required
                />
                <label htmlFor="last-name-input">Last Name</label>
                <input
                  id="last-name-input"
                  type="text"
                  name="lastname"
                  placeholder="Gupta"
                  value={lastName}
                  onChange={(e) =>
                    dispatch({ type: "LAST_NAME", payload: e.target.value })
                  }
                  required
                />
                <label htmlFor="email-input" className="my-3 py-5">
                  Email address
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  placeholder="kuldeep@gmail.com"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  required
                />
                <label htmlFor="password-input" className="my-3">
                  Password
                </label>
                <input
                  type="password"
                  id="password-input"
                  name="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                />
                <label htmlFor="-confirm-password-input" className="my-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password-input"
                  name="confirm-password"
                  placeholder="*********"
                  value={confirmPassword}
                  onChange={(e) =>
                    dispatch({
                      type: "CONFIRM_PASSWORD",
                      payload: e.target.value,
                    })
                  }
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
                    I accept all Terms & Conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Create New Account
                </button>
              </fieldset>
            </form>
          </div>
          <div className="vertical-card-footer text-center my-5">
            <Link className="text-decoration-none" to="/login">
              Already have an account
              <i className="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { SignUp };
