import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/* styles */

import {
    PageContainer,
    Container,
    YellowHeaderContainer,
    HeaderContainer,
    HeadingContainer,
    Content,
    Heading,
    Subheading,
    SmallHeading,
    Divider,
    Label,
    Controls,
    QRForm,
    QRCodeContainer
} from '../styles/global';


//buttons
import { ButtonPrimary, ButtonSecondary } from '../styles/global';

/* assets */
import QR from "../assets/QR.svg";

function QRcode() {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <PageContainer>
            <Container>
                <YellowHeaderContainer>
                    <Heading>Your story can end police violence.</Heading>
                </YellowHeaderContainer>
                <HeaderContainer>
                    <Subheading>Report and track police to build safer communities for people of color</Subheading>
                </HeaderContainer>
            </Container>
            <Divider />

            <Container>
                <Content>
                    <Label>Search for Officer: </Label>
                    <QRForm>
                        <input
                            type="text"
                            name="query"
                            placeholder="Officer Name or Badge Number"
                            autoComplete="off"
                        />
                    </QRForm>
                </Content>

                <HeadingContainer>
                    <h2> Or </h2>
                </HeadingContainer>

                <Content>
                    <Label> Scan QR Code:</Label>
                    <QRCodeContainer>
                        <img src={QR} alt="Example QR Code" />
                    </QRCodeContainer>

                    <Controls>
                        <ButtonSecondary onClick={() => history.push(`/report`)}>Add My Story</ButtonSecondary>
                    </Controls>
                </Content>

            </Container>
        </PageContainer>
    );
}

export default QRcode;
