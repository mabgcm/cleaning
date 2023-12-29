import { CgCheckO } from 'react-icons/cg';
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-4.jpg';
import Items from './Items';



const Office = () => {

    const itemStyle = {
        paddingBottom: '20px',
    };

    const livingAreas = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#076034' /> Dust and wipe surfaces <br />
                <CgCheckO color='#076034' /> Sweep and mop floors <br />
                <CgCheckO color='#076034' /> Vacuum carpets <br />
                <CgCheckO color='#076034' /> Clean mirrors <br />
                <CgCheckO color='#076034' /> Dust furniture <br />
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
    );

    const kitchen = (
        <div style={itemStyle}>
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
                <CgCheckO color='#076034' /> Clean and wipe vents
            </span>
        </div>
    );

    const bathroom = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#076034' /> Wipe all surfaces <br />
                <CgCheckO color='#076034' /> Clean and shine sink <br />
                <CgCheckO color='#076034' /> Clean mirrors <br />
                <CgCheckO color='#076034' /> Clean the toilets <br />
                <CgCheckO color='#076034' /> Sweep and mop floors <br />
                <CgCheckO color='#076034' /> Clean shower faucets <br />
                <CgCheckO color='#076034' /> Clean and scrub tub <br />
                <CgCheckO color='#076034' /> Empty bins <br />
                <CgCheckO color='#076034' /> Clean bathroom baseboards <br />
                <CgCheckO color='#076034' /> Clean doors and cabinet exteriors <br />
            </span>
        </div>
    );

    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">Office Cleaning</h2>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>60mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>1 guy</span></li>
                                        <li>Booking : <span>1 days in advance</span></li>
                                        <li>Budget : <span>$130+</span></li>
                                        <li className=''>Cleaning Items :
                                            <Items title="Living Areas" content={livingAreas} />
                                            <Items title="Kitchen Cleaning" content={kitchen} />
                                            <Items title="Bathroom Cleaning" content={bathroom} />
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-service-details">
                                <p className="mb-30">Welcome to The Neat Guys – your dedicated partner in providing unparalleled commercial and office cleaning services in the north of the Greater Toronto Area (GTA). Catering to businesses in this dynamic region and beyond, we pride ourselves on delivering customized solutions to meet the distinct cleaning requirements of your workspace. Our team of experienced  cleaning professionals is committed to ensuring the immaculate condition of your office, creating an environment that not only enhances productivity but also contributes to the overall well-being of your team.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} className='images' alt='project detail photo' />
                                </div>
                                <p className="mb-1">What sets The Neat Guys apart is our unwavering commitment to your satisfaction. With customizable service plans and a user-friendly online booking system, we simplify the process of meeting your cleaning needs. Our 24-hour cancellation policy reflects our dedication to accommodating your unique schedule, ensuring flexibility and convenience. Should you find any aspect of our service less than satisfactory, we pledge to revisit your premises promptly and re-clean until it surpasses your expectations. Elevate the cleanliness and professionalism of your workspace in the north of the GTA – contact The Neat Guys today for an unmatched experience in office and commercial cleaning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Office;