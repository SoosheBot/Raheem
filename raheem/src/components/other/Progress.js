import React, { useState }from 'react';

/* antd components and icons */
import { Steps } from 'antd';

const { Step } = Steps;

function Progress() {
    const [current, setCurrent] = useState(0)

    onChange {
    console.log('onChange:', current);
    setCurrent(current);
    };

    const { current } = this.state;

    return (
        <div>
        <Steps current={current} onChange={{onChange}}>
            <Step title="Step 1" description="About" />
            <Step title="Step 2" description="Stop Information" />
            <Step title="Step 4" description="Stop Details" />
            <Step title="Step 5" description="Date" />
            <Step title="Step 6" description="User Information" />
            <Step title="Step 7" description="Subscription" />
        </Steps>
        </div>
        );

}

export default Progress