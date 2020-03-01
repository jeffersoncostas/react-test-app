import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";

const Container = styled.div<any>``;

const App = () => {
    return (
        <Container className="container-do-app">
            <Home />
        </Container>
    );
};

export default App;
