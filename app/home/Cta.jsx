'use client'
import React, { useState } from 'react';
import { Form, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { CgCheckO } from 'react-icons/cg';
import { addDays, subDays } from 'date-fns';

const squareFeetMidpoints = {
    '0 - 500': 250,
    '500 - 1000': 750,
    '1000 - 1500': 1250,
    '1501 - 2000': 1750,
    '2001 - 2500': 2250,
    '2501 - 3000': 2750,
    '3001 - 3500': 3250,
};

const parseSquareFeetRange = (squareFeetRange) => {
    if (!squareFeetRange) return 0;

    const trimmedRange = squareFeetRange.trim();
    if (squareFeetMidpoints[trimmedRange]) {
        return squareFeetMidpoints[trimmedRange];
    }

    const [min, max] = trimmedRange.split('-').map((value) => Number(value.trim()));
    if (!Number.isNaN(min) && !Number.isNaN(max)) {
        return (min + max) / 2;
    }

    return 0;
};

const calculateBasePrice = ({ cleaningType, bedrooms, bathrooms, squareFeetRange }) => {
    const bedroomsTotal = Number(bedrooms) || 0;
    const bathroomsTotal = Number(bathrooms) || 0;
    const sqft = parseSquareFeetRange(squareFeetRange);

    const regularPrice = 50 + bedroomsTotal * 40 + bathroomsTotal * 35 + sqft * 0.03;
    const deepPrice = regularPrice + 100;
    const movePrice = deepPrice + 50;

    switch (cleaningType) {
        case 'deep':
            return deepPrice;
        case 'movein':
            return movePrice;
        case 'regular':
            return regularPrice;
        default:
            return regularPrice;
    }
};



const Cta = () => {

    const [prediscount, setPrediscount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cleaningType, setCleaningType] = useState('');
    const [formData, setFormData] = useState({
        cleaningType: '',
        bedrooms: '',
        bathrooms: '',
        squareFeetRange: '',
        city: '',
        date: null,
        cleaningItems: [],
    });

    const formatDateString = (date) => {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    };

    const handleInputChange = (name, value) => {
        if (name === 'cleaningType') {
            setCleaningType(value);
            setFormData({
                ...formData,
                cleaningType: value,
            });
        } else if (name === 'date') {
            setFormData({
                ...formData,
                date: value,
            });
            setSelectedDate(value);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const filterTimes = (time) => {
        if (!selectedDate) return true;

        const startTime = new Date(selectedDate);
        const endTime = new Date(selectedDate);

        startTime.setHours(8, 30, 0); // 9 AM
        endTime.setHours(17, 0, 0); // 5:30 PM

        return time >= startTime && time <= endTime;
    };

    const handleCheckboxChange = (id) => {
        const updatedCleaningItems = formData.cleaningItems.includes(id)
            ? formData.cleaningItems.filter((item) => item !== id)
            : [...formData.cleaningItems, id];

        setFormData({
            ...formData,
            cleaningItems: updatedCleaningItems,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const basePrice = calculateBasePrice({
            cleaningType,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            squareFeetRange: formData.squareFeetRange,
        });

        const additionalFee = formData.cleaningItems.reduce((acc, itemId) => {
            const selectedCleaningItem = cleaningItems.find(item => item.id === itemId);
            return acc + (selectedCleaningItem ? selectedCleaningItem.fee || 0 : 0);
        }, 0);

        const finalPrice = basePrice + additionalFee;
        setTotalAmount(finalPrice);

        const prediscountValue = finalPrice / (1 - 25 / 100);
        setPrediscount(prediscountValue);

        // Display the modal
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const cleaningItems = [
        { id: 'cupboardsin', label: 'Cupboards', tooltipText: 'Cleaning inside the cupboards', description: 'Cleaning inside the cupboards', fee: 70 },
        { id: 'ovenin', label: 'Oven', tooltipText: 'Cleaning inside the Oven', description: 'Cleaning inside the Oven', fee: 70 },
        { id: 'fridge', label: 'Fridge', tooltipText: 'Cleaning inside the fridge', description: 'Cleaning inside the fridge', fee: 70 },
        { id: 'dish', label: 'Dish Washing', tooltipText: 'Washing the dishes by hand', description: 'Washing the dishes by hand', fee: 60 },
        { id: 'dishwasher', label: 'Loading the Dishwasher', tooltipText: 'Loading/Unloading the dishwasher', description: 'Loading/Unloading the dishwasher', fee: 50 },
        { id: 'wall', label: 'Marks on Wall', tooltipText: 'Cleaning the marks on the Wall', description: 'Cleaning the marks on the Wall', fee: 80 },
        { id: 'windows', label: 'Windows', tooltipText: 'Cleaning the windows from inside', description: 'Cleaning the windows from inside', fee: 60 },
        { id: 'steam', label: 'Cushion Steam Cleaning', tooltipText: 'Cushion Steam Cleaning', description: 'Cushion Steam Cleaning', fee: 70 },
    ];


    const cities = [
        'Angus',
        'Aurora',
        'Barrie',
        'Bolton',
        'Brampton',
        'Innisfil',
        'King City',
        'Maple',
        'Markham',
        'Midhurst',
        'New Market',
        'Orillia',
        'Richmond Hill',
        'Thornhill',
        'Vaughan',
        'Woodbridge',
    ];

    const booking = {
        cleaningType: cleaningType,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        squareFeetRange: formData.squareFeetRange,
        city: formData.city,
        date: formData.date ? formatDateString(formData.date) : '',
        cleaningItems: formData.cleaningItems,
        totalAmount: totalAmount,
    };

    const getCleaningItemLabel = (itemId) => {
        const selectedCleaningItem = cleaningItems.find(item => item.id === itemId);
        return selectedCleaningItem ? ` ${selectedCleaningItem.description}` : '';
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


    return (
        <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
            <div className="container col-11">
                <Form className="row custom-mar-20" onSubmit={handleSubmit}>
                    <div className="row custom-pad-20">
                        <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                            <h4 className="tp-appoint-title text-center">Free Cleaning Estimate </h4>
                        </div>
                    </div>
                    <div className="row custom-pad-10 mx-2 centered">

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select value={formData.cleaningType} onChange={(e) => handleInputChange('cleaningType', e.target.value)} required>
                                    <option disabled value="">Cleaning Type</option>
                                    <option value="deep">Deep Cleaning</option>
                                    <option value="movein">Move-in Cleaning</option>
                                    <option value="office">Office Cleaning</option>
                                    <option value="regular">Regular Cleaning</option>
                                    <option value="onetime">One-time Cleaning</option>
                                    <option value="airbnb">Airbnb Cleaning</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select value={formData.bedrooms} onChange={(e) => handleInputChange('bedrooms', e.target.value)} required>
                                    <option disabled value="">Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select value={formData.bathrooms} onChange={(e) => handleInputChange('bathrooms', e.target.value)} required>
                                    <option disabled value="">Bathrooms</option>
                                    <option value="0">-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select value={formData.squareFeetRange} onChange={(e) => handleInputChange('squareFeetRange', e.target.value)} required>
                                    <option disabled value="">Square Feet Range</option>
                                    <option value="0 - 500">0 - 500 sqft</option>
                                    <option value="500 - 1000">500 - 1000 sqft</option>
                                    <option value="1000 - 1500">1000 - 1500 sqft</option>
                                    <option value="1501 - 2000">1501 - 2000 sqft</option>
                                    <option value="2001 - 2500">2001 - 2500 sqft</option>
                                    <option value="2501 - 3000">2501 - 3000 sqft</option>
                                    <option value="3001 - 3500">3001 - 3500 sqft</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} required>
                                    <option disabled value="">Select City</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">

                                <span className='row mx-0 p-0 d-flex' required>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => handleInputChange('date', date)}
                                        placeholderText="Select Date and Time"
                                        showTimeSelect
                                        disabledKeyboardNavigation
                                        dateFormat="Pp"
                                        minDate={new Date()}
                                        excludeDateIntervals={[
                                            { start: subDays(new Date(), 1), end: addDays(new Date(), 1) },
                                        ]}
                                        // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                                        filterTime={filterTimes}

                                        className='mr-1 rounded'
                                    />
                                </span>

                            </Form.Group>
                        </div>
                    </div>
                    <div className="row custom-pad-20 mx-2 centered">
                        <div className="row d-flex justify-content-even custom-mar-10">
                            {cleaningItems.map((item) => (
                                <div key={item.id} className="col-md-12 col-lg-3">
                                    <OverlayTrigger
                                        trigger={['hover', 'focus']}
                                        overlay={<Tooltip id={`tooltip-${item.id}`}>{item.tooltipText}</Tooltip>}
                                    >
                                        <span>
                                            <Form.Check
                                                type="checkbox"
                                                label={item.label}
                                                id={item.id}
                                                onChange={() => handleCheckboxChange(item.id)}
                                            />
                                        </span>
                                    </OverlayTrigger>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row custom-pad-20 mx-2">
                        <div className="tp-appoint text-end">
                            <button type="submit" className="btn theme-btn mt-3">
                                <i className="flaticon-enter"></i>Calculate
                            </button>
                        </div>
                    </div>
                </Form>

                <Modal show={showModal} onHide={handleCloseModal} className='centered mx-2'>
                    <Modal.Header className='col-12 border-0'>
                        <Modal.Title className='tp-testimonial-form-title text-center' style={{ fontSize: '20px', width: '100%' }}>Price Estimation For <br /><span>{getCleaningTypeName(cleaningType)} </span> <br />Package:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-start'>
                        <table className="">
                            <tbody>
                                <tr>
                                    <td className='fw-semibold pb-2'>Number of Bedrooms: <span className='fw-normal'>{formData.bedrooms}</span></td>
                                </tr>

                                <tr>
                                    <td className='fw-semibold pb-2'>Number of Bathrooms: <span className='fw-normal'>{formData.bathrooms}</span></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold pb-2'>Square Feet Range: <span className='fw-normal'>{formData.squareFeetRange} sqft</span></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold pb-2'>Location: <span className='fw-normal'>{formData.city}</span></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Service Date and Time:</td>
                                </tr>
                                <tr>
                                    <th colSpan={2} className='px-2 fw-normal pb-2'>
                                        {formData.date ? (
                                            <div>
                                                <CgCheckO /> {formData.date.toLocaleString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true,
                                                })}
                                            </div>
                                        ) : ''}
                                    </th>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Additional Requests:</td>
                                </tr>

                                {formData.cleaningItems.map((itemId) => (
                                    <tr key={itemId} className=''>
                                        <td className='px-2'>
                                            <CgCheckO /> {getCleaningItemLabel(itemId)}
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td className='fw-semibold pt-2'>
                                        Estimated Price:
                                        <span className='fw-semibold text-danger text-decoration-line-through'>CAD{prediscount.toFixed(0)}</span>
                                        <span className='fw-semibold text-success'> CAD{totalAmount}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer className="input-field d-flex justify-content-center border-0">
                        <Link
                            href={{
                                pathname: "/booking",
                                query: {
                                    booking: JSON.stringify(booking)
                                }
                            }}>
                            <Button variant="" className="yellow-btn">
                                Book Now
                            </Button></Link>
                    </Modal.Footer>
                </Modal>

            </div>
        </section>
    )
}

export default Cta
