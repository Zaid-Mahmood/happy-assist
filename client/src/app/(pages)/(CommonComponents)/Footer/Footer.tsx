import Image from "next/image";
import footerBg from "@/assets/footer-imgs/footer-bg.png";
import { FaArrowRight } from "react-icons/fa";
import logoImg from "@/assets/footer-imgs/logo.svg";
import fbImg from "@/assets/footer-imgs/fb.png";
import instaImg from "@/assets/footer-imgs/insta.png";
import tiktokImg from "@/assets/footer-imgs/tiktok.png";
import linkedin from "@/assets/footer-imgs/linkedin.png";
import Link from "next/link";
const Footer = () => {
  const socialIcons = [
    { icon: instaImg, label: "Instagram", href: "#" },
    { icon: linkedin, label: "LinkedIn", href: "#" },
    { icon: fbImg, label: "Facebook", href: "#" },
    { icon: tiktokImg, label: "X", href: "#" },
  ];
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Pricing", href: "/pricing/" },
    { title: "Industries", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact Us", href: "#" },
  ];
  const industriesLinks = [
    { title: "Legal Services", href: "#" },
    { title: "Vehicle Services", href: "#" },
    { title: "Technicians", href: "#" },
    { title: "Home Services", href: "#" },
    { title: "Clinics", href: "#" },
    { title: "Solar Services", href: "#" },
  ];
  return (
    <footer className="relative h-full overflow-hidden mt-3 md:mt-13">
      <Image
        src={footerBg}
        alt="Footer-background"
        fill
        className="relative object-cover z-20"
      />
      <div className="relative z-50 px-5 md:px-16 md:pt-13">
        <div className="text-center max-w-[774px] mx-auto pb-16 md:pb-[104px]">
          <h2 className="text-tw-black text-3xl md:text-6xl font-heading font-semibold">
           Change “Busy! Will Call You Later” To “Let’s Connect”
          </h2>
          <p className="pt-3 text-tw-lightgray text-base md:text-xl pb-6 md:pb-11">
          HappyAssist will help you to scale your business even when you and your team members are offline. This will allow you to stay present for your customers, always building trust and satisfaction.
          </p>
          <div className="flex gap-x-2 justify-center">
            <button
              type="button"
              // onClick={handlePrimaryClick}
              className="group flex h-[42px] w-full items-center justify-center gap-2 rounded-full border border-secondary px-5 text-base font-semibold text-secondary transition-all duration-300 hover:bg-[#004466] text-white sm:w-fit cursor-pointer bg-primary"
            >
             Get Started
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary bg-white transition-colors duration-300">
                <FaArrowRight className="text-[10px] text-primary transition-transform duration-300 group-hover:translate-x-[1px]" />
              </span>
            </button>
            <button
              type="button"
              // onClick={handlePrimaryClick}
              className="group flex h-[42px] w-full items-center justify-center gap-2 rounded-full border border-[#262626] px-5 text-base font-semibold text-[#262626] transition-all duration-300 hover:bg-black hover:bg-black/5 sm:w-fit cursor-pointer"
            >
              Book a Demo
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-text-[#262626]  bg-white transition-colors duration-300">
                <FaArrowRight className="text-[10px] text-[#262626] transition-transform duration-300 group-hover:translate-x-[1px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-50 p-7 mx-5 md:mx-7 md:px-11  md:mx-11 md:mb-13 mb-6 bg-tw-blue rounded-[40px]">
        <div className="bg-[#FFE566] w-full rounded-[20px] mb-6">
          <div className="flex flex-col md:flex-row items-center py-4 px-4 md:p-11">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
                <div className="w-full md:max-w-[70%] text-center md:text-left">
                  <h3 className="text-primary font-bold leading-tight text-base md:text-3xl">
                    Subscribe To Our Newsletter
                  </h3>

                  <p className="text-primary mt-2 text-xs md:text-base md:pb-0 pb-2">
                    Be the first one to receive updates, tips and more
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-2 rounded-full text-xs sm:text-sm outline-none bg-white  placeholder:text-text-secondary text-black"
                />

                <button className="px-5 py-2 bg-primary text-text-blue-primary rounded-full text-xs md:text-base whitespace-nowrap text-white hover:bg-[#004466] cursor-pointer">
                  Subscribe
                </button>
              </div>

              <p className="md:text-[13px] text-xs text-center md:text-start text-primary">
                Stay Ahead with AI Insights. Get updates, strategies, and tips to grow your business with automation.
              </p>
            </div>
          </div>
        </div>
        <hr className="text-[#BDBDBD] w-full" />
        <div className="pt-6 font-body">
          <div className="flex flex-col md:flex-row md:justify-between justify-center gap-5 md:gap-10">
            <div className="flex flex-col items-center gap-7 md:gap-11">
              <Image
                src={logoImg}
                alt="Happy Assist Logo"
                width={220}
                height={60}
              />

              <div className="flex items-center gap-6">
                {socialIcons.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex items-center justify-center rounded hover:opacity-80 transition"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-col items-center gap-y-4 md:gap-y-0 md:items-start flex md:flex-row md:gap-x-20">
              <div>
                <h4 className="font-medium text-xl text-tw-black font-body mb-3 text-center md:text-left">Industries</h4>

                <ul className="space-y-2 text-sm md:text-base text-center md:text-left text-base text-[#5C5C5C]">
                  {industriesLinks.map((item, id) => (
                    <li key={id}>
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-medium text-xl font-body text-tw-black mb-3 text-center md:text-left">Links</h4>
                <ul className="space-y-2 text-sm md:text-base text-[#5C5C5C] text-center md:text-left">
                  {footerLinks.map((item, id) => (
                    <li key={id}>
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-6 border-t border-[#BDBDBD] pt-4">
            <p className="text-center text-xs text-[#8B8B8B]">
              Copyright © 2026 HappyAssist. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

