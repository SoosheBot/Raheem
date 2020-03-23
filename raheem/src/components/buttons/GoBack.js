import React from 'react';

//css
import '../../index.css';

//ant design icon
import { CaretLeftOutlined } from '@ant-design/icons';

//button to go to previous page in application
function GoBack() {
    return (
        <button className="save">
        <CaretLeftOutlined /> Go Back
        </button>
    )
}

export default GoBack;
