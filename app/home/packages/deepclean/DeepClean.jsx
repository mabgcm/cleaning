import { CgCheckO } from 'react-icons/cg';

const DeepCleaning = () => {
    return (
        <>
            <section className="tp-services-details-area pt-20 pb-40">
                <div className="container">
                    <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">Deep Cleaning</h2>

                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="tp-faqs-left">
                                <div className="tp-faqs-left-sidebar mb-30">
                                    <h4 className="tp-faqs-left-sidebar-title">Service Details</h4>
                                    <ul>
                                        <li>Duration : <span>70mins/1000sqft</span></li>
                                        <li>Cleaning Staff : <span>2-3 guys</span></li>
                                        <li>Booking : <span>2 days in advance</span></li>
                                        <li>Budget : <span>$450+</span></li>
                                        <li>Cleaning Items : <span ><br /><CgCheckO color='#076034' /> Carpets <br /> <CgCheckO color='#076034' /> Uncarpeted areas <br /><CgCheckO color='#076034' /> Kitchen <br /><CgCheckO color='#076034' /> Bathrooms <br /><CgCheckO color='#076034' /> Windows <br /><CgCheckO color='#076034' /> Door frames <br /><CgCheckO color='#076034' /> Windowsills <br /><CgCheckO color='#076034' /> Behing home appliances <br /><CgCheckO color='#076034' /> Under the furnitures <br /></span></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="tp-service-details">
                                <p className="mb-30">Discover the Neat Guys – your ultimate Canadian clean team, specially crafted for homeowners, landlords, and business owners who dream of impeccably clean spaces. We're on a mission to transform your home, reaching every hidden corner beneath furniture, behind appliances, and those easy-to-forget spots like baseboards and window sills. If you don't absolutely love our service, we'll keep cleaning until it's nothing short of perfection. Elevate your space with the Neat Guys – because your satisfaction is our inspiration!</p>
                                <div className="tp-service-details-img mb-30 position-relative">
                                    <img src="https://rocketmaidsla.com/wp-content/uploads/2019/10/deep-cleaning-services.jpg" alt='project detail photo' />
                                </div>
                                <p className="mb-1">Our dynamic cleaning team comprises 2-3 dedicated individuals, ensuring a swift and thorough transformation of your space. To secure your spot on our schedule, simply book us two days in advance for a hassle-free experience. When it comes to the nitty-gritty details, rest assured that our cleaning arsenal is equipped to handle various surfaces, including carpets, uncarpeted areas, kitchens, bathrooms, windows, door frames, and windowsills. We leave no stone unturned, reaching behind home appliances and delving beneath furniture to guarantee a comprehensive clean that exceeds your expectations. Trust the Neat Guys to bring a new level of cleanliness to every corner of your home or business!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DeepCleaning;