"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/navbar-imgs/logo-img.svg";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import dropDownIcon from "@/assets/navbar-imgs/dropDown-icon.png";
// import { useBookDemo } from "@/app/(components)/(CommonComponents)/BookDemo/BookDemoContext";

const navLinks = [
    { label: "Pricing", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
];

const industries = [
    { label: "Legal Services", href: "#" },
    { label: "Vehicle Services", href: "#" },
    { label: "Technicians", href: "#" },
    { label: "Home Services", href: "#" },
    { label: "Clinics", href: "#" },
    { label: "Solar Services", href: "#" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const path = usePathname();

    // const { openModal } = useBookDemo();

    return (
        <header className="relative w-full border-b border-[#e5e7eb] bg-white">
            <nav className="flex w-full items-center justify-between px-4 py-5 sm:px-6 md:px-10 xl:px-16">
                <Link href="/" className="flex items-center">
                    <Image
                        src={logo}
                        alt="Workconnect.ai-logo"
                        width={160}
                        height={40}
                        className="w-[120px] sm:w-[150px] md:w-[180px]"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden flex-1 justify-center lg:flex">
                    <ul className="flex items-center gap-7 text-base text-[#6b7280]">
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                className={link.label === "Industries" ? "group relative" : ""}
                            >
                                {link.label === "Industries" ? (
                                    <>
                                        <button
                                            type="button"
                                            className="flex items-center gap-2 text-[var(--text-dark-gray)] transition hover:text-primary hover:font-semibold cursor-pointer"
                                        >
                                            Industries
                                            <Image
                                                src={dropDownIcon}
                                                alt="dropdown icon"
                                                width={12}
                                                height={12}
                                                className="transition-transform duration-300 group-hover:rotate-180 hover:text-primary hover:font-semibold cursor-pointer"
                                            />
                                        </button>

                                        <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[680px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white opacity-0 shadow-[0px_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                            <div className="border-b border-[#eeeeee] px-6 py-4">
                                                <h4 className="text-sm font-semibold text-[#777777]">
                                                    All Industries
                                                </h4>
                                            </div>

                                            <div className="grid grid-cols-3 gap-y-8 px-6 py-5">
                                                {industries.map((industry) => (
                                                    <Link
                                                        key={industry.label}
                                                        href={industry.href}
                                                        className="text-base text-[#666666] transition hover:text-primary hover:font-semibold"
                                                    >
                                                        {industry.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`transition-colors ${path === link.href
                                                ? "font-semibold text-primary hover:font-semibold"
                                                : "text-[var(--text-dark-gray)] hover:text-primary hover:font-semibold"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-3 sm:flex">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full font-semibold border-2 border-tw-primary px-5 py-2 text-base text-tw-black transition hover:border-[#656565]"
                    >
                        Signup
                    </Link>

                    <button
                        type="button"
                        // onClick={() => openModal()}
                        className="min-w-[122px] rounded-lg bg-tw-black px-5 py-2 text-base font-medium text-white transition hover:bg-black cursor-pointer"
                    >
                        Book a Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="text-3xl lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`w-full overflow-hidden border-t border-[#e5e7eb] bg-white transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[750px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col gap-4 px-4 py-3 text-center text-[14px] text-[#6b7280]">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            {link.label === "Industries" ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => setIndustriesOpen(!industriesOpen)}
                                        className="mx-auto flex items-center justify-center gap-2 text-[14px] text-[var(--text-dark-gray)]"
                                    >
                                        Industries
                                        <Image
                                            src={dropDownIcon}
                                            alt="dropdown icon"
                                            width={12}
                                            height={12}
                                            className={`transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {industriesOpen && (
                                        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 py-4">
                                            {industries.map((industry) => (
                                                <Link
                                                    key={industry.label}
                                                    href={industry.href}
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        setIndustriesOpen(false);
                                                    }}
                                                    className="text-sm text-[#666666]"
                                                >
                                                    {industry.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`transition-colors ${path === link.href
                                            ? "font-semibold text-[var(--text-black)]"
                                            : "text-[var(--text-dark-gray)] hover:text-[var(--text-black)]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Buttons */}
                <div className="flex flex-col gap-4 px-4 pb-4 sm:hidden">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center w-full rounded-full font-semibold border-2 border-tw-primary px-5 py-2 text-base text-tw-black transition hover:border-[#656565]"
                    >
                       
                        Sign Up
                    </Link>

                    <button
                        type="button"
                        // onClick={() => openModal()}
                        className="w-full rounded-lg bg-tw-black px-5 py-2 text-base font-medium text-white transition hover:bg-black cursor-pointer"
                    >
                        Book a Demo
                    </button>
                </div>
            </div>
        </header>
    );
}
