import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../index.css';

import { SaveOutlined } from '@ant-design/icons';

function Save() {

    /* bring history in using the useHistory hook from react-router-dom */
    const history = useHistory();

    return (
        <button onClick={(e) => {
            e.preventDefault(); // prevent default refresh
            history.push(`/subscribe`); // push user to subscribe page to save submission
        }} className="save">
            <SaveOutlined /> Save For Later
        </button>
    )
}

export default Save;
