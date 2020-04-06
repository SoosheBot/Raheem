import React from 'react';
import { useHistory } from 'react-router-dom';

//css
import '../../index.css';

//ant design icon
import { CaretLeftOutlined } from '@ant-design/icons';


//button to go to previous page in application
function GoBack() {

    /* bring history in using the useHistory hook from react-router-dom */
    const history = useHistory();

    return (
        <button onClick={(e) => {
            e.preventDefault(); // prevent default refresh
            history.goBack(); // take the user back a step in their history
        }} className="save">
            <CaretLeftOutlined /> Go Back
        </button>
    )
}

export default GoBack;
