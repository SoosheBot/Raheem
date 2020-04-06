import React, { useState, useEffect } from "react";

//styles
import styled from 'styled-components';

//this component is used for displaying tags 
const Tags = (props) => {

    // setting state
    const [checked, setChecked] = useState(false);
    const [positive, setPositive] = useState();
    const [negative, setNegative] = useState();

    // setting checked tags to true
        const handleChange = checked => {
            setChecked(true);
        };

    return (
    <div>
        <p>
            {/* instructions to user to click on appropriate tags */}
        </p>

        <div>
            {/* tags display */}

            <CheckableTag 
                {...props} 
                checked={ false } 
                color='black'
                onChange={ handleChange } 
            />

            {/* positive */}
            <div>
                <CheckableTag>Helped</CheckableTag>
                <CheckableTag>Protected </CheckableTag>
            </div>

            {/* negative */}
            <div>
                <CheckableTag>Physically Attacked</CheckableTag>
                <CheckableTag>Disrespected</CheckableTag>
                <CheckableTag>Wrongly Accused</CheckableTag>
                <CheckableTag>Harrassed</CheckableTag>
                <CheckableTag>Neglected</CheckableTag>
                <CheckableTag>Profiled</CheckableTag>
            </div>
        </div>

    </div>
    );
};

export default Tags;