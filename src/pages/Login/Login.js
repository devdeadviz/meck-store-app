import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="login-section flex flexAlignItemsCenter flexJustifyCenter">
        <div className="vertical-card-wrapper login-card-wrapper box-shadow">
          <div>
            <h2 className="m-4 text-center">Login</h2>
          </div>
          <div className="vertical-card-body my-4 mx-3">
            <form action="#">
              <label htmlFor="email-input" className="my-3 py-5">
                Email address
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="kuldeep@gmail.com"
              />
              <label htmlFor="password-input" className="my-3">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                name="name"
                placeholder="*********"
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
              <input
                type="submit"
                className="btn btn-primary submit-btn"
                value="Submit"
              />
            </form>
          </div>
          <div className="vertical-card-footer text-center my-5">
            <Link className="text-decoration-none" to="/signup">
              Create new Account <i className="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Login };
