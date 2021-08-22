import Bio from "../sections/bio/Bio";
import Footer from "../layout/Footer";

import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div></div>
      <div className="contact__bio">
        <Bio />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
