import React from 'react';
import { useHistory } from 'react-router-dom';

//css
import '../../index.css';

//button to go to previous page in application
function GoBack() {

    /* bring history in using the useHistory hook from react-router-dom */
    const history = useHistory();

    return (
        <button onClick={(e) => {
            e.preventDefault(); // prevent default refresh
            history.goBack(); // take the user back a step in their history
        }} className="save">
            Go Back
        </button>
    )
}

export default GoBack;
