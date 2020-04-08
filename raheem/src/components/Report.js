import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/*FireStore*/
import firebase from "../firebase"

/* styles */
import { Container, Content, Label } from '../styles/global';
import { TagContainer, Tag } from '../styles/tags';
import { ReportForm } from '../styles/global/forms.js';
import { SliderContainer, HeaderContainer, TxSlider, marks } from '../styles/slider';

/* bring in our global form store */
import { formStore } from '../formStore.js';

/* material UI */
import Typography from '@material-ui/core/Typography';

/* components */
import Officer from '../components/Officer';

export default function Report() {

    /* bring in useHistory hook from react-router-dom */
    const history = useHistory();

    /* configure react-hook-form */
    const { register, handleSubmit, errors } = useForm();

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    console.log(globalState);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    /* state for an array of the user's selected / toggled tags */
    const [toggledTags, setToggledTags] = useState([]);

    const [rating, setRating] = useState('');

    /* function to actually toggle / select a specific tag */
    const toggleTag = (e) => {
        e.preventDefault(); // prevent default refresh from button clicks
        e.target.classList.toggle('toggled'); // toggle the 'toggled' class for styling when clicked

        /* if our toggled tags array does NOT include the selected tag,
            then we should add it to our toggled tags array */
        if (!toggledTags.includes(e.target.value)) {
            setToggledTags([
                ...toggledTags,
                e.target.value
            ]);
        }
        else {
            /* otherwise we should filter it out, and update our toggled tags state 
                with the remaining toggled tags */
            const filter = toggledTags.filter(tag => tag !== e.target.value);
            setToggledTags(filter);
        }
    }

    /* handle submit for the demographics form */
    const onSubmit = (data) => {
        // console.log(data);
        dispatch({
            type: 'REPORT', payload: {
                race: data.race,
                gender: data.gender,
                transgender: data.transgender,
                time: data.time,
                rating: rating,
                tags: toggledTags,
                dob: `${data.dobMonth}/${data.dobDay}/${data.dobYear}`,
                incidentDate: `${data.incidentMonth}/${data.incidentDay}/${data.incidentYear}`
            }
        }); // update our global state

        //send report to firestore
        firebase
        .firestore()
        .collection('reports')
        .add(
            {
                race: data.race,
                gender: data.gender,
                transgender: data.transgender,
                time: data.time,
                rating: rating,
                tags: toggledTags,
                dob: `${data.dobMonth}/${data.dobDay}/${data.dobYear}`,
                incidentDate: `${data.incidentMonth}/${data.incidentDay}/${data.incidentYear}`
                
            }
        )
        .then(
            function(doc) {
                dispatch({
                type: 'REPORT', payload: {
                    reportId: doc.id
                }
            })}
        )
        history.push(`/story`); // push the user to the story component
    }

    const handleRatingChange = (e, value) => {
        setRating(value);
    }

    return (
        <Container>
            <Content>
                <Officer profile={{
                    officer: "Officer Peyton",
                    precinct: "#15",
                    badge: "R4567"
                }} />

                <HeaderContainer>
                    <h2>How were you treated?</h2>
                </HeaderContainer>
                <SliderContainer>
                    <Typography gutterBottom></Typography>
                    <TxSlider
                        valueLabelDisplay="auto"
                        aria-label="slider"
                        defaultValue={0}
                        step={1}
                        marks={marks}
                        min={1}
                        max={10}
                        name="rating"
                        onChangeCommitted={handleRatingChange} />
                </SliderContainer>

                <Label>I was <span className="light">(click as many as apply)</span></Label>
                <TagContainer>
                    <Tag onClick={toggleTag} value="helped">helped</Tag>
                    <Tag onClick={toggleTag} value="protected">protected</Tag>
                    <Tag onClick={toggleTag} value="profiled">profiled</Tag>
                    <Tag onClick={toggleTag} value="neglected">neglected</Tag>
                    <Tag onClick={toggleTag} value="harassed">harassed</Tag>
                    <Tag onClick={toggleTag} value="wrongly accused">wrongly accused</Tag>
                    <Tag onClick={toggleTag} value="disrespected">disrespected</Tag>
                    <Tag onClick={toggleTag} value="physically attacked">physically attacked</Tag>
                </TagContainer>

                {/* ensuring our toggled tags array is working correctly */}
                {/* {console.log(toggledTags)} */}

                <ReportForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>When did this happen?</h2>
                        <p className="description">Enter the date and time as best as you can remember.</p>
                        <div>
                            <input
                                className="incident"
                                type="text"
                                name="incidentMonth"
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
                                className="incident"
                                type="text"
                                name="incidentDay"
                                placeholder="DD"
                                autoComplete="off"
                                ref={register({
                                    required: true,
                                    minLength: 2,
                                    maxLength: 2
                                })} />
                            <input
                                className="incident"
                                type="text"
                                name="incidentYear"
                                placeholder="YYYY"
                                autoComplete="off"
                                ref={register({
                                    required: true,
                                    minLength: 4,
                                    maxLength: 4
                                })} />
                        </div>

                        {/* error handling for month input for incident */}
                        {errors.incidentMonth && errors.incidentMonth.type === "required" && <p className="error">A month is required.</p>}
                        {errors.incidentMonth && errors.incidentMonth.type === "minLength" && <p className="error">Please enter a valid month.</p>}
                        {errors.incidentMonth && errors.incidentMonth.type === "maxLength" && <p className="error">Please enter a valid month.</p>}

                        {/* error handling for day input for incident */}
                        {errors.incidentDay && errors.incidentDay.type === "required" && <p className="error">A day is required.</p>}
                        {errors.incidentDay && errors.incidentDay.type === "minLength" && <p className="error">Please enter a valid day.</p>}
                        {errors.incidentDay && errors.incidentDay.type === "maxLength" && <p className="error">Please enter a valid day.</p>}

                        {/* error handling for year input for incident */}
                        {errors.incidentYear && errors.incidentYear.type === "required" && <p className="error">A year is required.</p>}
                        {errors.incidentYear && errors.incidentYear.type === "minLength" && <p className="error">Please enter a valid year.</p>}
                        {errors.incidentYear && errors.incidentYear.type === "maxLength" && <p className="error">Please enter a valid year.</p>}

                        <input type="time" placeholder="time" name="time" ref={register} defaultValue="15:00" />

                        <h2>About you</h2>
                        <p className="description">Help us understand how police treat people like you.</p>

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

                        <span>You'll have the opportunity to say more</span>
                    </form>
                </ReportForm>
            </Content>
        </Container >
    )
}
