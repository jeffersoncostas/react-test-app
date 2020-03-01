import React from "react";
import styled from "styled-components";

const Container = styled.button<any>`
    padding: 10px;
    background: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "blue"};
    color: white;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms;
    &:hover {
        transform: scale(1.02);
    }
`;

interface Props {
    onClick:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
    backgroundColor?: string;
}
const Button: React.FC<Props> = props => {
    const { onClick, backgroundColor, children } = props;

    return (
        <Container onClick={onClick} backgroundColor={backgroundColor}>
            {children}
        </Container>
    );
};

export default Button;
