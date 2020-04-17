import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

/*FireStore*/
import firebase from "../firebase";

/* styles */
import { PageContainer, Container, HeadingContainer, BackButton, Content, Divider, SmallDivider, HeaderContainer, SmallHeading, Controls } from '../styles/global';
import { TagContainer, Tag } from '../styles/tags';
import { ReportForm } from '../styles/global/forms.js';
import { SliderContainer, TxSlider, marks } from '../styles/slider';

//buttons
import { ButtonSecondary } from '../styles/global';

/* bring in our global form store */
import { formStore } from "../formStore.js";

/* material UI */
import Typography from "@material-ui/core/Typography";

/* components */
import Officer from "../components/Officer";

/* assets */
import Back from "../assets/Back.svg";

export default function Report(props) {
  /* bring in useHistory hook from react-router-dom */
  const history = useHistory();
  const location = useLocation();

  /* configure react-hook-form */
  const { register, handleSubmit, errors } = useForm();

  /* bring in our global state using the useContext hook
    and our form store */
  const globalState = useContext(formStore);

  // console.log(globalState);

  /* deconstruct dispatch off globalState to dispatch an action */
  const { dispatch } = globalState;

  /* state for an array of the user's selected / toggled tags */
  const [toggledTags, setToggledTags] = useState([]);

  const [rating, setRating] = useState("");

  /* state for officer passed in from Landing component */
  const [officer, setOfficer] = useState(location.state);

  console.log(location);

  /* function to actually toggle / select a specific tag */
  const toggleTag = (e) => {
    e.preventDefault(); // prevent default refresh from button clicks
    e.target.classList.toggle("toggled"); // toggle the 'toggled' class for styling when clicked

    /* if our toggled tags array does NOT include the selected tag,
            then we should add it to our toggled tags array */
    if (!toggledTags.includes(e.target.value)) {
      setToggledTags([...toggledTags, e.target.value]);
    } else {
      /* otherwise we should filter it out, and update our toggled tags state 
                with the remaining toggled tags */
      const filter = toggledTags.filter((tag) => tag !== e.target.value);
      setToggledTags(filter);
    };
  }

  /* handle submit for the demographics form */
  const onSubmit = (data) => {
    console.log(`DATA: `, data);
    dispatch({
      type: 'REPORT',
      payload: {
        email: data.email,
        officerId: officer.officerBadgeID,
        race: data.race,
        gender: data.gender,
        selfIdentify: data.self_identify,
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
          selfIdentify: data.self_identify,
          officerId: officer.officerBadgeID,
          email: data.email,
          time: data.time,
          rating: rating,
          tags: toggledTags,
          dob: `${data.dobMonth}/${data.dobDay}/${data.dobYear}`,
          incidentDate: `${data.incidentMonth}/${data.incidentDay}/${data.incidentYear}`,
        }
      )
      .then(
        function (doc) {
          dispatch({
            type: 'REPORT', payload: {
              reportId: doc.id
            }
          })
        })

    history.push('/story', officer);
  }

  const handleRatingChange = (e, value) => {
    setRating(value);
  }

  return (
    <PageContainer>
      <Container>

        <HeaderContainer>
          <BackButton className="go-back">
            <img onClick={() => history.goBack()} src={Back} alt="Go Back" />
          </BackButton>

          {location.state === undefined &&
            <div className="no-officer">
              <p className="no-officer-text">No officer information was loaded.</p>
              <p className="no-officer-text">Please rescan your QR code or continue submitting
                            your report with no officer information attached.</p>
            </div>
          }

          {officer && officer.officer !== false &&
            <Officer
              profile={{
                officer: `${officer.officerRank} ${officer.officerLName}`,
                precinct: officer.PoliceDepartment,
                badge: officer.officerBadgeID,
                img: officer.img
              }} />
          }
        </HeaderContainer>
      </Container>

      <Divider />

      <Container>
        <HeadingContainer className="page-top">
          <h2>How Were you Treated?</h2>
        </HeadingContainer>

        <Content>
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
        </Content>

        <HeadingContainer>
          <h2>I was _____. <span className="light">(select as many as apply)</span></h2>
        </HeadingContainer>

        <Content>
          <TagContainer>
            <Tag onClick={toggleTag} value="helped">helped</Tag>
            <Tag onClick={toggleTag} value="protected">protected</Tag>
            <Tag onClick={toggleTag} value="physically attacked">illegally searched</Tag>
            <Tag onClick={toggleTag} value="profiled">profiled</Tag>
            <Tag onClick={toggleTag} value="physically attacked">physically attacked</Tag>
            <Tag onClick={toggleTag} value="harassed">harassed</Tag>
            <Tag onClick={toggleTag} value="wrongly accused">wrongly accused</Tag>
            <Tag onClick={toggleTag} value="disrespected">disrespected</Tag>
            <Tag onClick={toggleTag} value="neglected">neglected</Tag>
          </TagContainer>
        </Content>

        <HeadingContainer>
          <h2>When Did This Happen?</h2>
          <p> Enter the date and time as best as you can remember.</p>
        </HeadingContainer>

        <ReportForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Content>
              <SmallHeading>Incident Date</SmallHeading>
              <div className="inputs, date">
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

              <div className="dateerror">
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
              </div>

              <SmallHeading></SmallHeading>
              <div className="inputs">
                <input type="time" placeholder="time" name="time" ref={register} defaultValue="15:00" />
              </div>
            </Content>

            <SmallDivider />
            <HeadingContainer>
              <h2>Contact Information </h2>
              <p>This allows us to contact you in the event that further information is needed.</p>
            </HeadingContainer>

            <Content>
              <SmallHeading>Email</SmallHeading>
              <div className="inputs">
                <input
                  className="email"
                  name="email"
                  data-testid="emailInput"
                  type="text"
                  placeholder="email@example.com"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid e-mail address"
                    }
                  })}
                />
              </div>
              {/* error handling for email */}
              {errors.email && errors.email.type === "required" && <p className="error">An e-mail is required.</p>}
            </Content>

            <SmallDivider />
            <HeadingContainer>
              <h2>About You</h2>
              <p>Help us understand how police treat people like you.</p>
            </HeadingContainer>

            <Content className="about-you">
              {/* RACE INPUTS */}
              <SmallHeading>Race</SmallHeading>

              <div className="raceDesktop">
                <div className="raceColumns">
                  <label className="container">
                    <span className="inp-text">Asian</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="asian" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="asian" />
                                    Asian
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Black/African</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="african american" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="african american" />
                                    Black/African
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Latinx</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="latinx" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="latinx" />
                                    Latinx
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Middle Eastern</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="middle eastern" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="middle eastern" />
                                    Middle Eastern
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Native American</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="native american" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="native american" />
                                    Native American
                  </div> */}
                </div>
                <div className="raceColumns">
                  <label className="container">
                    <span className="inp-text">Pacific Islander</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="pacific islander" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="pacific islander" />
                                    Pacific Islander
                  </div> */}
                  <label className="container">
                    <span className="inp-text">South Asian</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="south asian" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="south asian" />
                                    South Asian
                  </div> */}
                  <label className="container">
                    <span className="inp-text">White</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="white" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="white" />
                                    White
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Multiracial</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="multiracial" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="multiracial" />
                                    Multiracial
                  </div> */}
                  <label className="container">
                    <span className="inp-text">Prefer Not To Say</span>
                    <input type="radio" name="race" ref={register({ required: true })} value="opt out" />
                    <span className="checkmark"></span>
                  </label>
                  {/* <div className="radio">
                    <input name="race" type="radio" ref={register({ required: true })} value="no preference" />
                                    Prefer Not To Say
                  </div> */}
                </div>
              </div>

              {/* error handling for race inputs */}
              {errors.race && <p className="error">Please select your race.</p>}
            </Content>
            <Content className="about-you">
              {/* GENDER INPUTS */}
              <SmallHeading>Gender</SmallHeading>

              <label className="container">
                <span className="inp-text">Female</span>
                <input type="radio" name="gender" ref={register({ required: true })} value="female" />
                <span className="checkmark"></span>
              </label>
              {/* <div className="radio">
                <input name="gender" type="radio" ref={register()} value="female" />
                            Female
              </div> */}
              <label className="container">
                <span className="inp-text">Male</span>
                <input type="radio" name="gender" ref={register({ required: true })} value="male" />
                <span className="checkmark"></span>
              </label>
              {/* <div className="radio">
                <input name="gender" type="radio" ref={register()} value="male" />
                            Male
              </div> */}
              <label className="container">
                <span className="inp-text">Non-Binary</span>
                <input type="radio" name="gender" ref={register({ required: true })} value="non binary" />
                <span className="checkmark"></span>
              </label>
              {/* <div className="radio">
                <input name="gender" type="radio" ref={register()} value="non binary" />
                            Non-Binary
              </div> */}
              <label className="container">
                <span className="inp-text">Prefer Not To Say</span>
                <input type="radio" name="gender" ref={register({ required: true })} value="opt out" />
                <span className="checkmark"></span>
              </label>
              {/* <div className="radio">
                <input name="gender" type="radio" ref={register()} value="opt out" />
                            Prefer Not To Say
              </div> */}
              {/* Prefer To Self-Identify */}
              <label className="container">
                <input type="radio" name="gender" ref={register({ required: true })} value="female" />
                <span className="checkmark"></span>
                <input
                  style={{ width: '90%', position: 'relative', top: '-2.5rem' }}
                  className="self"
                  type="text"
                  name="self_identify"
                  placeholder="Self Identify"
                  autoComplete="off"
                  ref={register()}
                />
              </label>
              {/* <div className="radio">
                <input name="gender" type="radio" ref={register()} value="self identify" />
                <input
                  style={{ width: '75%' }}
                  className="self"
                  type="text"
                  name="self_identify"
                  placeholder="Prefer To Self Identify"
                  autoComplete="off"
                  ref={register()}
                />
              </div> */}
            </Content>
            <Content className="page-end-desktop">
              {/* AGE INPUTS*/}
              <div className="inputs" style={{ flexDirection: 'column' }}>
                <SmallHeading>Date of Birth</SmallHeading>
                <div className="dob-container, date">
                  <input
                    className="dob incident"
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
                    className="dob incident"
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
                    className="dob incident"
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
              </div>

              <div className="dateerror">
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
              </div>
            </Content>

            {/* submit the form and continue through the flow */}
            <Controls>
              <ButtonSecondary type="submit">Continue</ButtonSecondary>
              <p> You'll have the opportunity to say more on the next page.</p>
            </Controls>
          </form>
        </ReportForm>
      </Container >
    </PageContainer>
  )
}
