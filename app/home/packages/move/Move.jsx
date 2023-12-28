import { CgCheckO } from 'react-icons/cg';
import { IoMdArrowDropright } from "react-icons/io";
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-3.jpeg';



const Move = () => {
    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">Move In / Move Out</h2>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>90mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>3 guys</span></li>
                                        <li>Booking : <span>2 days in advance</span></li>
                                        <li>Budget : <span>$450+</span></li>
                                        <li className=''>Cleaning Items :
                                            <div>
                                                <p>
                                                    <a className="fs-6 fw-normal px-3 mt-3" data-bs-toggle="collapse" href="#livingCollapse" role="button" aria-expanded="false" aria-controls="livingCollapse">
                                                        Living Areas<IoMdArrowDropright size='20px' />

                                                    </a>
                                                </p>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="collapse multi-collapse mb-0" id="livingCollapse">
                                                            <div className="card card-body items px-3 py-0 mt-0 mb-4">
                                                                <span className='fs-6 fw-light'>
                                                                    <CgCheckO color='#076034' /> Dust and wipe surfaces <br />
                                                                    <CgCheckO color='#076034' /> Sweep and mop floors <br />
                                                                    <CgCheckO color='#076034' /> Vacuum carpets <br />
                                                                    <CgCheckO color='#076034' /> Clean mirrors <br />
                                                                    <CgCheckO color='#076034' /> Dust furniture <br />
                                                                    <CgCheckO color='#076034' /> Clean hallways and staircases <br />
                                                                    <CgCheckO color='#076034' /> Empty bins <br />
                                                                    <CgCheckO color='#076034' /> Clean baseboards <br />
                                                                    <CgCheckO color='#076034' /> Clean under furniture <br />
                                                                    <CgCheckO color='#076034' /> Wipe window sills <br />
                                                                    <CgCheckO color='#076034' /> Clean window frames <br />
                                                                    <CgCheckO color='#076034' /> Wipe door frames <br />
                                                                    <CgCheckO color='#076034' /> Spot clean walls <br />
                                                                    <CgCheckO color='#076034' /> Clean and wipe vents <br />
                                                                    <CgCheckO color='#076034' /> Dust ceiling and fans <br />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <a className="fs-6 fw-normal px-3" data-bs-toggle="collapse" href="#kitchenCollapse" role="button" aria-expanded="false" aria-controls="kitchenCollapse">
                                                        Kitchen Cleaning<IoMdArrowDropright size='20px' />

                                                    </a>
                                                </p>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="collapse multi-collapse mb-0" id="kitchenCollapse">
                                                            <div className="card card-body items px-3 py-0 mt-0 mb-4">
                                                                <span className='fs-6 fw-light'>
                                                                    <CgCheckO color='#076034' /> Dust and wipe table-top surfaces <br />
                                                                    <CgCheckO color='#076034' /> Clean and shine sink <br />
                                                                    <CgCheckO color='#076034' /> Sweep and mop floors <br />
                                                                    <CgCheckO color='#076034' /> Clean appliance exteriors <br />
                                                                    <CgCheckO color='#076034' /> Clean stovetop <br />
                                                                    <CgCheckO color='#076034' /> Empty bins <br />
                                                                    <CgCheckO color='#076034' /> Clean microwave interior <br />
                                                                    <CgCheckO color='#076034' /> Clean kitchen baseboards <br />
                                                                    <CgCheckO color='#076034' /> Wipe and clean backsplash <br />
                                                                    <CgCheckO color='#076034' /> Spot clean walls <br />
                                                                    <CgCheckO color='#076034' /> Clean behind appliances <br />
                                                                    <CgCheckO color='#076034' /> Clean range hood <br />
                                                                    <CgCheckO color='#076034' /> Clean and wipe vents <br />
                                                                    <CgCheckO color='#076034' /> Dust ceiling
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    <a className="fs-6 fw-normal mb-0 px-3" data-bs-toggle="collapse" href="#bathroomCollapse" role="button" aria-expanded="false" aria-controls="bathroomCollapse">
                                                        Bathroom Cleaning<IoMdArrowDropright size='20px' />

                                                    </a>
                                                </p>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="collapse multi-collapse" id="bathroomCollapse">
                                                            <div className="card card-body items px-3 py-0">
                                                                <span className='fs-6 fw-light'>
                                                                    <CgCheckO color='#076034' /> Wipe and sanitize all surfaces <br />
                                                                    <CgCheckO color='#076034' /> Clean and shine sink <br />
                                                                    <CgCheckO color='#076034' /> Clean mirrors <br />
                                                                    <CgCheckO color='#076034' /> Clean and sanitize toilets <br />
                                                                    <CgCheckO color='#076034' /> Sweep and mop floors <br />
                                                                    <CgCheckO color='#076034' /> Clean shower faucets <br />
                                                                    <CgCheckO color='#076034' /> Clean and scrub tub <br />
                                                                    <CgCheckO color='#076034' /> Empty bins <br />
                                                                    <CgCheckO color='#076034' /> Clean bathroom baseboards <br />
                                                                    <CgCheckO color='#076034' /> Clean doors and cabinet exteriors <br />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-service-details">
                                <p className="mb-30">Introducing The Neat Guys – your premier cleaning partner dedicated to simplifying the moving process for homeowners, landlords, and business owners in the Greater Toronto Area. We understand that moving can be a stressful endeavor for everyone involved, and that's why we're here to alleviate the pressure and workload associated with the transition. Our customizable cleaning services are tailored to meet your specific requirements and specifications, ensuring a seamless and spotless experience.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} alt='project detail photo' />
                                </div>
                                <p className="mb-1">Whether you're moving in or out, our dedicated team at The Neat Guys is committed to providing top-notch Move Cleaning Services that go beyond the surface. Our seasoned, insured, and vetted cleaning professionals, comprised of 3 skilled individuals, will tackle every nook and cranny of your space. With a duration of 90 minutes per 1000 square feet, our efficient and thorough cleaning process guarantees a meticulous result. To make your experience even more convenient, we offer the flexibility to book our services two days in advance. With The Neat Guys, you can focus on the excitement of your new chapter while we handle the cleaning, making your move a smooth and enjoyable experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Move;