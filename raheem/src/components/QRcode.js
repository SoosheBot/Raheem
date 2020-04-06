import React from 'react';
import { useForm } from 'react-hook-form';

/* styles */
import { Container, Content, Heading, SubHeading, ContentSep, Label, QRForm, QRCodeContainer } from '../styles/global';

function QRcode() {

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

                <Label>Search officer by</Label>
                <QRForm>
                    <input
                        type="text"
                        name="query"
                        placeholder="location, name or badge number"
                        autoComplete="off"
                    />

                    <Label style={{ margin: '2rem 0' }}>or scan QR code</Label>
                    <QRCodeContainer />

                    <input type="submit" value="Add My Story" />
                </QRForm>
            </Content>
        </Container>
    )
}

export default QRcode;