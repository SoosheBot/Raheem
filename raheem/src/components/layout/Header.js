import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../../assets/Logo.svg';
import { MenuOutlined } from '@ant-design/icons';

function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <HeaderContainer>
            <div className="logo">
                <Link to="/"><img src={Logo} alt="Raheem Logo" /></Link>
            </div>

            <nav>
                <MenuOutlined onMouseEnter={() => setToggle(!toggle)} style={{ fontSize: '24px' }} />
                {toggle === true && <div onMouseLeave={() => setToggle(!toggle)} className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/QR">QR</Link>
                    <Link to="/about">About</Link>
                    <Link to="/details">Stop Details</Link>
                    <Link to="/story">Story</Link>
                    <Link to="/demographics">Demographics</Link>
                    <Link to="/subscribe">Subscribe</Link>
                    <Link to="/thank-you">Thank You</Link>
                </div>}
            </nav>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height: 5.6rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #111111;

    .logo {
        width: 15%;
        padding-left: 5%;
    }

    nav {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: 5%;

        div.navigation {
            position: absolute;
            right: 0;
            margin-top: 4rem;
            display: flex;
            flex-direction: column;

            a {
                background: #ffffff;
                height: 4rem;
                width: 15rem;
                text-decoration: none;
                color: #111111;
                font-family: 'Roboto', sans-serif;
                font-size: 1.4rem;
                padding-left: 2rem;
                line-height: 4rem;
                transition: all 300ms;

                &:hover {
                    transition: background 300ms;
                    background: #F2F2F2;
                }
            }
        }
    }
`;