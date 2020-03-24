import React from 'react';
import { useForm } from 'react-hook-form';
import { Progress } from 'antd';

function Demographics() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%", display: "flex", flexDirection: "column" }}>

                {/* AGES */}
                <label>What is your age?:</label>
                <select name="age" ref={register({ required: true })}>
                    <option value="">Select...</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-64">55-64</option>
                    <option value="65-74">65-74</option>
                    <option value="74+">74+</option>
                </select>

                {errors.age && <p>Please select an age range.</p>}

                {/* ETHNICITY */}
                <label>Please specify your ethnicity:</label>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="african american" />
                    African-American
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="asian" />
                    Asian
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="caucasian" />
                    Caucasian
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="hispanic" />
                    Latino or Hispanic
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="native american" />
                    Native American
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="hawaiian pacific islander" />
                    Native Hawaiian or Pacific Islander
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="other" />
                    Other
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="unknown" />
                    Unknown
                </div>
                <div>
                    <input name="ethnicity" type="radio" ref={register({ required: true })} value="no preference" />
                    Prefer not to say
                </div>

                {errors.ethnicity && <p>Please select an ethnicity.</p>}

                <label>What gender do you identify as?:</label>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="female" />
                    Female
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="male" />
                    Male
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="variant non conforming" />
                    Gender Variant/Non-Conforming
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="not listed" />
                    Not listed
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="no preference" />
                    Prefer not to say
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="other" />
                    Other
                </div>

                {errors.gender && <p>Please select a gender.</p>}

                <label>Do you consider yourself to be:</label>
                <div>
                    <input name="sexuality" type="radio" ref={register({ required: true })} value="heterosexual" />
                    Heterosexual or straight
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="homosexual" />
                    Homosexual
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="bisexual" />
                    Bisexual
                </div>
                <div>
                    <input name="gender" type="radio" ref={register({ required: true })} value="other" />
                    Other
                </div>

                {errors.gender && <p>Please select a sexuality.</p>}

                <label>Do you consider yourself to be transgender?:</label>
                <div>
                    <input name="transgender" type="radio" ref={register({ required: true })} value="yes" />
                    Yes
                </div>
                <div>
                    <input name="transgender" type="radio" ref={register({ required: true })} value="no" />
                    No
                </div>

                {errors.transgender && <p>This field is required.</p>}

                <input type="submit" />
            </form>

            <div className="progressContainer">
                <Progress
                    strokeColor={{
                        '0%': '#FFF600',
                        '100%': '#111111',
                    }}
                    percent={25}
                />
            </div>
        </div>
    )
}

export default Demographics;
