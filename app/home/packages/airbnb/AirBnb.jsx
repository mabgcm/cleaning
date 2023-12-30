import { CgCheckO } from 'react-icons/cg';
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-2.webp';
import Items from './Items';
import BookNow from 'app/components/BookNow';




const AirBNB = () => {

    const itemStyle = {
        paddingBottom: '20px',
    };

    const livingAreasContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light mr-3'>
                <CgCheckO color='#076034' /> Dust and wipe surfaces <br />
                <CgCheckO color='#076034' /> Sweep and mop floors <br />
                <CgCheckO color='#076034' /> Vacuum carpets <br />
                <CgCheckO color='#076034' /> Clean mirrors <br />
                <CgCheckO color='#076034' /> Dust furniture <br />
                <CgCheckO color='#076034' /> Empty bins <br />

            </span>
        </div>
    );

    const kitchenCleaningContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#076034' /> Dust and wipe table-top surfaces <br />
                <CgCheckO color='#076034' /> Clean and shine sink <br />
                <CgCheckO color='#076034' /> Sweep and mop floors <br />
                <CgCheckO color='#076034' /> Clean appliance exteriors <br />
                <CgCheckO color='#076034' /> Clean stovetop <br />
                <CgCheckO color='#076034' /> Empty bins
            </span>
        </div>
    );

    const bathroomCleaningContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#076034' /> Wipe all surfaces <br />
                <CgCheckO color='#076034' /> Clean and shine sink <br />
                <CgCheckO color='#076034' /> Clean mirrors <br />
                <CgCheckO color='#076034' /> Clean the toilets <br />
                <CgCheckO color='#076034' /> Sweep and mop floors <br />
                <CgCheckO color='#076034' /> Clean shower faucets <br />
                <CgCheckO color='#076034' /> Clean and scrub tub <br />
                <CgCheckO color='#076034' /> Empty bins
            </span>
        </div>
    );

    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">AirBNB Cleaning</h2>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>60mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>1 guy</span></li>
                                        <li>Booking : <span>1 days in advance</span></li>
                                        <li>Budget : <span>From $110</span></li>
                                        <li className=''>Cleaning Items :

                                            <Items title="Living Areas" content={livingAreasContent} />
                                            <Items title="Kitchen" content={kitchenCleaningContent} />
                                            <Items title="Bathroom/Washrooms" content={bathroomCleaningContent} />

                                        </li>
                                    </ul>
                                    <BookNow />
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-service-details">
                                <p className="mb-30">Elevate the appeal of your Airbnb property and cater to the dynamic demands of hosting with The Neat Guys – your trusted partner for one-time Airbnb cleaning services in Barrie, Orillia & Innisfil. Life can get hectic, especially when managing short-term rentals with constant turnover. Whether welcoming new guests, preparing for a special occasion, or simply seeking a thorough refresh, The Neat Guys offer flexible cleaning schedules and tailored one-time services designed to meet your unique hosting needs.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} className='images' alt='project detail photo' />
                                </div>
                                <p className="mb-1">Our dedicated team understands the challenges of maintaining a pristine Airbnb space amidst the hustle and bustle. Investing in The Neat Guys' one-time cleaning ensures that your property is consistently inviting and impeccably clean, leaving a positive impression on every guest. Say goodbye to the stress of post-checkout cleanups – our reliable team takes care of the details, from thorough cleanings to managing the aftermath of celebrations. With The Neat Guys, hosting becomes a seamless and enjoyable experience, allowing you to focus on providing a welcoming atmosphere for your guests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AirBNB;