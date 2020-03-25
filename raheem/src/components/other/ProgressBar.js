import React, { useState }from 'react';

/* antd components and icons */
import { Steps } from 'antd';

const { Step } = Steps;

function ProgressBar() {
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


