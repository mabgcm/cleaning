'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.js');
    }, []);

    const linkStyle = {
        textTransform: 'capitalize'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#075F33', width: '100%' }}>
                <div className="d-flex align-items-center justify-content-between flex-grow-1 m-auto">
                    <div className="col-sm-10 col-md-9 col-lg-4">
                        <div>
                            <div className="header-logo text-center">
                                <Link href="index.html">
                                    <Image src="/assets/img/logo/logo.png" className="img-fluid" width='300' height='100' priority={false} alt="logo not found" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-around col-sm-2 col-md-3 col-lg-8 mx-3">
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
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="/" style={{ color: '#ffde59', ':hover': { color: '#000' } }}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about" style={linkStyle}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/services" style={linkStyle}>
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="recruit">
                                            Join Us
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </Link>
                                        {/* Dropdown backround */}
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                                            <li>
                                                <Link className="dropdown-item" href="/sevices/onetime" >
                                                    One-time
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/services/regular">
                                                    Regular
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/services/seasonal">
                                                    Seasonal
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/services/move">
                                                    Move-in & Move-out
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="commercial">
                                                    Commercial
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
