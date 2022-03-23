import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Navbar />
      <section class="login-section flex flexAlignItemsCenter flexJustifyCenter">
        <div class="vertical-card-wrapper box-shadow">
          <div>
            <h2 class="m-4 text-center">Login</h2>
          </div>
          <div class="vertical-card-body my-4 mx-3">
            <form action="#">
              <label for="email-input" class="my-3 py-5">
                Email address
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="kuldeep@gmail.com"
              />
              <label for="password-input" class="my-3">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                name="name"
                placeholder="*********"
              />
              <div class="form-options flex flexJustifyBetween flexAlignItemsCenter mt-3 mb-5">
                <label for="remember">
                  <input
                    class="mr-2"
                    type="checkbox"
                    id="remember"
                    name="rememberme"
                    value="RememberMe"
                  />
                  Remember me
                </label>
                <Link class="text-decoration-none" to="#">
                  Forgot your password?
                </Link>
              </div>
              <input
                type="submit"
                class="btn btn-primary submit-btn"
                value="Submit"
              />
            </form>
          </div>
          <div class="vertical-card-footer text-center my-5">
            <Link class="text-decoration-none" to="/signup">
              Create new Account <i class="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Login };
