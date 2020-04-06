import React from 'react';

/* styles */
import { Container, Content } from '../styles/global';

/* components */
import Tags from './Tags';
import Demographics from './Demographics';

export default function Report() {
    return (
        <Container>
            <Content>
                <Tags />

                <Demographics />
                <span>You'll have the opportunity to say more</span>
            </Content>
        </Container>
    )
}
