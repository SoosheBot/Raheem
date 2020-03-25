import React, { useState, useEffect } from "react";

//antd components
import { Progress, Tag } from 'antd';

//styles
import styled from 'styled-components';

//defining tag type
const { CheckableTag } = Tag;

//this component is used for displaying story tags 
const Tags = (props) => {

    //setting state
    // const [checked, setChecked] = useState(false);
    // const [positive, setPositive] = useState();
    // const [negative, setNegative] = useState();

    //setting checked tags to true
    // const handleChange = checked => {
    //     setChecked(true);
    // };

    return (
    <div>
        <p>
            {/* instructions to user to click on appropriate tags */}
        </p>

        <div>
            {/* tags display */}

            {/* <CheckableTag 
                {...props} 
                checked={ checked } 
                onChange={ handleChange } 
            /> */}

            {/* positive */}
            <div>
                {/* <MyTag>Helped</MyTag>
                <MyTag>Protected</MyTag> */}
            </div>

            {/* negative */}
            <div>
                {/* <MyTag>Physically Attacked</MyTag>
                <MyTag>Disrespected</MyTag>
                <MyTag>Wrongly Accused</MyTag>
                <MyTag>Harrassed</MyTag>
                <MyTag>Neglected</MyTag>
                <MyTag>Profiled</MyTag> */}
            </div>
        </div>

    </div>
    );
};

export default Tags;




// import { Tag } from 'antd';

// const { CheckableTag } = Tag;

// class MyTag extends React.Component {
//   state = { checked: true };

//   handleChange = checked => {
//     this.setState({ checked });
//   };

//   render() {
//     return (
//       <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
//     );
//   }
// }

// ReactDOM.render(
//   <div>
//     <MyTag>Tag1</MyTag>
//     <MyTag>Tag2</MyTag>
//     <MyTag>Tag3</MyTag>
//   </div>,
//   mountNode,
// );