import React from 'react';
import '../../index.css';
import { SaveOutlined } from '@ant-design/icons';

function Save() {
    return (
        <button className="save">
            <SaveOutlined /> Save For Later 
        </button>
    )
}

export default Save;
