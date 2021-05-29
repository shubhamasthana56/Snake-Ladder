import React from 'react';
export const renderModalResult = (steps) => {
    return (
        <div>
            <h2>
            Congratulation You WON!
            </h2>
            <p>Total Steps Required In Completion: {steps}</p>
        </div>
    )
}