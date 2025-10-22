import { CgCheckO } from 'react-icons/cg';
import { IoMdArrowDropright } from "react-icons/io";
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-3.jpeg';
import Items from './Items';
import BookNow from 'app/components/BookNow';



const Move = () => {

    const itemStyle = {
        paddingBottom: '20px',
    };

    const livingAreasContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#0071A8' /> Dust and wipe surfaces <br />
                <CgCheckO color='#0071A8' /> Sweep and mop floors <br />
                <CgCheckO color='#0071A8' /> Vacuum carpets <br />
                <CgCheckO color='#0071A8' /> Clean mirrors <br />
                <CgCheckO color='#0071A8' /> Dust furniture <br />
                <CgCheckO color='#0071A8' /> Clean hallways and staircases <br />
                <CgCheckO color='#0071A8' /> Empty bins <br />
                <CgCheckO color='#0071A8' /> Clean steam <br />
                <CgCheckO color='#0071A8' /> Clean under furniture <br />
                <CgCheckO color='#0071A8' /> Wipe window sills <br />
                <CgCheckO color='#0071A8' /> Clean window frames <br />
                <CgCheckO color='#0071A8' /> Wipe door frames <br />
                <CgCheckO color='#0071A8' /> Spot clean walls <br />
                <CgCheckO color='#0071A8' /> Clean and wipe vents <br />
                <CgCheckO color='#0071A8' /> Dust ceiling and fans <br />
            </span>
        </div>
    );

    const kitchenCleaningContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#0071A8' /> Dust and wipe table-top surfaces <br />
                <CgCheckO color='#0071A8' /> Clean and shine sink <br />
                <CgCheckO color='#0071A8' /> Sweep and mop floors <br />
                <CgCheckO color='#0071A8' /> Clean appliance exteriors <br />
                <CgCheckO color='#0071A8' /> Clean stovetop <br />
                <CgCheckO color='#0071A8' /> Empty bins <br />
                <CgCheckO color='#0071A8' /> Clean microwave interior <br />
                <CgCheckO color='#0071A8' /> Clean kitchen steam <br />
                <CgCheckO color='#0071A8' /> Wipe and clean backsplash <br />
                <CgCheckO color='#0071A8' /> Spot clean walls <br />
                <CgCheckO color='#0071A8' /> Clean behind appliances <br />
                <CgCheckO color='#0071A8' /> Clean range hood <br />
                <CgCheckO color='#0071A8' /> Clean and wipe vents <br />
                <CgCheckO color='#0071A8' /> Dust ceiling
            </span>
        </div>
    );

    const bathroomCleaningContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#0071A8' /> Wipe and sanitize all surfaces <br />
                <CgCheckO color='#0071A8' /> Clean and shine sink <br />
                <CgCheckO color='#0071A8' /> Clean mirrors <br />
                <CgCheckO color='#0071A8' /> Clean and sanitize toilets <br />
                <CgCheckO color='#0071A8' /> Sweep and mop floors <br />
                <CgCheckO color='#0071A8' /> Clean shower faucets <br />
                <CgCheckO color='#0071A8' /> Clean and scrub tub <br />
                <CgCheckO color='#0071A8' /> Empty bins <br />
                <CgCheckO color='#0071A8' /> Clean bathroom steam <br />
                <CgCheckO color='#0071A8' /> Clean doors and cabinet exteriors <br />
            </span>
        </div>
    );
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
                                        <li>Budget : <span>$210+</span></li>
                                        <li className=''>Cleaning Items :
                                            <Items title="Living Areas" content={livingAreasContent} />
                                            <Items title="Kitchen Cleaning" content={kitchenCleaningContent} />
                                            <Items title="Bathroom Cleaning" content={bathroomCleaningContent} />
                                        </li>
                                    </ul>
                                    <BookNow />
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-service-details">
                                <p className="mb-30">Introducing Brinova – your premier cleaning partner dedicated to simplifying the moving process for homeowners, landlords, and business owners in the Greater Toronto Area. We understand that moving can be a stressful endeavor for everyone involved, and that's why we're here to alleviate the pressure and workload associated with the transition. Our customizable cleaning services are tailored to meet your specific requirements and specifications, ensuring a seamless and spotless experience.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} className='images' alt='project detail photo' />
                                </div>
                                <p className="mb-1">Whether you're moving in or out, our dedicated team at Brinova is committed to providing top-notch Move Cleaning Services that go beyond the surface. Our seasoned, insured, and vetted cleaning professionals, comprised of 3 skilled individuals, will tackle every nook and cranny of your space. With a duration of 90 minutes per 1000 square feet, our efficient and thorough cleaning process guarantees a meticulous result. To make your experience even more convenient, we offer the flexibility to book our services two days in advance. With Brinova, you can focus on the excitement of your new chapter while we handle the cleaning, making your move a smooth and enjoyable experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Move;