import React from 'react';
import { useForm } from 'react-hook-form';

function Demographics() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <input type="submit" />
            </form>
        </div>
    )
}

export default Demographics;
