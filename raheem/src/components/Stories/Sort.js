import React from 'react';

/* styles */
import { FilterContainer, TopBar, FilterTop, Controls, SortContainer, SortTop } from '../../styles/dashboard/filter';
import { LargeButtonPrimary } from '../../styles/dashboard';

export default function Sort(props) {

    /* bring in state as props from StoryList */
    const { sorting, setSorting, queries, setQueries } = props;

    return (
        <FilterContainer>
            <TopBar />
            <SortTop>
                <div className="close">
                    <div className="top-text">
                        <p>Sort</p>
                    </div>
                    <div className="exit">
                        <p onClick={() => {
                            setSorting(false);
                        }}>&#x78;</p>
                    </div>
                </div>
            </SortTop>

            <SortContainer>
                <div className="inputs">
                    <label className="container">
                        <p className="inp-text">Newest</p>
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <label className="container">
                        <p className="inp-text">Oldest</p>
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <label className="container">
                        <p className="inp-text">Highest rated</p>
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <label className="container">
                        <p className="inp-text">Lowest rated</p>
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    <label className="container">
                        <p className="inp-text">Most solidarity</p>
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </SortContainer>

            <Controls>
                <LargeButtonPrimary onClick={() => {
                    setSorting(false);
                    window.scroll(0, 0);
                }}>Done</LargeButtonPrimary>
            </Controls>
        </FilterContainer>
    )
}
