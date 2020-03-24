import React from "react";

//form validation
import { useForm } from "react-hook-form";

//antd components and icons
import {BellOutlined} from '@ant-design/icons';
import {Progress} from 'antd';

//buttons
import GoBack from "./buttons/GoBack.js";

//component for user to subscrbe to email newsletter 
//Do we want to render this separately or reuse the email collection form simultaneously
const Subscribe = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from subscription on-submit",values);
    };

    return (
    <div>
        <h2>Thank you!</h2>
        <p>
            Please take a moment to select if you want to recieve any of the following:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <input 
            type="checkbox" 
            placeholder="Local Area Updates" 
            name="Local Area Updates" 
            ref={register} 
        />

        <input 
            type="checkbox" 
            placeholder=" Copy of My Response" 
            name="Send Me a Copy of My Response" 
            ref={register} 
        />


        {/* on submit will need to direct to thank you page with confirmation to check email for next steps */}
        
            <div className="buttoncContainer">
                <button type="submit"> Subscribe<BellOutlined /> </button>
                <GoBack />
            </div>
        </form>

        <div className="progress">
            <Progress
                strokeColor={{
                    '0%': '#FFF600',
                    '100%': '#111111',
                }}
                percent={99}
                />
        </div>
    </div>
    );
};

export default Subscribe;