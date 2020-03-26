import React from 'react';
import styled from 'styled-components';

/* components */
import Continue from './Continue';
import GoBack from './GoBack';
import Save from './Save';

function Controls(props) {

    const { next } = props;

    return (
        <ControlsContainer>
            <div>
                <GoBack />
                {/* go back to story */}
            </div>
            <div>
                <Continue next={next} />
                {/* continue to subscription */}
            </div>
            <div>
                <Save />
                {/* go to email */}
            </div>
        </ControlsContainer>
    )
}

export default Controls;

const ControlsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 460px) {
        flex-direction: column;
        align-items: center;
    }
    
    div {
        width: 30%;
        display: flex;
        align-items: center;  

        @media (max-width: 460px) {
            width: 100%;
            justify-content: center;
        }
    }
`;