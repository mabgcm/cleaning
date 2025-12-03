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
                                href="/home/contact"
                                className={`nav-links ${currentPath === '/home/contact' ? 'active' : ''}`}
                                onClick={handleClick}
                            >
                                Contact
                            </Link>
                        </li>

                        <li className="tp-footer-info-social mb-2">
                            <Link
                                href="https://www.facebook.com/share/19wNWm5h3m/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    backgroundColor: '#0071A8',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#7acbf2'; // hover background
                                    e.currentTarget.style.color = '#fff';               // keep icon white
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#0071a8'; // reset
                                    e.currentTarget.style.color = '#fff';
                                }}
                            >
                                <FaFacebookF size={18} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/brinovacleaning"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    backgroundColor: '#0071a8', // default green
                                    color: '#fff',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    marginLeft: '6px', // small spacing from FB icon
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#7acbf2'; // hover background
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#0071a8'; // reset background
                                    e.currentTarget.style.color = '#fff';
                                }}
                            >
                                <BsInstagram size={18} />
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
