import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

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

    const [reports, setReports] = useState([]);
    const [filtering, setFiltering] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [queries, setQueries] = useState([]);

    // const [tagTotals, setTagTotals] = useState({
    //     helped: 0,
    //     protected: 0,
    //     illegally_searched: 0,
    //     profiled: 0,
    //     physically_attacked: 0,
    //     harassed: 0,
    //     wrongly_accused: 0,
    //     disrespected: 0,
    //     neglected: 0
    // })

    /* mock data for tags */
    const tagData = [
        { tag: 'helped', total: 3 },
        { tag: 'protected', total: 5 },
        { tag: 'illegally_searched', total: 10 },
        { tag: 'profiled', total: 7 },
        { tag: 'physically_attacked', total: 9 },
        { tag: 'harassed', total: 3 },
        { tag: 'wrongly_accused', total: 6 },
        { tag: 'disrespected', total: 8 },
        { tag: 'neglected', total: 2 }
    ]

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
    }, [globalState]);

    // const getTagTotals = (tagName) => {
    //     const count = reports.reduce((total, report) => {
    //         report.tags.map((tag) => {
    //             if (tag === tagName) {
    //                 return total = total + 1;
    //             }
    //             else {
    //                 return null;
    //             }
    //         })

    //         return total;
    //     }, 0)

    //     setTagTotals({
    //         ...tagTotals,
    //         [tagName]: count
    //     })

    //     return count;
    // }

    // useEffect(() => {
    //     /* iterate through our reports and total up the tags */
    //     if (reports !== undefined && reports.length) {
    //         getTagTotals('helped');
    //         getTagTotals('protected');
    //         getTagTotals('illegally searched');
    //         getTagTotals('profiled');
    //         getTagTotals('physically attacked');
    //         getTagTotals('harassed');
    //         getTagTotals('wrongly accused');
    //         getTagTotals('disrespected');
    //         getTagTotals('neglected');
    //     }
    // }, [reports, setTagTotals]);

    return (
        <PageContainer>
            {console.log(`GLOBAL STATE FROM STORYLIST `, globalState)}
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} reports={reports} setReports={setReports} />}
            {sorting === true && <Sort sorting={sorting} setSorting={setSorting} queries={queries} setQueries={setQueries} />}
            {/* {console.log(`REPORTS COMING BACK `, reports)}
            {console.log(`TAG TOTALS `, tagTotals)} */}
            <StoryListContainer>
                <div className="title-container">
                    <Title className="active">Stories</Title>
                    <Title>Stats</Title>
                    <Title>Map</Title>
                </div>

                <TopContainer>
                    {reports.length && reports !== undefined && <p>{reports.length} reports</p>}
                    <p><Link to="/report">Write a Story</Link></p>
                </TopContainer>

                <SliderContainer />

                <TagStatContainer>
                    {/* <VictoryChart style={{ parent: { maxWidth: '50%' } }}>
                        <VictoryBar data={tagData} horizontal="true" y="total" x="tag" />
                    </VictoryChart> */}
                </TagStatContainer>

                <p className="see-more"><Link to="#">See More</Link></p>

                <StoryListSearch>
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
                    {reports !== undefined && reports.length && reports.map((report, index) => {
                        return (
                            <Story key={index} report={report} />
                        )
                    })}
                </div>
            </StoryListContainer>
        </PageContainer >
    )
}
