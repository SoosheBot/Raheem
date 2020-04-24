import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* victory */
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

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
import Filter from '../Stories/Filter';
import Sort from '../Stories/Sort';

export default function Stories(props) {

    /* bring in the officer as props */
    const { officer } = props;

    /* bring in our global state using the useContext hook
    and our form store */
    const globalState = useContext(formStore);

    /* deconstruct dispatch off globalState to dispatch an action */
    const { dispatch } = globalState;

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

    console.log(`OFFICER BADGE ID `, officer.officerBadgeID);

    /* useEffect to grab all reports */
    useEffect(() => {
        console.log('did we make it here?');
        if (officer.officerBadgeID !== undefined && officer.officerBadgeID !== '') {
            firebase
                .firestore()
                .collection('reports')
                .where('officerId', '==', officer.officerBadgeID)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        console.log(`DATA WE'RE GETTING BACK `, doc.data());
                        data.push({ id: doc.id, ...doc.data() });
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }
    }, [officer]);

    /* check globalState for search filters and render reports based
        on any selected filters by the user */
    useEffect(() => {

        /* query for reports based specifically on gender */
        if (globalState.state.gender !== '') {
            firebase
                .firestore()
                .collection("reports")
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
                .where('officerId', '==', officer.officerBadgeID)
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
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'protected') {
                    protectedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'illegally searched') {
                    illegallySearchedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'profiled') {
                    profiledTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'physically attacked') {
                    physicallyAttackedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'harassed') {
                    harassedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'wrongly accused') {
                    wronglyAccusedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'disrespected') {
                    disrespectedTag++;
                }
            })
        });

        reports.map((report) => {
            report.tags.map((tag) => {
                if (tag === 'neglected') {
                    neglectedTag++;
                }
            })
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

        setTagTotals(updatedState);
    }

    useEffect(() => {
        getTagTotals();
    }, [reports]);

    return (
        <PageContainer>
            {console.log(`GLOBAL STATE ON STORYLIST `, globalState)}
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} reports={reports} setReports={setReports} />}
            {sorting === true && <Sort sorting={sorting} setSorting={setSorting} queries={queries} setQueries={setQueries} />}
            <StoryListContainer>
                <TopContainer>
                    {reports.length && reports !== undefined ? (<p>{reports.length} reports</p>) : (<p>0 reports</p>)}
                    <p><Link to="/report">Write a Story</Link></p>
                </TopContainer>

                <SliderContainer />

                <TagStatContainer>
                    {tagTotals.length &&
                        <VictoryChart padding={{ left: 120, top: 20, bottom: 30, right: 30 }}>
                            <VictoryBar data={tagTotals} horizontal="true" y="total" x="tag" />
                        </VictoryChart>
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





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// /* firebase */
// import firebase from '../../config/firebase';

// /* components */
// import Story from './Story';

// export default function Stories(props) {

//     /* descructure the officer's badge id from props */
//     const { officerBadgeID } = props;

//     /* grab our id from params to ensure we're still referring to the
//         same officer as before */
//     const params = useParams();

//     /* state for reports after hitting Firebase */
//     const [reports, setReports] = useState([]);

//     /* grab all reports made on the specific officer
//         from Firebase when our component mounts */
//     useEffect(() => {
//         firebase
//             .firestore()
//             .collection("reports")
//             .where('officerId', '==', Number(params.id))
//             .get()
//             .then(function (querySnapshot) {
//                 const data = [];
//                 querySnapshot.forEach(function (doc) {
//                     data.push({ id: doc.id, ...doc.data() });
//                 })
//                 setReports(data);
//             })
//             .catch(err => {
//                 console.log('FAIL');
//             })
//     }, [officerBadgeID, params.id]);

//     return (
//         <div>
//             {/* map over reports and return a Story component for each
//                 report. we fetch the matching story for the report
//                 within the Story component */}
//             {reports.map((report, idx) => {
//                 return (
//                     <Story key={idx} report={report} />
//                 )
//             })}

//         </div>
//     )
// }
