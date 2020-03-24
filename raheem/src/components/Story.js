import React from "react";

//form validation
import { useForm } from "react-hook-form";

function Story() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log("values from story on-submit", values);
    };

    return (
        <div>
            <div>
                <p>
                    {/* user instructions */}
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="story"
                        ref={register({
                        required: 'Required',
                        pattern: {
                            message: "input is required"
                        }
                        })}
                    />
                    {errors.email && errors.email.message}
                </form>
            </div>

            <div className="tagsButtonContainer">
                <div>
                    <p>Click here to proceed.</p>
                    <Continue />
                    {/* continue to demographics */}
                </div>
                <div>
                    <p>Click here to go back.</p>
                    <GoBack />
                    {/* go back to tags */}
                </div>
                <div>
                    <p>Click here to save your responses and come back later.</p>
                    <Save />
                    {/* go to email */}
                </div>
            </div>

            {/* progress bar */}
        </div>
    )
}

export default Story;