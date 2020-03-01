import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import List from "../../components/List";
import api from "../../api";
import Button from "../../components/Button";

const Container = styled.div``;

const PageContainer = styled.div`
    padding: 20px;
    height: calc(100vh - 75px);
`;

const Home = () => {
    const [gitHubData, setGitHubData] = useState<any[]>([]);

    const [selectedItems, setSelectedItems] = useState<any[]>([]);

    useEffect(() => {
        fetchGithubData();
    }, []);

    const fetchGithubData = async () => {
        try {
            const res = await api.get("/repositories");

            setGitHubData(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeSelectedItems = (itemsToDelete: any[]) => {
        console.log("HOME ITEMS TO DELETE!", itemsToDelete);
    };

    const deleteItems = () => {
        console.log("deletar!!");
        console.log(selectedItems);
        setGitHubData(previous => {
            console.log();
            let newArr: any[] = previous.filter(item => {
                return !selectedItems.includes(item);
            });

            console.log("previous", previous);
            console.log(newArr);

            return newArr;
        });
        setSelectedItems([]);
    };

    return (
        <Container>
            <Header>
                <Button onClick={deleteItems} backgroundColor="red">
                    excluir itens
                </Button>
            </Header>
            <PageContainer>
                <List
                    setSelectedItems={setSelectedItems}
                    data={gitHubData}
                    onChangeSelectedItems={onChangeSelectedItems}
                />
            </PageContainer>
        </Container>
    );
};

export default Home;
