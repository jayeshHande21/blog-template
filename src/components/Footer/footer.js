import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@dogparadise.com</p>
          <p>Phone: 123456789</p>
        </div>
        <div className="footer-section social">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
