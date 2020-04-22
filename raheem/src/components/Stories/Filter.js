import React from 'react';

/* styles */
import { FilterContainer, TopBar, FilterTop, FilterHeading, GroupInputContainer, FilterSearch, Controls } from '../../styles/dashboard/filter';
import { SmallButtonPrimary, SmallButtonSecondary } from '../../styles/dashboard';

/* assets */
import Search from '../../assets/Search.svg';

export default function Filter(props) {

    const { filtering, setFiltering } = props;

    if (filtering === true) {
        return (
            <FilterContainer>
                <TopBar />

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
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>False accusation</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Protection</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Neglect</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Profiling</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Physical Attack</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>                        <label className="container">
                            <span>Harassment</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Illegal search</span>
                            <input type="checkbox" />
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
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Native American</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Black/African</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Pacific Islander</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Latinx</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>South Asian</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>                        <label className="container">
                            <span>Middle Eastern</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>White</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Multiracial</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Prefer not to say</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </GroupInputContainer>

                <GroupInputContainer>
                    <h3>Gender</h3>
                    <div className="inputs">
                        <label className="container">
                            <span>Man</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Woman</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Non-binary</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Prefer not to say</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>Self Identified</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </GroupInputContainer>

                <GroupInputContainer>
                    <h3>Age</h3>
                    <div className="inputs">
                        <label className="container">
                            <span>{`<18`}</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>46-55</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>19-25</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>56-65</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>26-35</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>66-75</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>36-45</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <span>76+</span>
                            <input type="checkbox" />
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
                    <SmallButtonSecondary>Reset</SmallButtonSecondary>
                    <SmallButtonPrimary onClick={() => {
                        setFiltering(false);
                        window.scroll(0, 0);
                    }}>Done</SmallButtonPrimary>
                </Controls>
            </FilterContainer>
        )
    }
    else {
        return null;
    }
}
