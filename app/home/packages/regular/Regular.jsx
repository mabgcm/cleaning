import { CgCheckO } from 'react-icons/cg';
import { IoMdArrowDropright } from "react-icons/io";
import Image from 'next/image';
import img from '../../../../public/assets/img/service/service-6.jpeg';
import Items from './Items';
import BookNow from 'app/components/BookNow';




const Regular = () => {

    const itemStyle = {
        paddingBottom: '20px',
    };

    const livingAreasContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light mr-3'>
                <CgCheckO color='#0071A8' /> Dust and wipe surfaces <br />
                <CgCheckO color='#0071A8' /> Sweep and mop floors <br />
                <CgCheckO color='#0071A8' /> Vacuum carpets <br />
                <CgCheckO color='#0071A8' /> Clean mirrors <br />
                <CgCheckO color='#0071A8' /> Dust furniture <br />
                <CgCheckO color='#0071A8' /> Empty bins <br />
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
                <CgCheckO color='#0071A8' /> Empty bins
            </span>
        </div>
    );

    const bathroomCleaningContent = (
        <div style={itemStyle}>
            <span className='fs-6 fw-light'>
                <CgCheckO color='#0071A8' /> Wipe all surfaces <br />
                <CgCheckO color='#0071A8' /> Wipe all surfaces <br />
                <CgCheckO color='#0071A8' /> Clean and shine sink <br />
                <CgCheckO color='#0071A8' /> Clean mirrors <br />
                <CgCheckO color='#0071A8' /> Clean the toilets <br />
                <CgCheckO color='#0071A8' /> Sweep and mop floors <br />
                <CgCheckO color='#0071A8' /> Clean shower faucets <br />
                <CgCheckO color='#0071A8' /> Clean and scrub tub <br />
                <CgCheckO color='#0071A8' /> Empty bins
            </span>
        </div>
    );
    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">Regular Cleaning</h2>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>60mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>1-2 guys</span></li>
                                        <li>Booking : <span>1 days in advance</span></li>
                                        <li>Budget : <span>From $150+</span></li>
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
                                <p className="mb-30">At Brinova, we redefine the standard for routine cleaning, offering a comprehensive and meticulous service to upkeep your home seamlessly. Dream of walking into an immaculate home without the hassle? Look no further. Our regular maid cleaning service ensures your space is transformed into a spotless haven by our dedicated and professional cleaners. From strategizing the cleaning process to swiftly removing dirt, sanitizing, vacuuming, and Swiffering, our team meticulously attends to every detail. Our standard cleaning package includes one bathroom, kitchen, common room, and selected bedroom(s), with the option to add more as needed. Brinova provide all cleaning supplies for free, ensuring a hassle-free experience for our clients. Our customizable cleaning plans cater to your unique lifestyle, offering weekly, bi-weekly, every 3 weeks, or monthly maid services to fit seamlessly into your routine.

                                </p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <Image src={img} className='images' alt='project detail photo' />
                                </div>
                                <p className="mb-1">Forget the stress of cleaning after a long day; let Brinova take care of the dirty work for you. Whether you opt for our weekly, bi-weekly, or monthly services, we've got you covered. Picture walking into a sparkling clean home without lifting a finger, and that's the reality we bring to our clients. With our adaptable services, we understand that time is precious, and our goal is to free you up to create memories with your loved ones. Choose Brinova for a systematic and professional approach to cleaning, ensuring every nook and cranny receives the attention it deserves. Give us a call today to experience the joy of a consistently clean and organized living space tailored to your unique needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Regular;