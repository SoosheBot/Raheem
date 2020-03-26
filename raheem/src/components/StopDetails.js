import React, { useState } from "react";

//styles
import styled from 'styled-components';

/* Buttons */
import Controls from './buttons/Controls';
// import Continue from './buttons/Continue';
// import GoBack from './buttons/GoBack';
// import Save from './buttons/Save';

/*antd components and icons */
import { Tag } from 'antd';



//defining tag type
const { CheckableTag } = Tag;

function StopDetails(props) {

    // setting state
    const [checked, setChecked] = useState(false);
    const [toggle, setToggle] = useState();

    const handleChange = checked => {
        setChecked(true);
    };

    return (

        <div>
            <CheckableTag 
                {...props} 
                checked={ true }
                color={'black'}
                onChange={ handleChange } 
            />

            <div className="stopDetails">
                <h2>How would you classify your stop?</h2>

                <div>
                    <CheckableTag>Positive</CheckableTag>

                    <CheckableTag>Negative</CheckableTag>
                </div>
            </div>

            <div className="tagsInstructions">
                {/* display tags component after selection has been made */}
                {/* set state for positive/negative display to pass to Tags component */}
                <p>
                    {/* instructions to user to click on appropriate tags */}
                </p>
            </div>


            <div className="tags">
                {/* positive */}
                    <div>
                        <CheckableTag>Helped</CheckableTag>
                        <CheckableTag>Protected</CheckableTag>
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

            {/* <div className="tagsButtonContainer">
                <div>
                    <p>Click here to proceed.</p>
                    <Continue />
                    {/* continue to story */}
                {/* </div>
                <div>
                    <p>Click here to go back.</p>
                    <GoBack /> */}
                    {/* go back to landing */}
                {/* </div>
                <div>
                    <p>Click here to save your responses and come back later.</p>
                    <Save /> */}
                    {/* go to email */}
                {/* </div>
            </div>  */}

            <div className="progressContainer">
                {/* < progressBar /> */}
            </div>
        </div>
    )
}

export default StopDetails;


const Control = styled.button`
    width: 45%;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    font-size: 1.4rem;
    height: 5rem;
    border: none;
    border-radius: 0.5rem;
    background: #FFF600;
    padding: 0.5rem 1rem;
    transition: all 300ms;
    margin: 1rem 0 0;

    &:hover {
        transition: background 300ms;
        background: #FAEB00;
        cursor: pointer;
    }
`;