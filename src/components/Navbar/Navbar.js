import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="header-wrapper mt-2 ml-4">
          {/* <img className="logo" src="#" alt="" /> */}
          <h4>
            <a className="header-heading" href="../../pages/Home/Homepage.js">
              Meck Store
            </a>
          </h4>
        </div>
        <div className="header__nav">
          <nav>
            <ul className="flex flexAlignItemsCenter">
              <li>
                <a href="#">
                  <button type="button" className="btn btn-dark my-2 p-2 fs-6">
                    Login
                  </button>
                </a>
              </li>
              <li>
                <a className="social-icons-wrapper pos-rel" href="#">
                  <i className="fas fa-heart"></i>
                  <span className="badge-count icon-count-sm">0</span>
                </a>
              </li>
              <li>
                <a className="social-icons-wrapper pos-rel" href="#">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge-count icon-count-sm">0</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export { Navbar };
