import React, { useState, useEffect } from "react";

//antd components
import { Progress, Tag } from 'antd';

//styles
import styled from 'styled-components';

//defining tag type
const { CheckableTag } = Tag;

//setting state
// const [checked, setChecked] = useState(false);
// const [positive, setPositive] = useState();
// const [negative, setNegative] = useState();

//setting checked tags to true
// const handleChange = checked => {
//     setChecked(true);
// };

//this component is used for displaying story tags 
const Tags = (props) => {

    return (
    <div>
        <p>
            {/* instructions to user to click on appropriate tags */}
        </p>

        <div>
            {/* tags display */}

            {/* <CheckableTag 
                {...props} 
                checked={ checked } 
                onChange={ handleChange } 
            /> */}

            {/* positive */}
            <div>
                {/* <MyTag>Helped</MyTag>
                <MyTag>Protected</MyTag> */}
            </div>

            {/* negative */}
            <div>
                {/* <MyTag>Physically Attacked</MyTag>
                <MyTag>Disrespected</MyTag>
                <MyTag>Wrongly Accused</MyTag>
                <MyTag>Harrassed</MyTag>
                <MyTag>Neglected</MyTag>
                <MyTag>Profiled</MyTag> */}
            </div>
        </div>

    </div>
    );
};

export default Tags;