import React from "react";

//antd components
import { Progress } from 'antd';

//buttons
import Continue from './buttons/Continue.js';
import GoBack from './buttons/GoBack.js';
import Save from './buttons/Save.js';


const Tags = () => {

    return (
    <div>
        <p>
            {/* instructions to user to click on appropriate tags */}
        </p>

        <div>
            {/* tags display */}
        </div>

        <div className="tagsButtonContainer">
            <div>
                <p>Click here to proceed.</p>
                <Continue />
            </div>
            <div>
                <p>Click here to go back.</p>
                <GoBack />
            </div>
            <div>
                <p>Click here to save your responses and come back later.</p>
                <Save />
            </div>
        </div>

        <div>
            <Progress
                strokeColor={{
                    '0%': '#FFF600',
                    '100%': '#111111',
                }}
                percent={20}  />
                />
        </div>
    </div>
    );
};

export default Tags;