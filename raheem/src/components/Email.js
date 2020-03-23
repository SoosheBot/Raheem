import React from "react";

//form validation
import { useForm } from "react-hook-form";

//antd components and icons
import {MailOutlined} from '@ant-design/icons';
import {Progress} from 'antd';

//buttons
import GoBack from "./buttons/GoBack.js";

//component for user to submit their email address to save the form for later
const Email = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from email on-submit",values);
    };

    return (
    <div>
        <p>
            Please submit your email address so we can send you your information to continue your report at a later time.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name="email"
                ref={register({
                required: 'Required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid e-mail address"
                }
                })}
            />
            {errors.email && errors.email.message}

        {/* on submit will need to direct to thank you page with confirmation to check email for next steps */}

            <div className="buttoncContainer">
                <button type="submit"> <MailOutlined /> Submit</button>
                <GoBack />
            </div>
        </form>

        <div>
            <Progress
                strokeColor={{
                    '0%': '#FFF600',
                    '100%': '#111111',
                }}
                percent={5} 
                // dynamically adjust precentage?
                status="exception" />
                />
            </div>
    </div>
    );
};

export default Email;