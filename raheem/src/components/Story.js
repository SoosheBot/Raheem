import React from "react";

//form validation
import { useForm } from "react-hook-form";

//buttons
import Continue from './buttons/Continue';
import Save from './buttons/Save';
import GoBack from './buttons/GoBack';

//antd components and icons
import { Progress } from 'antd';

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
                    {errors.story && errors.story.message}
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

            <div className="progressContainer">
            <Progress
                strokeColor={{
                    '0%': '#FFF600',
                    '50%': '#111111',
                }}
                percent={50}
                />
        </div>
        </div>
    )
}

export default Story;