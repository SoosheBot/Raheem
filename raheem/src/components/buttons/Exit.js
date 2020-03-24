import React from 'react';

//css
import '../../index.css';

//ant design icon
import {LogoutOutlined} from '@ant-design/icons';

//button to exit the application
function Exit() {
    return(
        <button className="save">
            Exit <LogoutOutlined />
        </button>
    )
}

export default Exit;