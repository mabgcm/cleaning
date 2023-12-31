import { CgCheckO } from 'react-icons/cg';
import { IoMdArrowDropright } from "react-icons/io";
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-5.jpeg';
import Items from './Items';
import BookNow from 'app/components/BookNow';



const OneTime = () => {

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
                <CgCheckO color='#076034' /> Clean under furniture <br />
                <CgCheckO color='#076034' /> Wipe window sills <br />
                <CgCheckO color='#076034' /> Clean window frames <br />
                <CgCheckO color='#076034' /> Wipe door frames <br />

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
                <CgCheckO color='#076034' /> Empty bins <br />
                <CgCheckO color='#076034' /> Clean kitchen baseboards <br />
                <CgCheckO color='#076034' /> Wipe and clean backsplash <br />
                <CgCheckO color='#076034' /> Clean behind appliances <br />
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
                <CgCheckO color='#076034' /> Empty bins <br />
                <CgCheckO color='#076034' /> Clean bathroom baseboards <br />
                <CgCheckO color='#076034' /> Clean doors and cabinet exteriors
            </span>
        </div>
    );


    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">One-Time Cleaning</h2>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>70mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>1-2 guys</span></li>
                                        <li>Booking : <span>1 days in advance</span></li>
                                        <li>Budget : <span>$170+</span></li>
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
                                <p className="mb-30">Embrace the chaos of life without sacrificing the cleanliness of your home with The Neat Guys – your go-to solution for one-time house cleaning in Barrie, Orillia & Innisfil. Life's demands can be overwhelming, whether it's hosting family or friends, celebrating special occasions like birthdays or showers, or simply feeling the weight of daily responsibilities. At The Neat Guys, we offer flexible cleaning times and customizable one-time cleaning services tailored to your specific needs and budget.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} className='images' alt='project detail photo' />
                                </div>
                                <p className="mb-1">Moving, planning a party, or just in need of a refreshing deep clean? Invest in The Neat Guys' one-time house cleaning service to bring your home back to its pristine condition. Our professional team understands the challenges of finding time for yourself amid distractions and responsibilities. If the thought of cleaning becomes an added stress, give us a call for a break without committing to a recurring service. Whether it's post-party cleanup or rejuvenating your space, our reliable team at The Neat Guys has you covered, ensuring a win-win situation for a clean and stress-free home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OneTime;