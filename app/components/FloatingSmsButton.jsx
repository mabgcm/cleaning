'use client';
import React from 'react';
import { FaSms } from 'react-icons/fa'; // optional icon

export default function FloatingSmsButton({
    phone = '+14372196444',
    message = 'Hi! I’d like to book a cleaning service.',
}) {
    const encodedMessage = encodeURIComponent(message);

    return (
        <a
            href={`sms:${phone}?body=${encodedMessage}`}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#075f33',
                color: '#fff',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '26px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                zIndex: '9999',
                transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#7acbf2';
                e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#075f33';
                e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Send SMS"
        >
            <FaSms />
        </a>
    );
}