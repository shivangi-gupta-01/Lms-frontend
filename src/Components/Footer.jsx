import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-600 sm:px-20">
        <section className="text-lg text-red">
          Contact Us : 1234shivangigupta@gmail.com
        </section>
        <section className=" flex items-center justify-center gap-5 text-2xl text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="https://www.instagram.com/shivangi_gupta01_/" target="__blank">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="https://www.linkedin.com/in/shivangi-gupta-46a974250/" target="__blank">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="https://github.com/shivangi-gupta-01" target="__blank">
          <BsGithub />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
