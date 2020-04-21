import React from 'react';

/* styles */
import { FilterContainer, TopBar, FilterTop, FilterHeading } from '../../styles/dashboard/filter';

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

            </FilterContainer>
        )
    }
    else {
        return null;
    }
}
