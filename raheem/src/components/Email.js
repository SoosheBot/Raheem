// import React, { useState } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
// import styled from 'styled-components';

// /*FireStore*/
// import firebase from "../firebase"

// //form validation
// import { useForm } from "react-hook-form";

// /* styles */
// import { PageContainer, Container, Content, Controls, Divider, EmailParagraph, EmailLabel, EmailForm, HeaderContainer } from '../styles/global';

// //buttons
// import { ButtonPrimary, ButtonSecondary } from '../styles/global';

// /* assets */
// import Back from '../assets/Back.svg';

// /* components */
// import Officer from './Officer';

// //component for user to submit their email address to save the form for later
// const Email = () => {

//     /* bring in useHistory hook from react-router-dom */
//     const history = useHistory();
//     const location = useLocation();

//     /* state for officer from Story component */
//     const [officer, setOfficer] = useState(location.state);

//     /* configure react-hook-form */
//     const { handleSubmit, register, errors } = useForm();
    
//     const onSubmit = values => {

//         console.log("values from email on-submit", values);
//         localStorage.setItem('completed', false);
//         firebase
//             .firestore()
//             .collection('emails')
//             .add({
//                 emails: values.email
//             })
//         history.push(`/thank-you`, officer);
//     };

//     return (
//         <PageContainer>
//         <Container>
//             <Content>
//                 {location.state === undefined &&
//                     <div>
//                         <p className="no-officer">No officer information was loaded. Please rescan your QR code or continue submitting
//                             your report with no officer information attached.</p>
//                     </div>
//                 }

//                 {officer && officer.officer !== false &&
//                     <Officer profile={{
//                         officer: `${officer.officerRank} ${officer.officerLName}`,
//                         precinct: officer.PoliceDepartment,
//                         badge: officer.officerBadgeID,
//                         img: officer.img
//                     }} />
//                 }
//             </Content>

//             <Divider />

//             <HeaderContainer>
//                 <h2>Let us remind you</h2>
//             </HeaderContainer>

//             <EmailParagraph>
//                 Type in your email and we can email you a reminder, so you can complete your
//                 in-depth review later
//             </EmailParagraph>

//             <Content>
//                 <EmailForm onSubmit={handleSubmit(onSubmit)}>
//                     <EmailLabel>Email</EmailLabel>
//                     <input
//                         name="email"
//                         data-testid="emailInput"
//                         type="text"
//                         placeholder="email@emailaddress.com"
//                         ref={register({
//                             required: 'Required',
//                             pattern: {
//                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                                 message: "invalid e-mail address"
//                             }
//                         })}
//                     />
//                     {errors.email && errors.email.message}

//                     {/* on submit will need to direct to thank you page with confirmation to check email for next steps */}

//                     <Controls>
//                         <ButtonPrimary onClick={() => history.goBack()} data-testid="goBackLargeButton">Go Back</ButtonPrimary>
//                         <ButtonSecondary data-testid="submitButton" type="submit">Submit</ButtonSecondary>
//                     </Controls>
//                 </EmailForm>
//             </Content>
//         </Container>
//         </PageContainer>
//     );
// };

// export default Email;