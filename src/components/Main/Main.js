import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';


const Main = (props) => {
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Container>
                <Grid container direction='row' justifyContent='center'>
                    <Content />
                </Grid>
            </Container>
        </>
    )
}

export default Main;