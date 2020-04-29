import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Route, NavLink } from 'react-router-dom';

/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { PageContainer } from '../../styles/global';
import { DashboardOfficer, DashboardView, DashboardTitle, DashboardMainTitle, ReportButton } from '../../styles/dashboard';

/* components */
import Stories from './Stories';


export default function Dashboard() {

    /* bring in history and params from react-router-dom */
    const history = useHistory();
    const params = useParams();

    /* state for our officer */
    const [officer, setOfficer] = useState({});

    /* on rendering of the component, grab any officer that matches
        the passed in officer id getting pulled off useParams. rerun this
        useEffect hook anytime the params.id (officer id) changes */
    useEffect(() => {
        firebase
            .firestore()
            .collection("officers")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (doc.data().officerBadgeID == params.id) {
                        console.log(`RESPONSE `, doc.data());
                        setOfficer(doc.data());
                    }
                })
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, [params.id]);

    return (
        <PageContainer>
            {/* Display the officer's information based on what officer was returned */}
            <DashboardOfficer>
                <DashboardMainTitle>
                    <h2>{`${officer.officerRank} ${officer.officerLName}`}</h2>
                </DashboardMainTitle>
                <div className="db-officer-info">
                    <div className="db-officer-img">
                        {officer.img !== undefined && officer.img !== '' && <img src={officer.img} alt="Officer" />}
                        {officer.img === '' && <img src="https://i.imgur.com/JaXjOlX.png" alt="OPD" />}
                    </div>

                    <div className="db-officer-info">
                        <div className="placeholder">
                            <h3><span className="bold">Race: </span> {officer.officerRace}</h3>
                        </div>
                        <div className="placeholder">
                            <h3><span className="bold">Gender: </span>{officer.officerGender}</h3>
                        </div>
                        <div className="placeholder">
                            <h3><span className="bold">Salary: </span> ${officer.officerSalary}</h3>
                        </div>
                        <div className="placeholder">
                            <h3><span className="bold">First Employed: </span> {officer.firstEmployed}</h3>
                        </div>
                    </div>
                </div>
                <ReportButton onClick={() => history.push(`/report/${officer.officerBadgeID}`)}>Add A Report</ReportButton>
            </DashboardOfficer>

            <DashboardView>
                <div className="title-container">
                    <DashboardTitle><NavLink exact to={`/officers/${officer.officerBadgeID}`} activeClassName="highlighted">Stories</NavLink></DashboardTitle>
                    <DashboardTitle><NavLink to={`/officers/${officer.officerBadgeID}/stats`} activeClassName="highlighted">Stats</NavLink></DashboardTitle>
                    <DashboardTitle><NavLink to={`/officers/${officer.officerBadgeID}/map`} activeClassName="highlighted">Map</NavLink></DashboardTitle>
                </div>

                {/* Sub routes on the dashboard to the officer's stories */}
                <Route exact path="/officers/:id">
                    <Stories officer={officer} />
                </Route>

                <Route exact path="/officers/:id/stories">
                    <Stories officer={officer} />
                </Route>
            </DashboardView>
        </PageContainer>
    )
}
