import React from 'react';

//buttons
import Continue from './buttons/Continue';
import Save from './buttons/Save';
import GoBack from './buttons/GoBack';

//components
import Tags from './Tags';

//antd components and icons
import { Progress } from 'antd';


function StopDetails() {
    return (
        <div>
            <div>
                <h2>How was your stop?</h2>

                <div>
                    <input type="checkbox" />
                    <p>Positive</p>

                    <input type="checkbox" />
                    <p>Negative</p>
                </div>
            </div>

            <div>
                {/* display tags component after selection has been made */}
                {/* set state for positive/negative display to pass to Tags component */}
                <Tags />
            </div>

            <div className="tagsButtonContainer">
                <div>
                    <p>Click here to proceed.</p>
                    <Continue />
                    {/* continue to story */}
                </div>
                <div>
                    <p>Click here to go back.</p>
                    <GoBack />
                    {/* go back to landing */}
                </div>
                <div>
                    <p>Click here to save your responses and come back later.</p>
                    <Save />
                    {/* go to email */}
                </div>
            </div>

        </div>
    )
}

export default StopDetails;