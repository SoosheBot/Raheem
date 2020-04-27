import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

//*FireStore*
import firebase from '../config/firebase';

// components
import Officer from './Officer';

// styles
import { PageContainer, Container, YellowHeaderContainer, HeaderContainer, Content, Controls, Divider, SmallDivider, Heading, Subheading } from '../styles/global';
import { Input } from '../styles/global/forms';
//buttons
import { ButtonPrimary, ButtonSecondary } from '../styles/global';

// Purpose of this component is to serve as a landing after a user scans a QR code and explain what Raheem is to new users
function Landing(props) {

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
                    if (doc.data().officerBadgeID === params.id) {
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
            <Container>
                <YellowHeaderContainer>
                    <Heading>
                        Your story can end police violence.
                    </Heading>
                </YellowHeaderContainer>

                <HeaderContainer>
                    <Subheading>
                        Raheem is an independent service for reporting police conduct to help build safer communities for people of color.
                    </Subheading>
                </HeaderContainer>
            </Container>

            <Divider />

            <Container>
                {params.id &&
                    <Officer
                        profile={{
                            officer: `${officer.officerRank} ${officer.officerLName}`,
                            department: officer.officerPoliceDepartment,
                            badge: officer.officerBadgeID,
                            img: officer.img
                        }}
                    />
                }

                {!params.id &&
                    <span>
                        <Content>
                            <p className="officererror">No officer information found. Please try re-scanning your QR code.</p>
                        </Content>

                        <SmallDivider />

                        <Content>
                            <p className="search-top">Alternatively, search for an officer by name, badge number, location, or department:</p>
                            <Input
                                type="text"
                                name="searchQuery"
                                placeholder="Officer Information"
                                autoComplete="off"
                            />

                            <p className="search-bottom">If you would like to fill out a report without adding officer information, please continue by clicking the 'Add a Report' button below.</p>
                        </Content>
                    </span>
                }

                <Controls>
                    <ButtonPrimary onClick={() => history.push(`/officers/${officer.officerBadgeID}`)} data-testid="viewReports">View Reports</ButtonPrimary>
                    <ButtonSecondary data-testid="addReport" onClick={() => {
                        if (params.id) {
                            history.push(`/report`, officer);
                        }
                        else {
                            history.push(`/report`, { officer: false });
                        }
                    }}>Add a Report</ButtonSecondary>
                </Controls>
            </Container>

        </PageContainer>
    )
}

export default Landing;