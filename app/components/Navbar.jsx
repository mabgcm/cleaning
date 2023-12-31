'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import logo from '../../public/assets/img/logo/logo.png'
import { CgMenuGridR } from "react-icons/cg";






const Header = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.js');
    }, []);

    const linkStyle = {
        textTransform: 'capitalize',
        color: '#ffde59',
        fontWeight: '400',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
        cursor: 'pointer',
        ':hover': {
            color: 'red',
        },
    };

    return (
        <div className='navbar mt-0 pt-0'>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#075F33', width: '100%' }}>
                <div className="d-flex align-items-center justify-content-between flex-grow-1 m-auto">
                    <div className="col-sm-10 col-md-9 col-lg-4">
                        <div>
                            <div className="header-logo text-center">
                                <Link href="/">
                                    <Image src={logo} className="img-fluid" width='300' height='100' priority={false} alt="logo not found" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end col-sm-2 col-md-3 col-lg-8" style={{ paddingRight: '40px' }}>
                        <div className="row">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className=""><CgMenuGridR size='40' />
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav d-flex justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="/" style={linkStyle}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/home/about" style={linkStyle}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/home/services" style={linkStyle}>
                                            Packages
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/home/process" style={linkStyle}>
                                            How to Book
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/home/estimate" style={linkStyle}>
                                            Booking
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="https://1p4xmivg22g.typeform.com/to/UAgIsazI" target='_blank' style={linkStyle}>
                                            Join Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/home/contact" style={linkStyle}>
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="tp-footer-info-social mx-4">
                                            <a href="https://www.facebook.com/neatguys.ca"><i><FaFacebookF className='icon' /> </i></a>
                                            <a href="https://www.instagram.com/neatguys.ca"><i><BsInstagram className='icon' /> </i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className='announce d-flex justify-content-start align-items-center'>
                <p className='text-end'>Mon-Fri: 09:30-18:00</p>
            </div> */}
        </div>
    );
};

export default Header;
