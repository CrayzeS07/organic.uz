import React, { useState } from 'react';

const BtnT = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                className={`my-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick}
            >
                Bosing
            </button>
        </div>
    );
};

export default BtnT;
