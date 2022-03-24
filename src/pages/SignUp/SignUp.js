import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <section class="signup-section flex flexAlignItemsCenter flexJustifyCenter">
        <div class="vertical-card-wrapper signup-card-wrapper box-shadow">
          <div>
            <h2 class="m-4 text-center">SignUp</h2>
          </div>
          <div class="vertical-card-body my-4 mx-3">
            <form id="signup-form" action="#">
              <fieldset form="signup-form">
                <label for="first-name-input">First Name</label>
                <input
                  id="first-name-input"
                  type="text"
                  name="firstname"
                  placeholder="Kuldeep"
                />
                <label for="last-name-input">Last Name</label>
                <input
                  id="last-name-input"
                  type="text"
                  name="lastname"
                  placeholder="Gupta"
                />
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
                  name="password"
                  placeholder="*********"
                />
                <label for="-confirm-password-input" class="my-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password-input"
                  name="confirm-password"
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
                    I accept all Terms & Conditions
                  </label>
                </div>
                <input
                  type="submit"
                  class="btn btn-primary submit-btn"
                  value="Create New Account"
                />
              </fieldset>
            </form>
          </div>
          <div class="vertical-card-footer text-center my-5">
            <Link class="text-decoration-none" to="/login">
              Already have an account
              <i class="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { SignUp };
