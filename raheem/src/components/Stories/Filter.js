import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

/* firebase */
import firebase from '../../config/firebase';

/* bring in our global form store */
import { formStore } from "../../formStore.js";

/* styles */
import { FilterContainer, TopBar, FilterTop, FilterHeading, GroupInputContainer, FilterSearch, Controls } from '../../styles/dashboard/filter';
import { SmallButtonPrimary, SmallButtonSecondary } from '../../styles/dashboard';

/* assets */
import Search from '../../assets/Search.svg';

export default function Filter(props) {

    /* bring in our global state using the useContext hook
        and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    /* configure react-hook-form */
    const { register, handleSubmit, errors } = useForm();
    const { filtering, setFiltering, reports, setReports } = props;

    /* handle form submission */
    const onSubmit = (data) => {
        console.log(data);
        dispatch({ type: 'FILTER', payload: data });
        setFiltering(false);
    }

    if (filtering === true) {
        return (
            <FilterContainer>
                <TopBar />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FilterTop>
                        <div className="close">
                            <div className="top-text">
                                <p>Filter</p>
                            </div>
                            <div className="exit">
                                <p onClick={() => {
                                    setFiltering(false);
                                }}>&#x78;</p>
                            </div>
                        </div>

                        <div className="matched-stories">
                            <p>84 stories match selected filters</p>
                        </div>

                    </FilterTop>

                    <FilterHeading>Stories about</FilterHeading>
                    <GroupInputContainer>
                        <div className="inputs">
                            <label className="container">
                                <span>Help</span>
                                <input type="checkbox" name="tag" value="helped" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>False accusation</span>
                                <input type="checkbox" name="tag" value="wrongly accused" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Protection</span>
                                <input type="checkbox" name="tag" value="protected" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Neglect</span>
                                <input type="checkbox" name="tag" value="neglected" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Profiling</span>
                                <input type="checkbox" name="tag" value="profiled" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Physical Attack</span>
                                <input type="checkbox" name="tag" value="physically attacked" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Harassment</span>
                                <input type="checkbox" name="tag" value="harassed" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Illegal search</span>
                                <input type="checkbox" name="tag" value="illegally searched" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Disrespect</span>
                                <input type="checkbox" name="tag" value="disrespected" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </GroupInputContainer>

                    <FilterHeading>Stories told by</FilterHeading>
                    <GroupInputContainer>
                        <h3>Race</h3>
                        <div className="inputs">
                            <label className="container">
                                <span>Asian</span>
                                <input type="radio" name="race" value="asian" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Native American</span>
                                <input type="radio" name="race" value="native american" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Black/African</span>
                                <input type="radio" name="race" value="african american" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Pacific Islander</span>
                                <input type="radio" name="race" value="pacific islander" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Latinx</span>
                                <input type="radio" name="race" value="latinx" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>South Asian</span>
                                <input type="radio" name="race" value="south asian" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Middle Eastern</span>
                                <input type="radio" name="race" value="middle eastern" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>White</span>
                                <input type="radio" name="race" value="white" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Multiracial</span>
                                <input type="radio" name="race" value="multiracial" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Prefer not to say</span>
                                <input type="radio" name="race" value="opt out" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </GroupInputContainer>

                    <GroupInputContainer>
                        <h3>Gender</h3>
                        <div className="inputs">
                            <label className="container">
                                <span>Man</span>
                                <input type="radio" name="gender" value="male" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Woman</span>
                                <input type="radio" name="gender" value="female" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Non-binary</span>
                                <input type="radio" name="gender" value="non binary" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Prefer not to say</span>
                                <input type="radio" name="gender" value="opt out" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>Self Identified</span>
                                <input type="radio" name="gender" value="self identify" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </GroupInputContainer>

                    <GroupInputContainer>
                        <h3>Age</h3>
                        <div className="inputs">
                            <label className="container">
                                <span>{`<18`}</span>
                                <input type="radio" name="age" value="<18" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>46-55</span>
                                <input type="radio" name="age" value="46-55" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>19-25</span>
                                <input type="radio" name="age" value="19-25" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>56-65</span>
                                <input type="radio" name="age" value="56-65" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>26-35</span>
                                <input type="radio" name="age" value="26-35" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>66-75</span>
                                <input type="radio" name="age" value="66-75" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>36-45</span>
                                <input type="radio" name="age" value="36-45" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">
                                <span>76+</span>
                                <input type="radio" name="age" value="76+" ref={register()} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </GroupInputContainer>

                    <FilterHeading>Stories near</FilterHeading>
                    <FilterSearch>
                        <div className="query">
                            <input
                                type="text"
                                name="query"
                                autoComplete="off"
                            />
                            <div className="search">
                                <img src={Search} alt="Search" />
                            </div>
                        </div>
                    </FilterSearch>

                    <Controls>
                        <SmallButtonSecondary onClick={() => {
                            setFiltering(false);
                            window.location.reload();
                        }}>Reset</SmallButtonSecondary>
                        <SmallButtonPrimary type="submit" onClick={() => {
                            window.scroll(0, 0);
                        }}>Done</SmallButtonPrimary>
                    </Controls>
                </form>
            </FilterContainer>
        )
    }
    else {
        return null;
    }
}
