import React from 'react';

//css
import '../../index.css';

//ant design icon

import { CaretRightOutlined } from '@ant-design/icons';

//button to continue in the application
function Continue() {
    return(
        <button className="save">
            Continue <CaretRightOutlined />
        </button>
    )
}

export default Continue;