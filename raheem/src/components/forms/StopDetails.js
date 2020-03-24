import React from 'react';
import TextInput from '../global/TextInput';

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
            <TextInput />
        </div>
    )
}

export default StopDetails;