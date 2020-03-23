import React from 'react';
import { useForm } from 'react-hook-form';
import { findByLabelText } from '@testing-library/react';

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

                {/* ETHNICITY */}
                <label>Please specify your ethnicity:</label>
                <label htmlFor="african-american">
                    <input name="african-american" type="radio" ref={register} />
                    African-American
                </label>
                <label htmlFor="asian">
                    <input name="asian" type="radio" ref={register} />
                    Asian
                </label>
                <label htmlFor="Caucasian">
                    <input name="caucasian" type="radio" ref={register} />
                    Caucasian
                </label>
                <label htmlFor="hispanic">
                    <input name="hispanic" type="radio" ref={register} />
                    Latino or Hispanic
                </label>
                <label htmlFor="native-american">
                    <input name="native-american" type="radio" ref={register} />
                    Native American
                </label>
                <label htmlFor="hawaiian-pacific">
                    <input name="hawaiian-pacific" type="radio" ref={register} />
                    Native Hawaiian or Pacific Islander
                </label>
                <label htmlFor="other">
                    <input name="other" type="radio" ref={register} />
                    Other
                </label>
                <label htmlFor="unknown">
                    <input name="unknown" type="radio" ref={register} />
                    Unknown
                </label>
                <label htmlFor="no-preference">
                    <input name="no-preference" type="radio" ref={register} />
                    Prefer not to say
                </label>

                <input type="submit" />
            </form>
        </div>
    )
}

export default Demographics;
