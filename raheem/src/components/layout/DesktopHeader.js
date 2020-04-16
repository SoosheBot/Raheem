import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../../assets/Logo.svg';

/* styles */
import { TopBar } from '../../styles/global';

function DesktopHeader() {

    return (
        <HeaderContainer>
            <TopBar />
            <div className="header">
                <div className="logo">
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

    .header {
        width: 90%;
        height: 100%;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1%;
        padding-bottom: 1%;

        .logo {
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
            padding-right: 1%;
    
            a {
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 4rem;
                width: 15rem;
                text-decoration: none;
                color: #111111;
                font-family: 'Roboto', sans-serif;
                font-size: 2.6rem;
                font-weight: bold;
                padding-left: 2rem;
                line-height: 1.8rem;
                transition: all 300ms;
                align-self: center;
    
                &:hover {
                    transition: background 300ms;
                    background: #F2F2F2;
                }
            }
        }
    }
`;

