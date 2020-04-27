import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* victory */
<<<<<<< HEAD
// import { VictoryBar, VictoryChart, VictoryContainer } from 'victory';
=======
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
>>>>>>> ecbf60b943685de68d7e26ad94698ed654850d9b

/* firebase */
import firebase from '../../config/firebase';

/* bring in our global form store */
import { formStore } from "../../formStore.js";

/* styles */
import { PageContainer } from '../../styles/global';
import { Title, StoryListContainer, TopContainer, SliderContainer, TagStatContainer, StoryListSearch } from '../../styles/dashboard/storyList';

/* assets */
import CarotDown from '../../assets/CarotDown.svg';
import Search from '../../assets/Search.svg';

/* components */
import Story from '../Dashboard/Story';
import Filter from './Filter';
import Sort from './Sort';

export default function StoryList() {

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    // const { dispatch } = globalState;

    /* configure react-hook-form for searching */
    const { register, handleSubmit, errors } = useForm();

    const [reports, setReports] = useState([]); // state for reports
    const [filtering, setFiltering] = useState(false); // toggleable filter state
    const [sorting, setSorting] = useState(false); // toggleable sorting state
    const [queries, setQueries] = useState([]);

    /* handle search input on submission */
    const onSubmit = (data) => {
        console.log(data);
    }

    const [tagTotals, setTagTotals] = useState({
        helped: 0,
        protected: 0,
        illegally_searched: 0,
        profiled: 0,
        physically_attacked: 0,
        harassed: 0,
        wrongly_accused: 0,
        disrespected: 0,
        neglected: 0
    })

    /* useEffect to grab all reports */
    useEffect(() => {
        firebase
            .firestore()
            .collection("reports")
            .get()
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    data.push({ id: doc.id, ...doc.data() });
                })
                setReports(data);
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, []);

    /* check globalState for search filters and render reports based
        on any selected filters by the user */
    useEffect(() => {

        /* query for reports based specifically on gender */
        if (globalState.state.gender !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('gender', '==', `${globalState.state.gender}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query for reports based specifically on race */
        if (globalState.state.race !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('race', '==', `${globalState.state.race}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query for reports specifically based on tags */
        if (globalState.state.tag !== undefined && globalState.state.tag.length) {
            firebase
                .firestore()
                .collection("reports")
                .where('tags', 'array-contains-any', globalState.state.tag)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query for reports based on tags and race */
        if (globalState.state.tag !== undefined && globalState.state.tag.length && globalState.state.race !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('tags', 'array-contains-any', globalState.state.tag)
                .where('race', '==', `${globalState.state.race}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query for reports based on tags and gender */
        if (globalState.state.tag !== undefined && globalState.state.tag.length && globalState.state.gender !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('tags', 'array-contains-any', globalState.state.tag)
                .where('gender', '==', `${globalState.state.gender}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query reports based on tags, race, and gender */
        if (globalState.state.tag !== undefined && globalState.state.tag.length && globalState.state.gender !== '' && globalState.state.race !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('tags', 'array-contains-any', globalState.state.tag)
                .where('gender', '==', `${globalState.state.gender}`)
                .where('race', '==', `${globalState.state.race}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* query reports based on race, and gender */
        if (globalState.state.gender !== '' && globalState.state.race !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('gender', '==', `${globalState.state.gender}`)
                .where('race', '==', `${globalState.state.race}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* sort reports by highest rated first */
        if (globalState.state.sort !== undefined && globalState.state.sort === 'Highest rated') {
            firebase
                .firestore()
                .collection("reports")
                .orderBy('rating', 'desc')
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* sort reports by lowest rated first */
        if (globalState.state.sort !== undefined && globalState.state.sort === 'Lowest rated') {
            firebase
                .firestore()
                .collection("reports")
                .orderBy('rating', 'asc')
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* sort reports by newest first */
        if (globalState.state.sort !== undefined && globalState.state.sort === 'Newest') {
            firebase
                .firestore()
                .collection("reports")
                .orderBy('reportDate', 'asc')
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* sort reports by oldest first */
        if (globalState.state.sort !== undefined && globalState.state.sort === 'Oldest') {
            firebase
                .firestore()
                .collection("reports")
                .orderBy('reportDate', 'desc')
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }
    }, [globalState]);

    /* get the total amount of total tags in the reports
        not performant at all. need to refactor to utilize a more efficient
        way of totaling up our tag counts */
    const getTagTotals = () => {

        /* temporary state to hold tag totals as they're being calculated */
        let helpedTag = 0;
        let protectedTag = 0;
        let illegallySearchedTag = 0;
        let profiledTag = 0;
        let physicallyAttackedTag = 0;
        let harassedTag = 0;
        let wronglyAccusedTag = 0;
        let disrespectedTag = 0;
        let neglectedTag = 0;

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'helped') {
                    helpedTag++;
                }

                return helpedTag;
            })

            return helpedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'protected') {
                    protectedTag++;
                }

                return protectedTag;
            })

            return protectedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'illegally searched') {
                    illegallySearchedTag++;
                }

                return illegallySearchedTag;
            })

            return illegallySearchedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'profiled') {
                    profiledTag++;
                }

                return profiledTag;
            })

            return profiledTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'physically attacked') {
                    physicallyAttackedTag++;
                }

                return physicallyAttackedTag;
            })

            return physicallyAttackedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'harassed') {
                    harassedTag++;
                }

                return harassedTag;
            })

            return harassedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'wrongly accused') {
                    wronglyAccusedTag++;
                }

                return wronglyAccusedTag;
            })

            return wronglyAccusedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'disrespected') {
                    disrespectedTag++;
                }

                return disrespectedTag;
            })

            return disrespectedTag;
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'neglected') {
                    neglectedTag++;
                }

                return neglectedTag;
            })

            return neglectedTag;
        });

        /* create an updated state object to pass into state to
            populate the tags graph */
        const updatedState = [
            { tag: 'helped', total: helpedTag },
            { tag: 'protected', total: protectedTag },
            { tag: 'illegally searched', total: illegallySearchedTag },
            { tag: 'profiled', total: profiledTag },
            { tag: 'physically attacked', total: physicallyAttackedTag },
            { tag: 'harassed', total: harassedTag },
            { tag: 'wrongly accused', total: wronglyAccusedTag },
            { tag: 'disrespected', total: disrespectedTag },
            { tag: 'neglected', total: neglectedTag }
        ]

        setTagTotals(updatedState); // update state
    }

    /* calculate tag totals for reports */
    useEffect(() => {
        getTagTotals();
    }, [reports]);

    return (
        <PageContainer>
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} reports={reports} setReports={setReports} />}
            {sorting === true && <Sort sorting={sorting} setSorting={setSorting} queries={queries} setQueries={setQueries} />}
            <StoryListContainer>
                <div className="title-container">
                    <Title className="active"><Link to="/dashboard/stories">Stories</Link></Title>
                    <Title><Link to="/dashboard/stats">Stats</Link></Title>
                    <Title><Link to="/dashboard/map">Map</Link></Title>
                </div>

                <TopContainer>
                    {reports.length && reports !== undefined ? (<p>{reports.length} reports</p>) : (<p>0 reports</p>)}
                </TopContainer>

                <SliderContainer />

                <TagStatContainer>
                    {tagTotals.length &&
                        // <VictoryChart padding={{ left: 120, top: 20, bottom: 30, right: 30 }}>
                        //     <VictoryBar data={tagTotals} horizontal="true" y="total" x="tag" />
                        // </VictoryChart>
                        <div className="stats-grid">
                            {tagTotals.map((tag, idx) => {
                                if (tag.total === 1) {
                                    return <p key={idx}><span className="bold">{tag.total}</span> person has been {tag.tag}</p>
                                }
                                else {
                                    return <p key={idx}><span className="bold">{tag.total}</span> people have been {tag.tag}</p>
                                }
                            })}
                        </div>
                    }
                </TagStatContainer>

                <p className="see-more"><Link to="/dashboard/stats">See More</Link></p>

                <StoryListSearch>
                    <div className="query">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                name="query"
                                ref={register()}
                                autoComplete="off"
                            />
                            <button type="submit" className="search">
                                <img src={Search} alt="Search" />
                            </button>
                        </form>
                    </div>

                    <div className="filter">
                        <div onClick={() => {
                            window.scroll(0, 0);
                            setFiltering(true);
                        }}>
                            <p>Filter <img src={CarotDown} alt="Drop Down" /></p>
                        </div>
                        <div onClick={() => {
                            window.scroll(0, 0);
                            setSorting(true);
                        }}>
                            {/* <p>Sort: <span>Newest</span> <img src={CarotDown} alt="Drop Down" /></p> */}
                            {globalState.state.sort !== undefined && globalState.state.sort !== '' && <p>Sort: <span>{globalState.state.sort}</span> <img src={CarotDown} alt="Drop Down" /></p>}
                            {globalState.state.sort === undefined && <p>Sort: <span>Newest</span> <img src={CarotDown} alt="Drop Down" /></p>}
                        </div>
                    </div>
                </StoryListSearch>

                <div className="list">
                    {
                        reports !== undefined && reports.length ? (reports.map((report, index) => <Story key={index} report={report} />)) : (<p className="no-reports">Stories are loading or are unavailable. Please try refreshing the page.</p>)
                    }
                </div>
            </StoryListContainer>
        </PageContainer >
    )
}
