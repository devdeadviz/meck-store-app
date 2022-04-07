import "./Footer.css";

const Footer = () => {
  return (
    <footer className="store-footer text-center">
      <p className="py-4">
        Build with ❤️ by <b>Kuldeep Gupta</b>
      </p>
      <section>
        <a
          href="https://github.com/devdeadviz"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github fa-2x mx-5 mb-4"></i>
        </a>
        <a
          href="https://twitter.com/devdeadviz"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter fa-2x mx-5 mb-4"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/devdeadviz/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-2x mx-5 mb-4"></i>
        </a>
        <a
          href="https://www.instagram.com/devdeadviz/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram fa-2x mx-5 mb-4"></i>
        </a>
      </section>
    </footer>
  );
};

export { Footer };
