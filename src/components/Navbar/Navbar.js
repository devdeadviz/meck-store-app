import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts";
import { useToast } from "../../custom-hooks";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const {
    state: { isAuth },
  } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const logoutHandler = () => {
    localStorage.clear();
    showToast("Logged Out!", "success")
    navigate(0);
  };

  return (
    <div>
      <header className="header">
        <div className="header-wrapper mt-2 ml-4">
          <img className="logo" src="/assets/logo.png" alt="Store Logo" />
          <h4>
            <Link className="header-heading" to="/">
              Meck Store
            </Link>
          </h4>
        </div>
        <div className="header__nav">
          <nav>
            <ul className="flex flexAlignItemsCenter">
              <li>
               <Link to="/products">
               <button
                    type="button"
                    className="btn btn-primary prod-btn my-2 mx-4 p-2 fs-6"
                  >
                    Products
                  </button>
               </Link>
              </li>
              <li>
                {isAuth ? (
                  <button
                    type="button"
                    className="btn btn-dark my-2 p-2 fs-6"
                    onClick={logoutHandler}
                  >
                    LogOut
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-dark my-2 p-2 fs-6"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </li>
              <li>
                <Link className="social-icons-wrapper pos-rel" to="/wishlist">
                  <i className="fas fa-heart"></i>
                  <span className="badge-count icon-count-sm">
                    {wishlistItems.length}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="social-icons-wrapper pos-rel" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge-count icon-count-sm">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export { Navbar };
