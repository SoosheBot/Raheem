import React, { useState }from 'react';

import styled from 'styled-components';

/* antd components and icons */
import { Steps } from 'antd';

const { Step } = Steps;

function ProgressBar() {
    const [current, setCurrent] = useState(0)

    // onChange {
    // console.log('onChange:', current);
    // setCurrent(current);
    // };

    // const { current } = this.state;

    return (
        <div>
        <Steps 
            progressDot 
            current={3}
            size='small'
            
        >
            <Step description="About"/>
            <Step description="Stop Information" />
            <Step description="Stop Details" />
            <Step description="Date" />
            <Step description="User Information" />
            <Step description="Subscription" />
        </Steps>
        </div>
        );

}

export default ProgressBar



// import { Steps, Divider } from 'antd';

// const { Step } = Steps;

// ReactDOM.render(
//   <div>
//     <Steps progressDot current={1}>
//       <Step title="Finished" description="This is a description." />
//       <Step title="In Progress" description="This is a description." />
//       <Step title="Waiting" description="This is a description." />
//     </Steps>
//     <Divider />
//     <Steps progressDot current={1} direction="vertical">
//       <Step title="Finished" description="This is a description. This is a description." />
//       <Step title="Finished" description="This is a description. This is a description." />
//       <Step title="In Progress" description="This is a description. This is a description." />
//       <Step title="Waiting" description="This is a description." />
//       <Step title="Waiting" description="This is a description." />
//     </Steps>
//   </div>,
//   mountNode,
// );
