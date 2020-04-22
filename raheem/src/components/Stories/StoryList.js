import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* victory */
import { VictoryBar, VictoryChart, VictoryContainer } from 'victory';

/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { PageContainer } from '../../styles/global';
import { Title, StoryListContainer, TopContainer, SliderContainer, TagStatContainer, StoryListSearch } from '../../styles/dashboard/storyList';

/* assets */
import CarotDown from '../../assets/CarotDown.svg';
import Search from '../../assets/Search.svg';

/* components */
import Story from '../Dashboard/Story';
import Filter from './Filter';

export default function StoryList() {

    const [reports, setReports] = useState([]);
    const [filtering, setFiltering] = useState(false);
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

    // useEffect(() => {
    //     if (filtering === true) {
    //         document.body.classList.add('no-scroll');
    //     }
    //     else if (filtering === false) {
    //         document.body.classList.remove('no-scroll');
    //     }
    // }, [filtering, setFiltering])

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
            {filtering === true && <Filter filtering={filtering} setFiltering={setFiltering} queries={queries} setQueries={setQueries} />}
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
                        <div>
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
