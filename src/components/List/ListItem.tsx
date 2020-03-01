import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.li<any>`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin-bottom: 20px;
    cursor: pointer;

    ${({ isSelected }) => (isSelected ? "border: 1px solid red" : null)};
`;

interface Props {
    data: any;
    onClick?: (data: any) => void;
}

const ListItem: React.FC<Props> = props => {
    const { data, onClick = () => {} } = props;

    const [selected, setSelected] = useState(false);

    const handleOnClickListItem = () => {
        setSelected(!selected);
        onClick(data);
    };

    return (
        <Container onClick={handleOnClickListItem} isSelected={selected}>
            {data.full_name}
        </Container>
    );
};

export default ListItem;
