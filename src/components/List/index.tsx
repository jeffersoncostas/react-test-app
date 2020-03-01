import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
    ul {
        list-style-type: none;
    }
`;

interface Props {
    data: any[];
    onChangeSelectedItems: (items: any[]) => void;
    setSelectedItems: (e: any) => void;
}

const List: React.FC<Props> = props => {
    const { data, onChangeSelectedItems, setSelectedItems } = props;

    const onClick = (repository: any) => {
        setSelectedItems((previous: any) => {
            if (previous.find((item: any) => item.id == repository.id)) {
                return previous.filter((item: any) => item.id != repository.id);
            }
            return [...previous, repository];
        });
    };
    return (
        <Container>
            <ul>
                {data.map(item => (
                    <ListItem key={item.id} data={item} onClick={onClick} />
                ))}
            </ul>
        </Container>
    );
};

export default List;
