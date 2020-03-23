import React from "react";
import { useForm } from "react-hook-form";
import GoBack from "./buttons/GoBack.js";

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
        {/* does this need to be the save button, or is this something else? */}
        <div>
        <button type="submit">Submit</button>
        <GoBack />
        </div>
        </form>
    </div>
    );
};

export default Email;