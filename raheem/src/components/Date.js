import React from 'react';

//style
import styled from 'styled-components';

//antd components and icons
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';


const Container = styled.div`

`

function onChange(date, dateString) {
    console.log(date, dateString);
}

const format = 'HH:mm';

function Date() {
    return(

        <Container>
            <DatePicker onChange={onChange} />
            <TimePicker defaultValue={moment('12:00', format)} format={format} />
        </Container>
    )
}

export default Date;