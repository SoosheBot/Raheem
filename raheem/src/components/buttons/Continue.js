import React from 'react';

//css
import '../../index.css';

//ant design components
import {RightOutlined} from 'antd';


function Continue() {
    return(
        <button className="save">
            Continue <RightOutlined />
        </button>
    )
}

export default Continue;