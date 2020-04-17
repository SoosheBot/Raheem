import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../../assets/Logo.svg';

/* styles */
import { TopBar } from '../../styles/global';

function DesktopHeader() {

    return (
        <HeaderContainer>
            <div className="desktopheader">
                <div className="desktoplogo">
                    <Link to="/">
                        <img src={Logo} alt="Raheem Logo" />
                    </Link>
                </div>

                <nav className="navTags">
                    <Link to="/">Search</Link>
                    <Link to="/about">About</Link>
                    <Link to="/report">Reports</Link>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default DesktopHeader;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #111111;

    .desktopheader {
        width: 90%;
        height: 100%;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1%;
        padding-bottom: 1%;

        .desktoplogo {
            width: 15%;
            padding-left: 26px;
            padding-top: 33px;
            padding-bottom: 33px;
        }
    
        nav {
            height: 4.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 8%;

            /* border: 2px solid red; */
    
            a {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-decoration: none;
                color: #111111;
                font-family: 'Roboto', sans-serif;
                font-size: 2.6rem;
                font-weight: bold;
                margin: 7%;
                transition: all 300ms;
                align-self: center;

                /* border: 2px solid orange; */
    
                &:hover {
                    transition: background 300ms;
                    background: #F2F2F2;
                }
            }
        }
    }
`;

