'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.js');
    }, []);

    const linkStyle = {
        textTransform: 'capitalize'
    }
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#075F33' }}>
                <div className="container-fluid d-flex flex-column">
                    <div className='row'>
                        <div className="col-xxl-4 col-xl-5">
                            <div className="tp-header-top-info">
                                <div className="tp-header-top-info-single">
                                    <div className="tp-header-top-info-single-icon mr-15">
                                        <i className="flaticon-email"></i>
                                    </div>
                                    <div className="tp-header-top-info-single-text">
                                        <span className="tp-header-top-info-single-label">Email us</span>
                                        <Link href="mailto:info@klenar.com" className="tp-header-top-info-single-content font-medium">info@klenar.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-2">
                            <div className="header-logo text-center">
                                <Link href="index.html"><Image src="/assets/img/logo/logo.png" className="img-fluid" width='300' height='80' priority={false} alt="logo not found" /></Link>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                            <div className="tp-header-top-info justify-content-end">
                                <div className="tp-header-top-info-single mr-85">
                                    <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="tp-header-top-info-single-text">
                                        <span className="tp-header-top-info-single-label">Hot Line</span>
                                        <Link href="tel:33388820055" className="tp-header-top-info-single-content font-medium">(437)219-6444</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/" style={{ color: '#ffde59', ':hover': { color: '#000' } }}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about" style={linkStyle}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/services" style={linkStyle}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="recruit">Join Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cleaning Services
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/sevices/onetime">One-time</Link></li>
                                        <li><Link className="dropdown-item" href="/services/regular">Regular</Link></li>
                                        <li><Link className="dropdown-item" href="/services/seasonal">Seasonal</Link></li>
                                        <li><Link className="dropdown-item" href="/services/move">Move-in & Move-out</Link></li>
                                        <li><Link className="dropdown-item" href="commercial">Commercial</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header