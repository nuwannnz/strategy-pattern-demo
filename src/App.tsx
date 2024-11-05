import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Stack} from "@mui/material";
import {CreatePost} from "./components/CreatePost";

function App() {
  return (
    <Container sx={{paddingTop: '100px'}}>
        <Stack alignItems="center">
            <CreatePost />
        </Stack>

    </Container>
  );
}

export default App;
