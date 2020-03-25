// import React, { useState, useEffect } from "react";

// //antd components
// import { Progress, Tag } from 'antd';

// //styles
// import styled from 'styled-components';

// //buttons
// import Continue from './buttons/Continue.js';
// import GoBack from './buttons/GoBack.js';
// import Save from './buttons/Save.js';

// //this component is used for displaying story tags 
// const Tags = (props) => {

//     //setting state  
//     const { CheckableTag } = Tag;
//     const [ checked, setChecked] = useState(false)
//     const [ positive, setPositive] = useState()
//     const [ negative, setNegative] = useState

//     //setting checked tags to true
//     const handleChange = checked => {
//         setChecked(true);
//     };

//     return (
//     <div>
//         <p>
//             {/* instructions to user to click on appropriate tags */}
//         </p>

//         <div>
//             {/* tags display */}

//             <CheckableTag 
//                 {...props} 
//                 checked={ checked } 
//                 onChange={ handleChange } 
//             />

//             {/* positive */}
//             <div>
//                 {/* <MyTag>Helped</MyTag>
//                 <MyTag>Protected</MyTag> */}
//             </div>

//             {/* negative */}
//             <div>
//                 {/* <MyTag>Physically Attacked</MyTag>
//                 <MyTag>Disrespected</MyTag>
//                 <MyTag>Wrongly Accused</MyTag>
//                 <MyTag>Harrassed</MyTag>
//                 <MyTag>Neglected</MyTag>
//                 <MyTag>Profiled</MyTag> */}
//             </div>
//         </div>




//         <div>
//             <Progress
//                 strokeColor={{
//                     '0%': '#FFF600',
//                     '100%': '#111111',
//                 }}
//                 percent={20}  />
//                 />
//         </div>
//     </div>
//     );
// };

// export default Tags;