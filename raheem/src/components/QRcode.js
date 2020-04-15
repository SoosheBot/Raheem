import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/* styles */
import { Container, Content, Heading, SubHeading, ContentSep, Label, Controls, QRForm, QRCodeContainer } from '../styles/global';

//buttons
import { ButtonPrimary, ButtonSecondary } from '../styles/global';

/* assets */
import QR from '../assets/QR.svg';

function QRcode() {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Container>
            <Content>
                <Heading>Your story can end police violence.</Heading>
                <SubHeading>Report and track police to build safer communities for people of color</SubHeading>

                <ContentSep />

                <Label>Search for Officer: </Label>
                <QRForm>
                    <input
                        type="text"
                        name="query"
                        placeholder="officer name or badge number"
                        autoComplete="off"
                    />

                    <Label style={{ margin: '2rem 0', background: '#FFF600', textAlign: 'center' }}>Or </Label>

                    <Label> Scan QR Code:</Label>
                    <QRCodeContainer>
                        <img src={QR} alt="Example QR Code" />
                    </QRCodeContainer>

                    <Controls>
                        <ButtonSecondary onClick={() => history.push(`/report`)}>Add My Story</ButtonSecondary>
                    </Controls>
                </QRForm>
            </Content>
        </Container>
    )
}

export default QRcode;