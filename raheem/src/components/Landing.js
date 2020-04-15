import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import firebase from "../firebase";

// components
import Officer from './Officer';

// styles
import styled from 'styled-components';
import { Container, Content, Controls, Divider } from '../styles/global';

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
                    if (doc.data().officerBadgeID == params.id) {
                        setOfficer(doc.data());
                    }
                    else {
                        console.log(`NO MATCH`);
                    }
                })
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, []);

    return (
        <AboutContainer className="container">

            {console.log(officer)}

            <AboutStoryContainer>
                <AboutHeading>
                    Your story can end police violence.
                </AboutHeading>
            </AboutStoryContainer>

            <AboutTextContainer>
                <AboutSubHeading>
                    Raheem is an independent service for reporting police conduct to help build safer communities for people of color.
                </AboutSubHeading>
            </AboutTextContainer>

            <Divider />

            <AboutTextContainer>
                {params.id &&
                    <Officer
                        profile={{
                            officer: `${officer.officerRank} ${officer.officerLName}`,
                            precinct: officer.officerPoliceDepartment,
                            badge: officer.officerBadgeID,
                            img: officer.img
                        }}
                    />
                }

                {!params.id &&
                    <div>
                        <p className="error">No officer information found. Please try re-scanning your QR code.</p>
                        <p className="search">Alternatively, search for an officer by name, badge number, location, or department:</p>
                        <input
                            type="text"
                            name="searchQuery"
                            placeholder="Officer Information"
                            autoComplete="off"
                        />
                        <p className="search">If you would like to fill out the survey without adding officer information, please continue.</p>
                    </div>
                }

                <Controls>
                    <ButtonPrimary data-testid="viewReports">View Reports</ButtonPrimary>
                    <ButtonSecondary data-testid="addReport" onClick={() => {
                        if (params.id) {
                            history.push(`/report`, officer);
                        }
                        else {
                            history.push(`/report`, { officer: false });
                        }
                    }}>Add a Report</ButtonSecondary>
                </Controls>
            </AboutTextContainer>
        </AboutContainer>
    )
}

export default Landing;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', serif;
    margin: 5rem 0;
`

const AboutStoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFF600;
`

const AboutTextContainer = styled.div`
    background: #ffffff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    p.error {
        color: #db4242;
        font-size: 1.6rem;
        font-weight: 900;
        margin: 5rem 0 0;
    }

    p.search {
        font-size: 1.6rem;
        margin: 2rem 0 1rem;
    }

    input[type=text] {
        height: 5rem;
        width: 100%;
        font-weight: bold;
        font-size: 1.6rem;
        padding-left: 1rem;
        color: #111111;
        border-radius: 6px;
        border: 1px #111111 solid;

        &:focus {
            outline: none;
            border: 1px solid #FFF600;
        }
    }
`

const AboutHeading = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 4.4rem;
    line-height: 4.2rem;
    padding: 0 20px;
    margin: 2% 0 2%;
`

const AboutSubHeading = styled.h3`
    font-weight: 900;
    font-size: 2.6rem;
    margin: 2.2rem 0;
    line-height: 2.6rem;
`
