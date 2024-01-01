'use client'
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';



const PAYMENT_90 = 'https://buy.stripe.com/fZe4hJ4fTfj01u85kl';
const PAYMENT_100 = 'https://book.stripe.com/6oE4hJbIldaSfkY28a';
const PAYMENT_110 = 'https://book.stripe.com/7sIaG76o10o60q4bIL';
const PAYMENT_120 = 'https://book.stripe.com/4gw15x3bP1sa4Gk148';
const PAYMENT_130 = 'https://book.stripe.com/00gg0r4fTfj07SweUZ';
const PAYMENT_140 = 'https://book.stripe.com/4gw8xZ8w9eeW5Ko9AG';
const PAYMENT_150 = 'https://book.stripe.com/14kaG76o13Ai8WA7sz';
const PAYMENT_160 = 'https://book.stripe.com/7sIdSjdQteeW0q45ks';
const PAYMENT_170 = 'https://book.stripe.com/eVa29B9Ad7Qy5KoaEN';
const PAYMENT_180 = 'https://book.stripe.com/cN2dSjfYBb2Ka0E5ku';
const PAYMENT_190 = 'https://book.stripe.com/00gaG75jXdaSdcQcMX';
const PAYMENT_200 = 'https://buy.stripe.com/00g3dF3bP9YGb4I14g';
const PAYMENT_210 = 'https://book.stripe.com/28obKb8w9b2Kc8MdR3';
const PAYMENT_220 = 'https://book.stripe.com/3cs15x6o13Ai1u8dR4';
const PAYMENT_230 = 'https://book.stripe.com/fZedSjfYBc6OfkY3cr';
const PAYMENT_240 = 'https://book.stripe.com/5kA4hJ9Ad7Qy5Ko28o';
const PAYMENT_250 = 'https://book.stripe.com/5kAeWnh2F7Qy0q4eVb';
const PAYMENT_260 = 'https://book.stripe.com/8wM8xZ9Ad0o62yc28q';
const PAYMENT_270 = 'https://book.stripe.com/7sI8xZcMp5Iq3CgdR9';
const PAYMENT_280 = 'https://book.stripe.com/bIY8xZ7s5daSegUbJ2';
const PAYMENT_290 = 'https://book.stripe.com/7sI6pR7s58UC0q4eVf';
const PAYMENT_300 = 'https://book.stripe.com/7sI3dF5jXdaSegU00m';
const PAYMENT_310 = 'https://book.stripe.com/8wM4hJaEh3Aigp2fZl';
const PAYMENT_320 = 'https://book.stripe.com/eVa3dF7s55Iq6Os6oM';
const PAYMENT_330 = 'https://book.stripe.com/6oE9C36o10o67Sw9AZ';
const PAYMENT_340 = 'https://book.stripe.com/14k7tV5jX1sa1u86oO';
const PAYMENT_350 = 'https://book.stripe.com/00g01tbIlfj0b4IfZp';
const PAYMENT_360 = 'https://book.stripe.com/28og0r4fTeeW3Cg14w';
const PAYMENT_370 = 'https://book.stripe.com/dR601t5jX7QyfkY3cF';
const PAYMENT_380 = 'https://book.stripe.com/3cs4hJ13Hgn4egU4gK';
const PAYMENT_390 = 'https://book.stripe.com/14k15x9Adfj03Cg6oT';
const PAYMENT_400 = 'https://book.stripe.com/eVadSj6o11sa7SweVq';
const PAYMENT_410 = 'https://book.stripe.com/3cscOfeUx8UCfkY7sZ';
const PAYMENT_420 = 'https://buy.stripe.com/7sI3dF27L7QyfkY6oW';
const PAYMENT_430 = 'https://book.stripe.com/8wM7tV4fTc6O0q4eVt';
const PAYMENT_440 = 'https://book.stripe.com/14keWnh2FeeW5KodRq';
const PAYMENT_450 = 'https://book.stripe.com/eVa8xZfYBgn4egU6oZ';
const PAYMENT_460 = 'https://book.stripe.com/00g01t27Lgn47Sw7t4';
const PAYMENT_470 = 'https://book.stripe.com/4gw15xbIl7Qya0E8x9';
const PAYMENT_480 = 'https://book.stripe.com/6oE7tVdQt3Ai1u83cQ';
const PAYMENT_490 = 'https://book.stripe.com/9AQ5lN5jX8UCdcQ9Bf';
const PAYMENT_500 = 'https://book.stripe.com/fZe6pRdQt2wegp2fZE';
const PAYMENT_510 = 'https://buy.stripe.com/cN26pR3bP4Em5Ko00I';
const PAYMENT_520 = 'https://buy.stripe.com/6oEeWn8w9c6O0q47tb';
const PAYMENT_530 = 'https://book.stripe.com/9AQbKb13Hc6Ogp214O';
const PAYMENT_540 = 'https://book.stripe.com/4gw29Bh2F4Em7Sw6p9';
const PAYMENT_550 = 'https://book.stripe.com/14k5lNbIldaS8WAbJu';
const PAYMENT_560 = 'https://book.stripe.com/fZe4hJ7s5b2Kc8M6pb';
const PAYMENT_570 = 'https://book.stripe.com/cN28xZ27L6Mu5Ko3d0';
const PAYMENT_580 = 'https://book.stripe.com/6oE5lNfYB8UC8WA3d1';
const PAYMENT_590 = 'https://book.stripe.com/9AQ29Bh2FeeW7Sw00Q';
const PAYMENT_600 = 'https://book.stripe.com/8wMg0r4fT5Iqb4I7tj';
const PAYMENT_610 = 'https://book.stripe.com/3cs3dF9Ad3Ai3Cg8xd';
const PAYMENT_620 = 'https://book.stripe.com/fZebKb9AdeeW3Cg7tk';
const PAYMENT_630 = '';
const PAYMENT_640 = '';
const PAYMENT_650 = '';
const PAYMENT_660 = '';
const PAYMENT_670 = '';
const PAYMENT_680 = '';
const PAYMENT_690 = '';
const PAYMENT_700 = '';
const PAYMENT_710 = '';
const PAYMENT_720 = '';
const PAYMENT_730 = '';
const PAYMENT_740 = '';
const PAYMENT_750 = '';
const PAYMENT_760 = '';
const PAYMENT_770 = '';
const PAYMENT_780 = '';
const PAYMENT_790 = '';
const PAYMENT_800 = '';
const PAYMENT_810 = '';
const PAYMENT_820 = '';
const PAYMENT_830 = '';
const PAYMENT_840 = '';
const PAYMENT_850 = '';
const PAYMENT_860 = '';
const PAYMENT_870 = '';
const PAYMENT_880 = '';
const PAYMENT_890 = '';
const PAYMENT_900 = '';
const PAYMENT_910 = '';
const PAYMENT_920 = '';
const PAYMENT_930 = '';
const PAYMENT_940 = '';
const PAYMENT_950 = '';
const PAYMENT_960 = '';
const PAYMENT_970 = '';
const PAYMENT_980 = '';
const PAYMENT_990 = '';
const PAYMENT_1000 = '';
const PAYMENT_1010 = '';
const PAYMENT_1020 = '';
const PAYMENT_1030 = '';
const PAYMENT_1040 = '';
const PAYMENT_1050 = '';
const PAYMENT_1060 = '';
const PAYMENT_1070 = '';
const PAYMENT_1080 = '';
const PAYMENT_1090 = '';
const PAYMENT_1100 = '';
const PAYMENT_1110 = '';
const PAYMENT_1120 = '';
const PAYMENT_1130 = '';
const PAYMENT_1140 = '';
const PAYMENT_1150 = '';
const PAYMENT_1160 = '';
const PAYMENT_1170 = '';
const PAYMENT_1180 = '';
const PAYMENT_1190 = '';
const PAYMENT_1200 = '';
const PAYMENT_1210 = '';
const PAYMENT_1220 = '';



