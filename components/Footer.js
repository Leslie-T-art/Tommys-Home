const Footer = () => {
  return (
    <footer
      className="trm-scroll-animation"
      data-scroll=""
      data-scroll-offset={50}
    >
      <div className="trm-label">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className="trm-label">
        Developed by:{" "}
        <a
          href="https://www.linkedin.com/in/leslie-chihwai-284515170/"
          target="_blank"
        >
          Leslie Chihwai
        </a>
      </div>
    </footer>
  );
};
export default Footer;
