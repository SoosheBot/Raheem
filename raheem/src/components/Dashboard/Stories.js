import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* firebase */
import firebase from '../../config/firebase';

/* components */
import Story from './Story';

export default function Stories(props) {

    /* descructure the officer's badge id from props */
    const { officerBadgeID } = props;

    /* grab our id from params to ensure we're still referring to the
        same officer as before */
    const params = useParams();

    /* state for reports after hitting Firebase */
    const [reports, setReports] = useState([]);

    /* grab all reports made on the specific officer
        from Firebase when our component mounts */
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
    }, [officerBadgeID, params.id]);

    return (
        <div>
            {/* map over reports and return a Story component for each
                report. we fetch the matching story for the report
                within the Story component */}
            {reports.map((report, idx) => {
                return (
                    <Story key={idx} report={report} />
                )
            })}

        </div>
    )
}
