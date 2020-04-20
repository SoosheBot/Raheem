import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* firebase */
import firebase from '../../config/firebase';

/* components */
import Story from './Story';

export default function Stories(props) {

    const { officerBadgeID } = props;
    const params = useParams();
    const [reports, setReports] = useState([]);
    const [stories, setStories] = useState([]);
    const [combined, setCombined] = useState([]);

    /* useEffect to grab all reports made on the specific officer */
    useEffect(() => {
        firebase
            .firestore()
            .collection("reports")
            .where('officerId', '==', Number(params.id))
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
    }, [officerBadgeID]);

    /* useEffect to grab all stories written about a specific officer */
    useEffect(() => {
        firebase
            .firestore()
            .collection("stories")
            .where('officerId', '==', Number(params.id))
            .get()
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    data.push(doc.data());
                })
                setStories(data);
            })
            .catch(err => {
                console.log('FAIL');
            })
    }, [officerBadgeID]);

    return (
        <div>
            {/* {console.log('REPORTS ', reports)} */}
            {reports.map((report, idx) => {
                return (
                    <Story key={idx} report={report} />
                )
            })}

        </div>
    )
}
