import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const footerLinks = [
    { index: 1, name: "Home", link: "#home" },
    { index: 2, name: "About Us", link: "#about" },
    { index: 3, name: "Team", link: "#team" },
    { index: 4, name: "Contact Us", link: "#contact" },
  ];
  // The PDEU ACM Student Chapter is an official open student body under the
  // aegis of the Student Technical Council, PDEU.
  return (
    <section className="text-white pt-5 px-20">
      <div className="flex flex-col items-center justify-center">
        <ul className="hidden md:flex items-center justify-center space-x-5">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.index}>
              <a href={footerLink.link}>{footerLink.name}</a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center space-x-5 my-10">
          {/* <li className="">
            <a target={"_blank"} href="http://www.facebook.com">
              <BsFacebook
                className="hover:scale-125 transition-all duration-200 ease-in-out"
                color="white"
                size={30}
              />
            </a>
          </li> */}
          <li className="">
            <a target={"_blank"} href="https://www.instagram.com/acm_pdeu/">
              <BsInstagram
                className="hover:scale-125 transition-all duration-200 ease-in-out"
                color="white"
                size={30}
              />
            </a>
          </li>
          <li className="">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/company/acm-pdeu-student-chapter"
            >
              <BsLinkedin
                className="hover:scale-125 transition-all duration-200 ease-in-out"
                color="white"
                size={30}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
