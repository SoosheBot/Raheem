import React from "react";


/*FireStore*/
import firebase from "../firebase"

//form validation
import { useForm } from "react-hook-form";

//antd components and icons
import { MailOutlined } from '@ant-design/icons';

//buttons
import GoBack from "./buttons/GoBack.js";

//component for user to submit their email address to save the form for later
const Email = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from email on-submit",values);
        firebase
        .firestore()
        .collection('emails')
        .add({
            emails: values.email
        })
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

        <div className="progressContainer">
        </div>
    </div>
    );
};

export default Email;