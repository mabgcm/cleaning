'use client'
import React, { useState } from 'react';
import { Form, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link'



const Cta = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cleaningType, setCleaningType] = useState('regular');
    const [formData, setFormData] = useState({
        cleaningType: '',
        bedrooms: '',
        bathrooms: '',
        squareFeetRange: '',
        city: '',
        date: '',
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

    const calculateTotalSqft = () => {
        // Convert the number of bedrooms into sqft using the average sqft per room
        const bedroomsSqft = formData.bedrooms ? formData.bedrooms * 250 : 0;
        const bathroomsSqft = formData.bathrooms ? formData.bathrooms * 250 : 0;
        const roomSqft = bedroomsSqft + bathroomsSqft;

        // Compare the calculated bedrooms sqft with the entered sqft by the user
        const totalSqft = Math.max(roomSqft, parseInt(formData.squareFeetRange.split('-')[1], 10));

        return totalSqft;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Calculate the total sqft based on the entered data
        const totalSqft = calculateTotalSqft();

        // Adjust the hourly rate based on the cleaning type
        let hourlyRate = 50; // Default rate for regular cleaning
        if (cleaningType === 'deep' || cleaningType === 'movein') {
            hourlyRate = 80;
        } else if (cleaningType === 'onetime' || cleaningType === 'airbnb') {
            hourlyRate = 60;
        } else if (cleaningType === 'office') {
            hourlyRate = 40;
        }

        console.log("Total Sqft:", totalSqft);
        console.log("Hourly Rate:", hourlyRate);
        console.log("Cleaning Type:", cleaningType);
        console.log("Cleaning Date:", formData.date ? formatDateString(formData.date) : '');

        // Calculate the total hours
        let totalHours = Math.ceil(totalSqft / 500); // 1 hour for every 500 sqft
        totalHours += formData.cleaningItems.length; // 1 hour for each selected extra item

        // Adjust total hours and calculate the total amount
        const totalPrice = totalHours * hourlyRate;
        setTotalAmount(totalPrice);

        // Display the modal
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const cleaningItems = [
        { id: 'cupboardsin', label: 'Cupboards', tooltipText: 'Info about Cupboards', description: 'Inside the cupboards' },
        { id: 'ovenin', label: 'Oven', tooltipText: 'Info about Cupboards', description: 'Inside the Oven' },
        { id: 'fridge', label: 'Fridge', tooltipText: 'Info about Cupboards', description: 'Inside the fridge' },
        { id: 'dish', label: 'Dish Washing', tooltipText: 'Info about Cupboards', description: 'Washing the dishes' },
        { id: 'dishwasher', label: 'Loading Dishwasher', tooltipText: 'Info about Cupboards', description: 'Loading/unloading the dishwasher' },
        { id: 'wall', label: 'Marks on Wall', tooltipText: 'Info about Cupboards', description: 'Marks on the Wall' },
        { id: 'windows', label: 'Windows', tooltipText: 'Info about Cupboards', description: 'Cleaning the windows from inside' },
        { id: 'baseboards', label: 'Cleaning the Baseboards', tooltipText: 'Info about Cupboards', description: 'Cleaning the Baseboards' },
    ];

    const cities = [
        'Toronto',
        'Mississauga',
        'Brampton',
        'Markham',
        'Vaughan',
        'Richmond Hill',
        'Oakville',
        'Ajax',
        'Pickering',
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
                            <h4 className="tp-appoint-title text-center">Free Estimate </h4>
                        </div>
                    </div>
                    <div className="row custom-pad-10 mx-2 centered">

                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('cleaningType', e.target.value)} required>
                                    <option selected disabled value="">Cleaning Type</option>
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
                                <Form.Select onChange={(e) => handleInputChange('bedrooms', e.target.value)} required>
                                    <option selected disabled value="">Bedrooms</option>
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
                                <Form.Select onChange={(e) => handleInputChange('bathrooms', e.target.value)} required>
                                    <option selected disabled value="">Bathrooms</option>
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
                                <Form.Select onChange={(e) => handleInputChange('squareFeetRange', e.target.value)} required>
                                    <option selected disabled value="">Square Feet Range</option>
                                    <option value="0-500">0 - 500 sqft</option>
                                    <option value="500-1000">500 - 1000 sqft</option>
                                    <option value="1000-1500">1000 - 1500 sqft</option>
                                    <option value="1501-2000">1501 - 2000 sqft</option>
                                    <option value="2001-2500">2001 - 2500 sqft</option>
                                    <option value="2501-3000">2501 - 3000 sqft</option>
                                    <option value="3001-3500">3001 - 3500 sqft</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="tp-appoint col-md-12 col-lg-3 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('city', e.target.value)} required>
                                    <option selected disabled value="">Select City</option>
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
                                        dateFormat="Pp"
                                        minDate={new Date()}
                                        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
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
                            <button type="submit" className="theme-btn mt-3">
                                <i className="flaticon-enter"></i>Calculate
                            </button>
                        </div>
                    </div>
                </Form>

                <Modal show={showModal} onHide={handleCloseModal} className='centered px-3'>
                    <Modal.Header className='col-12 border-0'>
                        <Modal.Title className='tp-testimonial-form-title text-center' style={{ fontSize: '20px', width: '100%' }}>Price Estimation For <br /><span>{getCleaningTypeName(cleaningType)} </span> <br />Package:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-start'>
                        <table className="">
                            <tbody>
                                <tr>
                                    <td className='col-6'>Number of Bedrooms:</td>
                                    <td className='col-6'>{formData.bedrooms}</td>
                                </tr>
                                <tr>
                                    <td>Number of Bathrooms:</td>
                                    <td>{formData.bathrooms}</td>
                                </tr>
                                <tr>
                                    <td>Square Feet Range:</td>
                                    <td>{formData.squareFeetRange}</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>{formData.city}</td>
                                </tr>
                                <tr>
                                    <td>Service Date and Time:</td>
                                    <td>
                                        {formData.date ? (
                                            <div>
                                                {formData.date.toLocaleString('en-US', {
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
                                    </td>
                                </tr>
                                <tr>
                                    <td>Additional Requests:</td>
                                    <td>{formData.cleaningItems.map(itemId => getCleaningItemLabel(itemId)).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td>Estimated Price:</td>
                                    <td>CAD {totalAmount}</td>
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