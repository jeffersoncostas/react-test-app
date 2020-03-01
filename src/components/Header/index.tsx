import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
    width: 100%;
    background: white;
    box-shadow: 0px 3px 24px #e2e2e2;
    padding: 20px;
`;

const Header = (props: any) => {
    const { children } = props;

    return (
        <Container>
            Header!!
            {children}
        </Container>
    );
};

export default Header;
