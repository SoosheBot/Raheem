import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

/* styles */
import { DemographicsContainer, Control } from '../styles/demographics';

/* bring in our global form store */
import { formStore } from '../formStore.js';

/* validation */
import { useForm } from 'react-hook-form';

/* this function collects information about the users */
function Demographics() {

    /* bring in our global state using the useContext hook
        and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    /* make sure we've successfully pulled in our global state */
    console.log(globalState);

    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    /* state to pass up through context for completion of this part of the form */
    const [demographicData, setDemographicData] = useState({});

    /* configure react-hook-form */
    const { register, handleSubmit, errors } = useForm();

    /* handle submit for the demographics form */
    const onSubmit = (data) => {
        dispatch({ type: 'DEMOGRAPHICS', payload: data }); // update our global state
        setDemographicData({ ...data, dob: `${data.dobMonth}/${data.dobDay}/${data.dobYear}` })
        history.push(`/subscribe`); // push the user to the subscribe component
    }

    return (
        <DemographicsContainer>

            <h2>About you</h2>
            <p className="description">Help us understand how police treat people like you.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* RACE INPUTS */}
                <h3>Your Race</h3>
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

                {/* error handling for race inputs */}
                {errors.race && <p className="error">Please select your race.</p>}

                {/* GENDER INPUTS */}
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

                {errors.gender && <p className="error">Please select a gender.</p>}

                {/* Is the user transgender? */}
                <div>
                    <input name="transgender" type="checkbox" ref={register} value="true" />
                    I identify as trans
                </div>

                {/* error handling for transgender input */}
                {errors.transgender && <p className="error">This field is required.</p>}

                {/* AGE INPUTS*/}
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

                {/* submit the form and continue through the flow */}
                <input type="submit" value="Add this report" />

                {/* button controls to go back or save form submission */}
                {/* <div className="controls">
                    <Control>Go Back</Control>
                    <Control>Save</Control>
                </div> */}

                {/* progress bar */}
                {/* <div className="progressContainer">
                </div> */}
            </form>
        </DemographicsContainer>
    )
}

export default Demographics;

