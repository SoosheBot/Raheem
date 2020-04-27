import React, { useEffect, useState } from 'react';

import { useHistory, useParams, Route, NavLink } from 'react-router-dom';


/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { PageContainer, ButtonSecondary } from '../../styles/global';
import { DashboardOfficer, DashboardView, DashboardTitle, DashboardMainTitle, ReportButton } from '../../styles/dashboard';

/* components */
import Stories from './Stories';


export default function Dashboard() {

    const history = useHistory();
    const params = useParams();
    const [officer, setOfficer] = useState({});

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
                <ReportButton onClick={() => history.push(`/report`)}>Add a report</ReportButton>
            </DashboardOfficer>

            <DashboardView>
                <div className="title-container">

                    <DashboardTitle><NavLink to={`/officers/${officer.officerBadgeID}`} activeClassName="highlighted">Stories</NavLink></DashboardTitle>
                    <DashboardTitle><NavLink to={`/officers/${officer.officerBadgeID}/stats`}>Stats</NavLink></DashboardTitle>
                    <DashboardTitle><NavLink to={`/officers/${officer.officerBadgeID}/map`}>Map</NavLink></DashboardTitle>

                </div>

                <Route exact path="/officers/:id">
                    <Stories officer={officer} />
                </Route>

                <Route exact path="/officers/:id/stories">
                    <Stories officerBadgeID={officer.officerBadgeID} />
                </Route>
            </DashboardView>
        </PageContainer>
    )
}
