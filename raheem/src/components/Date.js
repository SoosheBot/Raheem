import React from 'react';

import styled from 'styled-components';

import { DatePicker } from 'antd';

const Container = styled.div`

`

function onChange(date, dateString) {
    console.log(date, dateString);
}

function Date() {
    return(
        <Container>
            <DatePicker onChange={onChange} />
        </Container>
    )
}

export default Date;