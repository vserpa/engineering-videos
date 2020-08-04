import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%; 
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `} 
`;

function PageDefault({ children, pageDefault }) {
    return (
        <>
        <Menu />
            <Main pageDefault={pageDefault}>
                {children}
            </Main>
        <Footer />
        </>
    );
}

export default PageDefault;