import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* validation */
import { useForm } from 'react-hook-form';

/* antd icons and components */
import { Progress } from 'antd';
// import Controls from './buttons/Controls';

/* this function collects information about the users */
function Demographics() {

    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    /* state to pass up through context for completion of this part of the form */
    const [demographicData, setDemographicData] = useState({});

    /* configure react-hook-form */
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        setDemographicData({ ...data, dob: `${data.dobMonth}/${data.dobDay}/${data.dobYear}` })
        history.push(`/subscribe`);
    }

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

                {errors.race && <p className="error">Please select your race.</p>}

                {/* GENDER */}
                <h3>Gender</h3>
                <select name="gender" ref={register({ required: true })}>
                    <option value="">Select gender...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="variant non conforming">Gender Variant/Non Conforming</option>
                    <option value="not listed">Not Listed</option>
                    <option value="no preference">Prefer Not to Say</option>
                    <option value="other">Other</option>
                </select>
                <span>Required</span>

                {errors.gender && <p className="error">Please select a gender.</p>}

                {/* Is the user transgender? */}
                <div>
                    <input name="transgender" type="checkbox" ref={register} value="true" />
                    I identify as trans
                </div>

                {errors.transgender && <p className="error">This field is required.</p>}

                {/* AGES */}
                <h3>Date of birth</h3>
                <div className="dob-container">
                    <input
                        className="dob"
                        type="text"
                        name="dobMonth"
                        placeholder="MM"
                        autoComplete="off"
                        ref={register({
                            required: true,
                            minLength: 2,
                            maxLength: 2,
                            min: 1,
                            max: 12
                        })} />
                    <input
                        className="dob"
                        type="text"
                        name="dobDay"
                        placeholder="DD"
                        autoComplete="off"
                        ref={register({
                            required: true,
                            minLength: 2,
                            maxLength: 2
                        })} />
                    <input
                        className="dob"
                        type="text"
                        name="dobYear"
                        placeholder="YYYY"
                        autoComplete="off"
                        ref={register({
                            required: true,
                            minLength: 4,
                            maxLength: 4
                        })} />
                </div>
                <span>Required</span>

                {/* error handling for month input for data of birth */}
                {errors.dobMonth && errors.dobMonth.type === "required" && <p className="error">A month is required.</p>}
                {errors.dobMonth && errors.dobMonth.type === "minLength" && <p className="error">Please enter a valid month.</p>}
                {errors.dobMonth && errors.dobMonth.type === "maxLength" && <p className="error">Please enter a valid month.</p>}

                {/* error handling for day input for data of birth */}
                {errors.dobDay && errors.dobDay.type === "required" && <p className="error">A day is required.</p>}
                {errors.dobDay && errors.dobDay.type === "minLength" && <p className="error">Please enter a valid day.</p>}
                {errors.dobDay && errors.dobDay.type === "maxLength" && <p className="error">Please enter a valid day.</p>}

                {/* error handling for year input for data of birth */}
                {errors.dobYear && errors.dobYear.type === "required" && <p className="error">A year is required.</p>}
                {errors.dobYear && errors.dobYear.type === "minLength" && <p className="error">Please enter a valid year.</p>}
                {errors.dobYear && errors.dobYear.type === "maxLength" && <p className="error">Please enter a valid year.</p>}

                <input type="submit" value="Continue" />

                {/* pass down the path to the next page through props */}
                {/* <Controls next="/subscribe" /> */}

                <div className="controls">
                    <Control>Go Back</Control>
                    <Control>Save</Control>
                </div>


                {/* progress bar */}
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

            {console.log(demographicData)}
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

    // Error styling
    p.error {
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
        color: #db3737;
        font-size: 1.2rem;
        font-weight: 500;
    }

    // Top heading
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 3rem;

        @media (max-width: 500px) {
            font-size: 3.5rem;
        }

        @media (max-width: 400px) {
            font-size: 3rem;
        }
    }

    // Top heading tagline
    p.description {
        font-size: 2rem;
        margin: 1rem 0;

        // mobile breakpoint at 540px
        @media (max-width: 540px) {
            font-size: 1.8rem;
        }

        @media(max-width: 500px) {
            font-size: 1.4rem;
            text-align: center;
        }

        @media(max-width: 400px) {
            text-align: center;
            padding: 0 5%;
        }
    }

    // Form heading
    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 2.5rem;
        margin-top: 3rem;

        @media (max-width: 310px) {
            font-size: 2.5rem;
        }
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

        @media (min-width: 1080px) {
            width: 800px;
            padding: 0 5%;
        }

        @media (max-width: 500px) {
            width: 95%;
        }

        // Content and field separation within form
        div {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 900;
            margin: 1rem 0;
            display: flex;
            align-items: center;

            @media (max-width: 310px) {
                font-size: 1.6rem;
            }
        }

        // Date of birth container
        .dob-container {
            width: 100%;
        }

        // Date of birth input styling
        input[type=text].dob {
            width: 33%;
            height: 5rem;
            font-weight: 900;
            font-size: 2rem;
            padding-left: 1rem;

            @media (max-width: 340px) {
                font-size: 1.6rem;
            }

            @media (max-width: 285px) {
                font-size: 1.2rem;
            }

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }
        }

        // Radio button styling
        input[type=radio] {
            height: 3rem;
            width: 10%;
            margin-right: 1rem;
        }

        // Checkbox styling
        input[type=checkbox] {
            height: 3rem;
            width: 10%;
            border-radius: 50%;

            // mobile breakpoint at 600px
            @media (max-width: 600px) {
                margin-right: 0.5rem;
            }
        }

        // Select input styling
        select {
            margin: 1rem 0 0.5rem;
            height: 5rem;
            font-size: 1.6rem;
            padding-left: 1rem;
            font-weight: 700;

            &:focus {
                outline: none;
                border: 1px solid #FAEB00;
            }
        }

        // Submit button styling
        input[type=submit] {
            font-family: 'Noto Serif', serif;
            font-weight: 700;
            font-size: 2rem;
            height: 5rem;
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

        .controls {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

const Control = styled.button`
    width: 45%;
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    font-size: 1.4rem;
    height: 5rem;
    border: none;
    border-radius: 0.5rem;
    background: #FFF600;
    padding: 0.5rem 1rem;
    transition: all 300ms;
    margin: 1rem 0 0;

    &:hover {
        transition: background 300ms;
        background: #FAEB00;
        cursor: pointer;
    }
`;
