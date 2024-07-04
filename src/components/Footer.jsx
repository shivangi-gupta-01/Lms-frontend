import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer(){

    const newDate = new Date();
    const year = newDate.getFullYear();

    return (
        <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between py-5 sm:px-20 text-white bg-[#000000]">
            <section className="text-lg">
            Contact Us : 1234shivangigupta@gmail.com
            </section>

            <section className="flex items-center justify-center gap-5 text-2xl text-white">
            <Link className="hover:text-yellow-400 transition-all ease-in-out duration-300" href="https://www.instagram.com/shivangi_gupta01_/" target="__blank"> <BsInstagram /> </Link>
            <Link className="hover:text-yellow-400 transition-all ease-in-out duration-300" href="https://www.linkedin.com/in/shivangi-gupta-46a974250/" target="__blank"> <BsLinkedin /> </Link>
            <Link className="hover:text-yellow-400 transition-all ease-in-out duration-300" href="https://github.com/shivangi-gupta-01" target="__blank"> <BsGithub /> </Link>
            </section>
        </footer>
    )
}

export default Footer;