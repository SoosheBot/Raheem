import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

/* bring in our global form store */
import { formStore } from "../../formStore.js";

/* styles */
import { FilterContainer, TopBar, FilterTop, Controls, SortContainer, SortTop } from '../../styles/dashboard/filter';
import { LargeButtonPrimary } from '../../styles/dashboard';

export default function Sort(props) {

    /* bring in state as props from StoryList */
    const { sorting, setSorting, queries, setQueries } = props;

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

    /* configure react-hook-form */
    const { register, errors, handleSubmit } = useForm();

    /* handle sort form submission */
    const onSubmit = (data) => {
        dispatch({ type: 'SORT', payload: data });
        setSorting(false);
    }

    return (
        <FilterContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <input type="radio" name="sort" value="Newest" ref={register()} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <p className="inp-text">Oldest</p>
                            <input type="radio" name="sort" value="Oldest" ref={register()} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <p className="inp-text">Highest rated</p>
                            <input type="radio" name="sort" value="Highest rated" ref={register()} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <p className="inp-text">Lowest rated</p>
                            <input type="radio" name="sort" value="Lowest rated" ref={register()} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <p className="inp-text">Most solidarity</p>
                            <input type="radio" name="sort" value="Most solidarity" ref={register()} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </SortContainer>

                <Controls>
                    <LargeButtonPrimary type="submit" onClick={() => {
                        // window.scroll(0, 0);
                    }}>Done</LargeButtonPrimary>
                </Controls>
            </form>
        </FilterContainer>
    )
}
