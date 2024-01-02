'use client'
import React from 'react';
import { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import Collapse from 'react-bootstrap/Collapse';

function Items({ title, content }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <p>
                    <a className="fs-6 fw-normal mt-0"
                        onClick={() => setOpen(!open)}
                        aria-controls={`${title.toLowerCase()}Collapse`}
                        aria-expanded={open} >
                        {title}<IoMdArrowDropright size='20px' />

                    </a>
                </p>
            </div>

            <Collapse in={open}>
                <div id={`${title.toLowerCase()}Collapse`}>
                    {content}
                </div>
            </Collapse>
        </>
    );
}

export default Items;
