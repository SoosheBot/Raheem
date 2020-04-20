import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

/* firebase */
import firebase from '../config/firebase';

/* styles */
import { PageContainer, Container, Content, BackButton, SmallHeading, Heading, Subheading, HeadingContainer, HeaderContainer } from '../../styles/global';
import { DashboardOfficer, DashboardView, DashboardTitle, DashboardSearch, DashboardMainTitle, DashboardTagSearch } from '../../styles/dashboard';

export default function Dashboard() {

    const history = useHistory();
    const params = useParams();

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
                    <h2>Officer Name</h2>
                </DashboardMainTitle>
                <div className="db-officer-info">
                    <div className="db-officer-img">
                        <div className="img"></div>
                    </div>

                    <div className="db-officer-info">
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                        <div className="placeholder"></div>
                    </div>
                </div>
            </DashboardOfficer>

            <DashboardView>
                <div className="title-container">
                    <DashboardTitle>Stories</DashboardTitle>
                    <DashboardTitle>Stats</DashboardTitle>
                    <DashboardTitle>Map</DashboardTitle>
                </div>
            </DashboardView>
        </PageContainer>
    )
}
