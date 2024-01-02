'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import "../../public/assets/css/navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import logo from '../../public/assets/img/logo/logo.png';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';



function NavBar2() {
    const [click, setClick] = useState(false);
    const currentPath = usePathname();
    const handleClick = () => setClick(!click);

    const isActiveLink = (href) => {
        return window.location.pathname === href;
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link exact href="/" className="nav-logo">
                        <Image src={logo} className="img-fluid" width='300' height='100' priority={false} alt="logo not found" />
                    </Link>

                    <ul className={click ? 'nav-menu active centered' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link href="/" className={`nav-links ${currentPath === '/' ? 'active' : ''}`} onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href="/home/about"
                                className={`nav-links ${currentPath === '/home/about' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href="/home/services"
                                className={`nav-links ${currentPath === '/home/services' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                Packages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href="/home/process"
                                className={`nav-links ${currentPath === '/home/process' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                How To Book
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href="https://8fu286als2z.typeform.com/to/welhawPP"
                                className={`nav-links ${currentPath === 'https://8fu286als2z.typeform.com/to/welhawPP' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                Careers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                exact
                                href="/home/contact"
                                className={`nav-links ${currentPath === '/home/contact' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                Contact
                            </Link>
                        </li>

                        <li className="tp-footer-info-social mb-2">
                            <Link href="https://www.facebook.com/neatguys.ca">
                                <i>
                                    <FaFacebookF className="iconn" />
                                </i>
                            </Link>
                            <Link href="https://www.instagram.com/neatguys.ca">
                                <i>
                                    <BsInstagram className="iconn" />
                                </i>
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icon">
                                <AiOutlineClose
                                    size='35px' />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <RiMenu3Line size='35px' />
                            </span>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar2;