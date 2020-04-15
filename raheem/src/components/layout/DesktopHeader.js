import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../../assets/Logo.svg';

/* styles */
import { TopBar } from '../../styles/global';

function DesktopHeader() {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <HeaderContainer>
            <TopBar />
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Raheem Logo" />
                    </Link>
                </div>

                <nav>                    
                    <div className="navTags">
                        <Link to="/">Search</Link>
                        <Link to="/about">About</Link>
                        <Link to="/report">Reports</Link>
                    </div>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default DesktopHeader;

const HeaderContainer = styled.div`
    width: 100%;

    .header {
        width: 90%;
        height: 100%;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #111111;
        padding-top: 1%;
        padding-bottom: 1%;
        /* border: 2px solid red; */

        .logo {
            width: 15%;
            padding-left: 26px;
            padding-top: 33px;
            padding-bottom: 33px;
        }
    
        nav {
            width: 20%;
            height: 4.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-right: 5%;
            /* border: 1px solid blue; */

            div.navTags {
                position: absolute;
                right: 0;
                display: flex;
                /* border: 2px solid red; */
    
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
                    /* border: 1px solid black; */
    
                    &:hover {
                        transition: background 300ms;
                        background: #F2F2F2;
                    }
                }
            }
        }
    }
`;