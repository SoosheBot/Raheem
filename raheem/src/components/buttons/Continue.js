import React from 'react';

//css
import '../../index.css';

//ant design icon
import {RightOutlined} from '@ant-design/icons';

//button to continue in the application
function Continue() {
    return(
        <button className="save">
            Continue <RightOutlined />
        </button>
    )
}

export default Continue;