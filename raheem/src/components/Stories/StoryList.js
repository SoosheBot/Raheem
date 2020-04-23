import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* victory */
import { VictoryBar, VictoryChart, VictoryContainer } from 'victory';

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
    const { dispatch } = globalState;

    /* configure react-hook-form for searching */
    const { register, handleSubmit, errors } = useForm();

    const [reports, setReports] = useState([]);
    const [filtering, setFiltering] = useState(false);
    const [sorting, setSorting] = useState(false);
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
    }, [globalState]);

    /* get the total amount of total tags in the reports */
    const getTagTotals = () => {
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

        const updatedState = {
            helped: helpedTag,
            protected: protectedTag,
            illegally_searched: illegallySearchedTag,
            profiled: profiledTag,
            physically_attacked: physicallyAttackedTag,
            harassed: harassedTag,
            wrongly_accused: wronglyAccusedTag,
            disrespected: disrespectedTag,
            neglected: neglectedTag
        }

        setTagTotals(updatedState);
    }

    useEffect(() => {
        getTagTotals();
    }, [reports]);

    return (
        <PageContainer>
            {console.log(`GLOBAL STATE FROM STORYLIST `, globalState)}
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} reports={reports} setReports={setReports} />}
            {sorting === true && <Sort sorting={sorting} setSorting={setSorting} queries={queries} setQueries={setQueries} />}
            {console.log(`TAG TOTALS `, tagTotals)}
            {console.log(`CURRENT REPORTS IN STATE `, reports)}
            <StoryListContainer>
                <div className="title-container">
                    <Title className="active"><Link to="/dashboard/stories">Stories</Link></Title>
                    <Title><Link to="/dashboard/stats">Stats</Link></Title>
                    <Title><Link to="/dashboard/map">Map</Link></Title>
                </div>

                <TopContainer>
                    {reports.length && reports !== undefined ? (<p>{reports.length} reports</p>) : (<p>0 reports</p>)}
                    <p><Link to="/report">Write a Story</Link></p>
                </TopContainer>

                <SliderContainer />

                <TagStatContainer>
                    {/* <VictoryChart style={{ parent: { maxWidth: '50%' } }}>
                        <VictoryBar data={tagData} horizontal="true" y="total" x="tag" />
                    </VictoryChart> */}
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
                            <p>Sort: <span>Newest</span> <img src={CarotDown} alt="Drop Down" /></p>
                        </div>
                    </div>
                </StoryListSearch>

                <div className="list">
                    {
                        reports !== undefined && reports.length ? (reports.map((report, index) => <Story key={index} report={report} />)) : (<p className="no-reports">There are no reports. Please try searching again.</p>)
                    }
                </div>
            </StoryListContainer>
        </PageContainer >
    )
}
