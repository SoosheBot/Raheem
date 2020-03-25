import React from 'react';

/* components */
import Tags from './Tags';
import Continue from './buttons/Continue';
import GoBack from './buttons/GoBack';
import Save from './buttons/Save';
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

            <div className="progress">
                <Progress
                    strokeColor={{
                        '0%': '#FFF600',
                        '100%': '#111111',
                    }}
                    percent={20} />
                />
            </div>
        </div>
    )
}

export default StopDetails;