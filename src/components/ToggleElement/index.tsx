import React, { useState } from 'react';

export default function ToggleElement() {
    // visibility state
    const [isOpen, setIsOpen] = useState(false);

    // toggle the state
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* toggle the div */}
            <button onClick={toggleDiv}>
                {isOpen ? 'Close' : 'Open'}
            </button>

            {/* Conditionally rendered div */}
            {isOpen && (
                <div>
                    This is the toggled content!
                </div>
            )}
        </div>
    );
}
