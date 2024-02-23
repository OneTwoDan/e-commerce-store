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
        <Button variant="contained" className="newsletter-button" size="large">
          Subscribe
        </Button>
      </div>
      <div className="footer-links-container">
        <div className="footer-link">About</div>
        <div className="footer-link">Store Locator</div>
        <div className="footer-link">FAQs</div>
        <div className="footer-link">News</div>
        <div className="footer-link">Careers</div>
        <div className="footer-link">Contact Us</div>
      </div>
      <h5 className="footer-built-with-love">Built with love.</h5>
    </div>
  );
}

export default Footer;
