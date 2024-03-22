import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <h2>Newsletter</h2>
      <div className="newsletter">
        <TextField
          className="newsletter-input"
          label="Email"
          variant="outlined"
          placeholder="your@email.com"
        />
        <Button variant="contained" className="subscribe" size="large">
          Subscribe
        </Button>
      </div>
      <div className="footer-links-container">
        <a href="#top" className="footer-link">
          About
        </a>
        <a href="#top" className="footer-link">
          Store Locator
        </a>
        <a href="#top" className="footer-link">
          FAQs
        </a>
        <a href="#top" className="footer-link">
          News
        </a>
        <a href="#top" className="footer-link">
          Careers
        </a>
        <a href="#top" className="footer-link">
          Contact Us
        </a>
      </div>
      <h5 className="footer-built-with-love">Built with love.</h5>
    </div>
  );
}

export default Footer;