export default function Book() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const booking = searchParams.get('booking');
    const estimate = JSON.parse(booking)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState(estimate.city || "")
    const [postalCode, setPostalCode] = useState("")
    const [bedrooms, setBedrooms] = useState(estimate.bedrooms || "")
    const [bathrooms, setBathrooms] = useState(estimate.bathrooms || "")
    const [squareFeetRange, setSquareFeetRange] = useState(estimate.squareFeetRange || "")
    const [cleaningItems, setCleaningItems] = useState(estimate.cleaningItems || "")
    const [cleaningType, setCleaningType] = useState(estimate.cleaningType || "")
    const [date, setDate] = useState(estimate.date || "")
    const [totalAmount, setTotalAmount] = useState(estimate.totalAmount || "");
    const [paid, setPaid] = useState(false);
    const [completed, setCompleted] = useState(false);



    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("https://neatguys.ca/api", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    cleaningType,
                    name,
                    phone,
                    email,
                    adress,
                    city,
                    postalCode,
                    bedrooms,
                    bathrooms,
                    squareFeetRange,
                    cleaningItems,
                    date,
                    totalAmount,
                    paid,
                    completed
                })
            });
            if (res.ok) {
                const paymentLink = getPaymentLink();
                router.push(getPaymentLink());
            } else {
                throw new Error("Failed to complete the booking")
            }
        } catch (error) {
            // Handle error, if needed
        } finally {
            setLoading(false); // Set loading back to false after the operation is complete
        }
    };

    const getPaymentLink = () => {
        const amount = parseFloat(totalAmount);

        if (amount === 90) {
            return PAYMENT_90;
        } else if (amount === 100) {
            return PAYMENT_100;
        } else if (amount === 110) {
            return PAYMENT_110;
        } else if (amount === 120) {
            return PAYMENT_120;
        } else if (amount === 130) {
            return PAYMENT_130;
        } else if (amount === 140) {
            return PAYMENT_140;
        } else if (amount === 150) {
            return PAYMENT_150;
        } else if (amount === 160) {
            return PAYMENT_160;
        } else if (amount === 170) {
            return PAYMENT_170;
        } else if (amount === 180) {
            return PAYMENT_180;
        } else if (amount === 190) {
            return PAYMENT_190;
        } else if (amount === 200) {
            return PAYMENT_200;
        } else if (amount === 210) {
            return PAYMENT_210;
        } else if (amount === 220) {
            return PAYMENT_220;
        } else if (amount === 230) {
            return PAYMENT_230;
        } else if (amount === 240) {
            return PAYMENT_240;
        } else if (amount === 250) {
            return PAYMENT_250;
        } else if (amount === 260) {
            return PAYMENT_260;
        } else if (amount === 270) {
            return PAYMENT_270;
        } else if (amount === 280) {
            return PAYMENT_280;
        } else if (amount === 290) {
            return PAYMENT_290;
        } else if (amount === 300) {
            return PAYMENT_300;
        } else if (amount === 310) {
            return PAYMENT_310;
        } else if (amount === 320) {
            return PAYMENT_320;
        } else if (amount === 330) {
            return PAYMENT_330;
        } else if (amount === 340) {
            return PAYMENT_340;
        } else if (amount === 350) {
            return PAYMENT_350;
        } else if (amount === 360) {
            return PAYMENT_360;
        } else if (amount === 370) {
            return PAYMENT_370;
        } else if (amount === 380) {
            return PAYMENT_380;
        } else if (amount === 390) {
            return PAYMENT_390;
        } else if (amount === 400) {
            return PAYMENT_400;
        } else if (amount === 410) {
            return PAYMENT_410;
        } else if (amount === 420) {
            return PAYMENT_420;
        } else if (amount === 430) {
            return PAYMENT_430;
        } else if (amount === 440) {
            return PAYMENT_440;
        } else if (amount === 450) {
            return PAYMENT_450;
        } else if (amount === 460) {
            return PAYMENT_460;
        } else if (amount === 470) {
            return PAYMENT_470;
        } else if (amount === 480) {
            return PAYMENT_480;
        } else if (amount === 490) {
            return PAYMENT_490;
        } else if (amount === 500) {
            return PAYMENT_500;
        } else if (amount === 510) {
            return PAYMENT_510;
        } else if (amount === 520) {
            return PAYMENT_520;
        } else if (amount === 530) {
            return PAYMENT_530;
        } else if (amount === 540) {
            return PAYMENT_540;
        } else if (amount === 550) {
            return PAYMENT_550;
        } else if (amount === 560) {
            return PAYMENT_560;
        } else if (amount === 570) {
            return PAYMENT_570;
        } else if (amount === 580) {
            return PAYMENT_580;
        } else if (amount === 590) {
            return PAYMENT_590;
        } else if (amount === 600) {
            return PAYMENT_600;
        } else if (amount === 610) {
            return PAYMENT_610;
        } else if (amount === 620) {
            return PAYMENT_620;
        }

        // Default to a generic payment link if the amount doesn't match any specific values
        return PAYMENT_100;
    };

    const getCleaningTypeName = (cleaningType) => {
        switch (cleaningType) {
            case 'deep':
                return 'Deep Cleaning';
            case 'movein':
                return 'Move In / Out Cleaning';
            case 'office':
                return 'Office Cleaning';
            case 'regular':
                return 'Regular Cleaning';
            case 'onetime':
                return 'One-time Cleaning';
            case 'airbnb':
                return 'Airbnb Cleaning';
            default:
                return '';
        }
    };

    const getCleaningItemsName = (cleaningItems) => {
        switch (cleaningItems) {
            case 'cupboardsin':
                return ' Cleaning Inside the Kitchen Cupboards';
            case 'ovenin':
                return 'Cleaning Inside the Oven';
            case 'fridge':
                return 'Cleaning Inside the Fridge';
            case 'dish':
                return 'Hand-washing everything in the sink';
            case 'dishwasher':
                return 'Loading / Unloading the Dishwasher';
            case 'wall':
                return 'Cleaning the Walls';
            case 'windows':
                return 'Cleaning the Windows Glass from Inside';
            case 'baseboard':
                return 'Cleaning the Baseboards';
            default:
                return '';
        }
    };

    return (
        <div className='col-11 mx-auto'>



            <Form onSubmit={handleSubmit} className='py-3'>
                <div>
                    Enter your details for the <span className='fw-semibold'>{getCleaningTypeName(cleaningType)} Package</span> for <span className='fw-semibold'>{squareFeetRange && `${squareFeetRange}`}</span>  square feet area with <span className='fw-semibold'>{bedrooms} bedroom(s)</span> and <span className='fw-semibold'>{bathrooms && `${bathrooms} bathroom(s)`}</span>, including the  <span className='fw-semibold'>{cleaningItems && cleaningItems.length > 0 && `, ${cleaningItems.map(item => getCleaningItemsName(item)).join(', ')}`}</span> item(s). The service will be scheduled for <span className='fw-semibold'>{date && `${date},`}</span>  with the total amount of <span className='fw-semibold text-danger'>C${totalAmount}.00</span> .
                </div>

                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'> Your Name:</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Your full name.."
                        value={name}
                    />
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'>Your Phone Number:</Form.Label>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder="Your phone number.."
                        value={phone}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'>Your Email:</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Your email.."
                        value={email}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'>Your Adress:</Form.Label>
                    <Form.Control
                        onChange={(e) => setAdress(e.target.value)}
                        type="text"
                        placeholder="The open adress of the cleaning location"
                        value={adress}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'>City:</Form.Label>
                    <Form.Control
                        disabled
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        value={city}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='fw-semibold'>Your Postal Code:</Form.Label>
                    <Form.Control
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        placeholder="Your Postal Code.."
                        value={postalCode}
                    />
                </Form.Group>
                <Button type='submit' disabled={loading} className='btn btn-block w-100 mb-5 mt-3' style={{ backgroundColor: '#075f33' }}>
                    {loading ? 'Processing...' : 'Go to Payment'}
                </Button>

            </Form>
        </div>
    );
}
