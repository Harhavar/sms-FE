import Copyright from "@/molecules/copyright";
import FooterLinks from "@/molecules/footer-links";

const Footer = () => {
  return (
    <div className="container mx-auto flex justify-between pb-16">
      <Copyright />
      <FooterLinks />
    </div>
  );
};

export default Footer;
