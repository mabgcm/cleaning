'use client'
import React, { useState } from 'react';
import { Form, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link'



const Cta = () => {

    const BASE_PRICE = 20; // Base price for the service
    const SQM_RATE = 30; // Rate for each 500 sq meters
    const BEDROOM_RATE = 10; // Rate for each bedroom
    const BATHROOM_RATE = 8; // Rate for each bathroom
    const EXTRA_ITEM_RATE = 5; // Rate for each selected extra cleaning item

    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0); // New state for total amount
    const [formData, setFormData] = useState({
        bedrooms: '',
        bathrooms: '',
        squareFeetRange: '',
        city: '',
        date: null,
        cleaningItems: [],
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
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
        // Calculate the total amount
        let totalPrice = BASE_PRICE;
        const sqmRange = formData.squareFeetRange.split('-');
        const sqm = parseInt(sqmRange[1], 10) - parseInt(sqmRange[0], 10);
        totalPrice += Math.ceil(sqm / 500) * SQM_RATE;
        totalPrice += formData.bedrooms * BEDROOM_RATE;
        totalPrice += formData.bathrooms * BATHROOM_RATE;
        totalPrice += formData.cleaningItems.length * EXTRA_ITEM_RATE;

        // Round the total amount to the nearest multiple of 50
        totalPrice = Math.ceil(totalPrice / 50) * 50;

        // Save the total amount to state
        setTotalAmount(totalPrice);

        // Display the modal
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const cleaningItems = [
        { id: 'cupboardsin', label: 'Cupboards', tooltipText: 'Info about Cupboards', description: 'Inside the cupboards' },
        { id: 'closetin', label: 'Closets', tooltipText: 'Info about Cupboards', description: 'Inside the closets' },
        { id: 'ovenin', label: 'Oven', tooltipText: 'Info about Cupboards', description: 'Inside the Oven' },
        { id: 'fridge', label: 'Fridge', tooltipText: 'Info about Cupboards', description: 'Inside the fridge' },
        { id: 'dish', label: 'Dish Washing', tooltipText: 'Info about Cupboards', description: 'Washing the dishes' },
        { id: 'dishwasher', label: 'Loading Dishwasher', tooltipText: 'Info about Cupboards', description: 'Loading/unloading the dishwasher' },
        { id: 'wall', label: 'Marks on Wall', tooltipText: 'Info about Cupboards', description: 'Marks on the Wall' },
        { id: 'windows', label: 'Windows', tooltipText: 'Info about Cupboards', description: 'Cleaning the windows from inside' },
        { id: 'linens', label: 'Linens Change', tooltipText: 'Info about Cupboards', description: 'Changing the linens' },
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
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        squareFeetRange: formData.squareFeetRange,
        city: formData.city,
        date: formData.date ? formData.date.toDateString() : '',
        cleaningItems: formData.cleaningItems,
        totalAmount: totalAmount,
    }

    const getCleaningItemLabel = (itemId) => {
        const selectedCleaningItem = cleaningItems.find(item => item.id === itemId);
        return selectedCleaningItem ? ` ${selectedCleaningItem.description}` : '';
    };


    return (
        <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
            <div className="container col-11">
                <Form className="row custom-mar-20" onSubmit={handleSubmit}>
                    <div className="row custom-pad-20">
                        <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                            <h4 className="tp-appoint-title text-center">Online Estimate </h4>
                        </div>
                    </div>
                    <div className="row custom-pad-10 mx-2">
                        <div className="tp-appoint col-xl-2 col-lg-12 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('bedrooms', e.target.value)}>
                                    <option>Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-xl-2 col-lg-12 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('bathrooms', e.target.value)}>
                                    <option>Bathrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-xl-2 col-lg-12 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('squareFeetRange', e.target.value)}>
                                    <option>Square Feet Range</option>
                                    <option value="0-500">0 - 500 sqft</option>
                                    <option value="500-1000">500 - 1000 sqft</option>
                                    <option value="1000-1500">1000 - 1500 sqft</option>
                                    <option value="1501-2000">1501 - 2000 sqft</option>
                                    <option value="2001-2500">2001 - 2500 sqft</option>
                                    <option value="2501-3000">2501 - 3000 sqft</option>
                                    <option value="3001-3500">3001 - 3500 sqft</option>
                                    {/* Add more options as needed */}
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="tp-appoint col-xl-2 col-lg-12 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">
                                <Form.Select onChange={(e) => handleInputChange('city', e.target.value)}>
                                    <option>Select City</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="tp-appoint col-xl-2 col-lg-12 custom-pad-10 mx-2">
                            <Form.Group className="row custom-mar-20">

                                <span className='row mx-0 p-0 d-flex'>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => {
                                            setSelectedDate(date);
                                            handleInputChange('date', date);
                                        }}
                                        placeholderText="Select Date"
                                        dateFormat="MM/dd/yyyy"
                                        className='mr-1 rounded'
                                    />
                                </span>

                            </Form.Group>
                        </div>
                    </div>

                    <div className="row custom-pad-20 mx-2">
                        <div className="row d-flex justify-content-even custom-mar-10">
                            {cleaningItems.map((item) => (
                                <div key={item.id} className="col-auto">
                                    <OverlayTrigger
                                        trigger={['hover', 'focus']}
                                        overlay={<Tooltip id={`tooltip-${item.id}`}>{item.tooltipText}</Tooltip>}
                                    >
                                        <span>
                                            <Form.Check
                                                type="checkbox"
                                                label={item.label}
                                                id={item.id}
                                                onChange={() => handleCheckboxChange(item.id)} // Update checkbox state
                                            />
                                        </span>
                                    </OverlayTrigger>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row custom-pad-10">
                        <div className="tp-appoint text-end">
                            <button type="submit" className="theme-btn">
                                <i className="flaticon-enter"></i>Calculate
                            </button>
                        </div>
                    </div>
                </Form>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Input Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bedrooms: {formData.bedrooms}</p>
                        <p>Bathrooms: {formData.bathrooms}</p>
                        <p>Square Feet Range: {formData.squareFeetRange}</p>
                        <p>City: {formData.city}</p>
                        <p>Date: {formData.date ? formData.date.toDateString() : ''}</p>
                        <p>
                            Cleaning Items: {formData.cleaningItems.map(itemId => getCleaningItemLabel(itemId)).join(', ')}
                        </p>
                        <p>Total Amount: CAD {totalAmount}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Link
                            href={{
                                pathname: "/booking",
                                query: {
                                    booking: JSON.stringify(booking)
                                }
                            }}>
                            <Button variant="secondary">
                                Book Now
                            </Button></Link>
                    </Modal.Footer>
                </Modal>

            </div>
        </section>
    )
}

export default Cta