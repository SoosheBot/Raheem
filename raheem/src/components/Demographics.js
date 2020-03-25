import React from 'react';
import styled from 'styled-components';

/* validation */

import { useForm } from 'react-hook-form';

/* antd icons and components */
import { Progress } from 'antd';
import Controls from './buttons/Controls';
import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';

/* this function collects information about the users */
function Demographics() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (
        <DemographicsContainer>

            <h2>About you</h2>
            <p className="description">Help us understand how police treat people like you.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* RACE */}
                <h3>Your Race</h3>
                <span>Required</span>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="asian" />
                    Asian
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="african american" />
                    Black/African
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="latinx" />
                    Latinx
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="middle eastern" />
                    Middle Eastern
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="native american" />
                    Native American
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="pacific islander" />
                    Pacific Islander
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="south asian" />
                    South Asian
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="white" />
                    White
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="multiracial" />
                    Multiracial
                </div>
                <div>
                    <input name="race" type="radio" ref={register({ required: true })} value="no preference" />
                    Prefer not to say
                </div>

                {errors.race && <p>Please select your race.</p>}

                {/* GENDER */}
                <h3>Gender</h3>
                <select name="gender" ref={register({ required: true })}>
                    <option value="">Select...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="variant non conforming">Gender Variant/Non Conforming</option>
                    <option value="not listed">Not Listed</option>
                    <option value="no preference">Prefer Not to Say</option>
                    <option value="other">Other</option>
                </select>
                <span>Required</span>

                {errors.gender && <p>Please select a gender.</p>}

                <div>
                    <input name="transgender" type="checkbox" ref={register} value="transgender" />
                    I identify as trans
                </div>

                {errors.transgender && <p>This field is required.</p>}

                {/* AGES */}
                <label>What is your age?:</label>
                <select name="age" ref={register({ required: true })}>
                    <option value="">Select Gender...</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55-64">55-64</option>
                    <option value="65-74">65-74</option>
                    <option value="74+">74+</option>
                </select>

                {errors.age && <p>Please select an age range.</p>}

                <input type="submit" />

                {/* pass down the path to the next page through props */}
                <Controls next="/subscribe" />

                <div className="progressContainer">
                    <Progress
                        strokeColor={{
                            '0%': '#FFF600',
                            '100%': '#111111',
                        }}
                        percent={75}
                    />
                </div>
            </form>
        </DemographicsContainer>
    )
}

export default Demographics;

/* container style for demographics component */
const DemographicsContainer = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    // Top heading
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 4rem;
    }

    // Top heading tagline
    p.description {
        font-size: 2rem;
        margin: 1rem 0;
    }

    // Form heading
    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2.5rem;
        margin-top: 3rem;
    }

    // Required field span
    span {
        font-size: 1.4rem;
        margin: 0.5rem 0 2rem;
    }

    // Form styling
    form {
        background: #ffffff;
        margin: 2rem 0;
        padding: 3rem 2rem;
        display: flex;
        flex-direction: column;
        padding: 0 10%;
        width: 80%;

        // Content and field separation within form
        div {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 900;
            margin: 1rem 0;
            display: flex;
            align-items: center;
        }

        // Radio button styling
        input[type=radio] {
            height: 3rem;
            width: 10%;
            margin-right: 1rem;
        }

        // Select input styling
        select {
            margin: 1rem 0 0.5rem;
        }

        // Submit button styling
        input[type=submit] {
            font-family: 'Noto Serif', serif;
            font-weight: 700;
            font-size: 2rem;
            border: none;
            border-radius: 0.5rem;
            background: #FFF600;
            padding: 0.5rem 1rem;
            transition: all 300ms;
            margin: 3rem 0 0;

            &:hover {
                transition: background 300ms;
                background: #FAEB00;
                cursor: pointer;
            }
        }
    }
`;
