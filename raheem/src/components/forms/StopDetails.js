import React from 'react';

function StopDetails() {
    return (
        <div>
            <h2>How was your stop?</h2>

            <div>
                <input type="checkbox" />
                <p>Positive</p>

                <input type="checkbox" />
                <p>Negative</p>
            </div>
        </div>
    )
}

export default StopDetails;