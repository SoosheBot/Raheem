import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

/* styles */
import {
  Container,
  Content,
  Heading,
  SubHeading,
  ContentSep,
  Label,
  Controls,
  QRForm,
  QRCodeContainer,
} from "../styles/global";

/* assets */
import QR from "../assets/QR.svg";

function QRcode() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <Heading>Your story can end police violence.</Heading>
        <SubHeading>
          Report and track police to build safer communities for people of color
        </SubHeading>

        <ContentSep />

        <Label>Search officer by</Label>
        <QRForm>
          <input
            type="text"
            name="query"
            placeholder="location, name or badge number"
            autoComplete="off"
          />

          <Label style={{ margin: "2rem 0" }}>or scan QR code</Label>
          <QRCodeContainer>
            <img src={QR} alt="Example QR Code" />
          </QRCodeContainer>

          <Controls>
            <ButtonSecondary onClick={() => history.push(`/report`)}>
              Add My Story
            </ButtonSecondary>
          </Controls>
        </QRForm>
      </Content>
    </Container>
  );
}

export default QRcode;

const ButtonSecondary = styled.button`
  width: 100%;
  height: 5.2rem;
  border: 1px solid #000000;
  border-radius: 0.6rem;
  background: #111111;
  margin: 0.5rem 0;
  color: #ffffff;
  font-family: "Noto Serif JP", serif;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0.25;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transition: opacity 300ms;
    opacity: 0.9;
  }
`;

const ButtonPrimary = styled.button`
  width: 100%;
  height: 5.2rem;
  border: 1px solid #111111;
  border-radius: 0.6rem;
  background: #ffffff;
  margin: 0.5rem 0;
  color: #111111;
  font-weight: bold;
  font-family: "Noto Serif JP", serif;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: 0.25;
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transition: opacity 300ms;
    opacity: 0.9;
  }
`;
