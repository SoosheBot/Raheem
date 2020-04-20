import React from 'react';

/* styles */
import { PageContainer, Container, Content, BackButton, SmallHeading, Heading, Subheading, HeadingContainer, HeaderContainer } from '../styles/global';
import { DashboardOfficer, DashboardView, DashboardTitle, DashboardSearch, DashboardMainTitle, DashboardTagSearch } from '../styles/dashboard';

export default function Dashboard() {
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

                <DashboardSearch>
                    <input
                        type="text"
                        name="query"
                        autoComplete="off"
                    />
                </DashboardSearch>

                <DashboardTagSearch>
                    <input
                        type="text"
                        name="tagQuery"
                        autoComplete="off"
                    />
                </DashboardTagSearch>
            </DashboardView>
        </PageContainer>
    )
}
