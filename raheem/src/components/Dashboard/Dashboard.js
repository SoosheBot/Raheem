import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Route } from 'react-router-dom';

/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { PageContainer } from '../../styles/global';
import { DashboardOfficer, DashboardView, DashboardTitle, DashboardMainTitle, DashboardTagSearch } from '../../styles/dashboard';

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
                    <h2>{`${officer.officerFName} ${officer.officerLName}`}</h2>
                </DashboardMainTitle>
                <div className="db-officer-info">
                    <div className="db-officer-img">
                        <img src={officer.img} alt="Officer" />
                    </div>

                    <div className="db-officer-info">
                        <div className="placeholder">
                            <h3>{officer.officerRank}</h3>
                        </div>
                        <div className="placeholder">
                            <h3>{officer.officerPoliceDepartment}</h3>
                        </div>
                        <div className="placeholder">
                            <h3>Salary: ${officer.officerSalary}</h3>
                        </div>
                        <div className="placeholder">
                            <h3>First Employed: {officer.firstEmployed}</h3>
                        </div>
                    </div>
                </div>
            </DashboardOfficer>

            <DashboardView>
                <div className="title-container">
                    <DashboardTitle>Stories</DashboardTitle>
                    <DashboardTitle>Stats</DashboardTitle>
                    <DashboardTitle>Map</DashboardTitle>
                </div>

                <Route exact path="/officers/:id/stories">
                    <Stories officerBadgeID={officer.officerBadgeID} />
                </Route>
            </DashboardView>
        </PageContainer>
    )
}
