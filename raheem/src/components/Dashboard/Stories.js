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
import { StoryListContainer, TopContainer, SliderContainer, TagStatContainer, StoryListSearch } from '../../styles/dashboard/storyList';
import { DashboardPageContainer } from '../../styles/dashboard';

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
    const [queries, setQueries] = useState([]); // state for search queries
    const [officerRatingAvg, setOfficerRatingAvg] = useState(0); // current officer's average rating

    /* handle search input on submission */
    const onSubmit = (data, e) => {
        /* search for specific races */
        if (data.query.toLowerCase() === 'asian'
            || data.query.toLowerCase() === 'african american'
            || data.query.toLowerCase() === 'white'
            || data.query.toLowerCase() === 'south asian'
            || data.query.toLowerCase() === 'latinx'
            || data.query.toLowerCase() === 'pacific islander'
            || data.query.toLowerCase() === 'middle eastern'
            || data.query.toLowerCase() === 'multiracial'
            || data.query.toLowerCase() === 'native american'
        ) {
            firebase
                .firestore()
                .collection('reports')
                .where('officerId', '==', officer.officerBadgeID)
                .where('race', '==', data.query)
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
        /* search for specific genders */
        else if (data.query.toLowerCase() === 'male'
            || data.query.toLowerCase() === 'female'
            || data.query.toLowerCase() === 'non binary'
            || data.query.toLowerCase() === 'self identify'
        ) {
            firebase
                .firestore()
                .collection('reports')
                .where('officerId', '==', officer.officerBadgeID)
                .where('gender', '==', data.query)
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
        e.target.reset();
    }

    /* state for totaling up the tags coming back in the reports */
    const [tagTotals, setTagTotals] = useState([]);

    /* useEffect to grab all reports */
    useEffect(() => {
        if (officer.officerBadgeID !== undefined && officer.officerBadgeID !== '') {
            firebase
                .firestore()
                .collection('reports')
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
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
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
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
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
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
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
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* filter by age range */
        if (globalState.state.age !== undefined
            && globalState.state.age !== ''
            && globalState.state.race === ''
            && globalState.state.gender === ''
            && (globalState.state.tag.length === 0
                || globalState.state.tag === undefined)) {

            const year = getYear();
            let start;
            let end;

            if (globalState.state.age === '<18') {
                start = year - 18;
                end = year;
            }
            else if (globalState.state.age === '19-25') {
                start = year - 25;
                end = year - 19;
            }
            else if (globalState.state.age === '26-35') {
                start = year - 35;
                end = year - 26;
            }
            else if (globalState.state.age === '36-45') {
                start = year - 45;
                end = year - 36;
            }
            else if (globalState.state.age === '46-55') {
                start = year - 55;
                end = year - 46;
            }
            else if (globalState.state.age === '56-65') {
                start = year - 65;
                end = year - 56;
            }
            else if (globalState.state.age === '66-75') {
                start = year - 75;
                end = year - 66;
            }
            else if (globalState.state.age === '76+') {
                start = 1;
                end = year - 76;
            }

            firebase
                .firestore()
                .collection("reports")
                .orderBy('birthYear')
                .startAt(start)
                .endAt(end)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
                    })
                    setReports(data);
                })
                .catch(err => {
                    console.log('FAIL');
                })
        }

        /* filter by age range and other filters */
        if (globalState.state.age !== undefined
            && globalState.state.age !== ''
            && globalState.state.race !== '') {

            const year = getYear();
            let start;
            let end;

            if (globalState.state.age === '<18') {
                start = year - 18;
                end = year;
            }
            else if (globalState.state.age === '19-25') {
                start = year - 25;
                end = year - 19;
            }
            else if (globalState.state.age === '26-35') {
                start = year - 35;
                end = year - 26;
            }
            else if (globalState.state.age === '36-45') {
                start = year - 45;
                end = year - 36;
            }
            else if (globalState.state.age === '46-55') {
                start = year - 55;
                end = year - 46;
            }
            else if (globalState.state.age === '56-65') {
                start = year - 65;
                end = year - 56;
            }
            else if (globalState.state.age === '66-75') {
                start = year - 75;
                end = year - 66;
            }
            else if (globalState.state.age === '76+') {
                start = 1;
                end = year - 76;
            }

            firebase
                .firestore()
                .collection("reports")
                .orderBy('birthYear')
                .startAt(start)
                .endAt(end)
                .where('race', '==', `${globalState.state.race}`)
                .get()
                .then(function (querySnapshot) {
                    const data = [];
                    querySnapshot.forEach(function (doc) {
                        if (doc.data().officerId === officer.officerBadgeID) {
                            data.push({ id: doc.id, ...doc.data() });
                        }
                        else {
                            console.log('Not a match.');
                        }
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
            populate the tag statistics */
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

    /* get officer's average rating */
    const getAvgRating = () => {
        let avg = 0;
        reports.map((report) => {
            avg += report.rating;
        })

        avg /= reports.length;
        setOfficerRatingAvg(Math.round(avg));
        return;
    }

    /* get current year */
    const getYear = () => {
        const d = new Date();
        const year = d.getFullYear();
        return year;
    }

    /* on rendering of the component, get the tag totals and average rating of the officer */
    useEffect(() => {
        getTagTotals();
        getAvgRating();
    }, [reports]);

    return (
        <DashboardPageContainer>
            {/* If the user has toggled the filter or sort components, update state
                and display the components for filtering and sorting reports and stories */}
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} reports={reports} setReports={setReports} />}
            {sorting === true && <Sort sorting={sorting} setSorting={setSorting} queries={queries} setQueries={setQueries} />}
            <StoryListContainer>
                <TopContainer>
                    {reports.length && reports !== undefined ? (<p>{reports.length} reports</p>) : (<p>0 reports</p>)}
                </TopContainer>

                <SliderContainer />

                {/* handling and displaying of tags */}
                <TagStatContainer>
                    <div className="officer-rating">
                        <h4>Officer rating average</h4>
                        <div className="circle">
                            <p className="rating">{officerRatingAvg}</p>
                        </div>
                    </div>
                    <div className="officer-stats">
                        <h4>{officer.officerRank} {officer.officerLName}</h4>
                        {tagTotals.length &&
                            <div className="stats-grid">
                                {tagTotals.map((tag, idx) => {
                                    if (tag.total === 1) {
                                        return <p key={idx}>{tag.tag} <span className="bold">{tag.total}</span> person.</p>
                                    }
                                    else if (tag.total !== 0) {
                                        return <p key={idx}>{tag.tag} <span className="bold">{tag.total}</span> people.</p>
                                    }
                                })}
                            </div>
                        }
                    </div>
                </TagStatContainer>

                <p className="see-more"><Link to="/dashboard/stats">See More</Link></p>

                {/* Text search input, filter, and sort options */}
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
                            setFiltering(true); // set filtering mode
                        }}>
                            <p>Filter <img src={CarotDown} alt="Drop Down" /></p>
                        </div>
                        <div onClick={() => {
                            window.scroll(0, 0);
                            setSorting(true); // set sorting mode
                        }}>
                            {/* If we are sorting, display what we are sorting by */}
                            {globalState.state.sort !== undefined && globalState.state.sort !== '' && <p>Sort: <span>{globalState.state.sort}</span> <img src={CarotDown} alt="Drop Down" /></p>}
                            {globalState.state.sort === undefined && <p>Sort: <span>Newest</span> <img src={CarotDown} alt="Drop Down" /></p>}
                        </div>
                    </div>
                </StoryListSearch>

                <div className="list">
                    {/* Conditionally render how many reports there are */}
                    {
                        reports !== undefined && reports.length ? (reports.map((report, index) => <Story key={index} report={report} />)) : (<p className="no-reports">Stories are loading or are unavailable. Please try refreshing the page.</p>)
                    }
                </div>
            </StoryListContainer>
        </DashboardPageContainer>
    )
}
