import React, { useEffect, useState } from 'react';

/* firebase */
import firebase from '../../config/firebase';

/* styles */
import { StoryContainer, StoryContent, LongStoryContent, StoryTagContainer, StoryTag } from '../../styles/dashboard';

export default function Story(props) {

    /* bring in our report as props and create a slice of state for our story
        as well as a toggleable state for our story to prevent long
        stories from taking up too much of the view */
    const { report } = props;
    const [story, setStory] = useState({});
    const [storyToggle, setStoryToggle] = useState(false);

    /* get the age of the user who submitted the report */
    const getAge = () => {
        const d = new Date();
        const year = d.getFullYear();
        const age = year - Number(report.dob.slice(6));

        return age;
    }

    /* when our component mounts, fetch our story that matches the report
        passed in as props */
    useEffect(() => {
        firebase
            .firestore()
            .collection("stories")
            .where('reportRef', '==', `/raheem-mercy/reports/${report.id}`)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    setStory(doc.data());
                })
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, [report]);

    return (
        <StoryContainer>
            <div className="story-header">
                <h3>Rating {report.rating}</h3>
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
            {story.storyBody !== undefined && story.storyBody.story.length < 500 && <StoryContent>Story: {story.storyBody.story}</StoryContent>}
            {story.storyBody !== undefined && story.storyBody.story.length > 500 && storyToggle === false &&
                <LongStoryContent>
                    <p>{story.storyBody.story.substring(0, 200)}</p>
                    <span onClick={() => setStoryToggle(!storyToggle)}>See more</span>
                </LongStoryContent>}
            {story.storyBody !== undefined && story.storyBody.story.length > 500 && storyToggle === true &&
                <LongStoryContent>
                    <p>{story.storyBody.story}</p>
                    <span onClick={() => setStoryToggle(!storyToggle)}>See less</span>
                </LongStoryContent>}
        </StoryContainer>
    )
}
