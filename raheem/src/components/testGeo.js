// import React, { useState, useContext, useEffect } from 'react';
import React, { useState, useContext } from 'react';
// import { useForm, Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

/*FireStore*/
import firebase from "../config/firebase";

/* styles */
import { PageContainer, Container, HeadingContainer, BackButton, Content, Divider, SmallDivider, HeaderContainer, SmallHeading, Controls } from '../styles/global';
import { TagContainer, Tag } from '../styles/tags';
import { ReportForm } from '../styles/global/forms.js';
import { SliderContainer, TxSlider, marks } from '../styles/slider';

//buttons
import { ButtonSecondary } from '../styles/global';

/* bring in our global form store */
import { formStore } from "../formStore.js";

/* material UI */
import Typography from "@material-ui/core/Typography";

/* components */
import Officer from "./Officer";

/* assets */
import Back from "../assets/Back.svg";
import { GeolocateControl } from 'mapbox-gl';

export default function TestGeo() {



    const [coords, setCoords] = useState({ lat: 0, lon: 0 })

    const handleClick = (e) => {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    const success = (pos) => {
        var crd = pos.coords;

        setCoords({ lat: crd.latitude, lon: crd.longitude });
    }

    const error = (err) => {
        console.error(`ERROR(${err.code}): ${err.message}`)
    }

    return (
        <PageContainer>
            <Container>
                <span>{`lat: ${coords.lat}`}</span>
                <span>{`lon: ${coords.lon}`}</span>
                <button onClick={handleClick}>Allow Location Services</button>
            </Container>
        </PageContainer>
    )

}