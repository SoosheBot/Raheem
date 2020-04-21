import React, { useEffect, useState } from 'react';

/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { StoryContainer, StoryContent, StoryTagContainer, StoryTag } from '../../styles/dashboard';

export default function Story(props) {

    const { report } = props;
    const [story, setStory] = useState({});

    const fetchStory = () => {
        firebase
            .firestore()
            .collection("stories")
            .where('reportRef', '==', `/raheem-mercy/reports/${report.id}`)
            .get()
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    setStory(doc.data());
                })
            })
            .catch(err => {
                console.log('FAIL');
            })
    }

    const getAge = () => {
        const d = new Date();
        const year = d.getFullYear();
        const age = year - Number(report.dob.slice(6));

        return age;
    }

    useEffect(() => {
        fetchStory();
    }, []);

    return (
        <StoryContainer>
            <div className="story-header">
                <h3>Rating</h3>
                <h3>{report.reportDate}</h3>
            </div>

            <div className="story-demographics">
                <div>
                    <h4>Race</h4>
                    <p>{report.race}</p>
                </div>
                <div>
                    <h4>Gender</h4>
                    <p>{report.gender}</p>
                </div>
                <div>
                    <h4>Age</h4>
                    <p>{getAge()}</p>
                </div>
                <div>
                    <h4>Location</h4>
                    <p>{report.location}</p>
                </div>
            </div>

            <StoryTagContainer>
                {report.tags.map((tag, idx) => {
                    return <StoryTag key={idx}>{tag}</StoryTag>
                })}
            </StoryTagContainer>
            {story.storyBody !== undefined && <StoryContent>Story: {story.storyBody.story}</StoryContent>}
        </StoryContainer>
    )
}
