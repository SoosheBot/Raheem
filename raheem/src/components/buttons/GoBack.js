import React from 'react';

//css
import '../../index.css';

//ant design icon
import {LeftOutlined} from '@ant-design/icons';

//button to go to previous page in application
function GoBack() {
    return (
        <button className="save">
        <LeftOutlined /> Go Back
        </button>
    )
}

export default GoBack;
