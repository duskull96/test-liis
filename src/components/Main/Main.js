import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import ContentContainer from './components/Content/ContentContainer';
import Header from './components/Header/Header';


const Main = (props) => {
    return (
        <>
            <Box>
                <Header logOut={props.logOut} />
            </Box>
            <Container>
                <Grid container direction='row' justifyContent='center'>
                    <ContentContainer />
                </Grid>
            </Container>
        </>
    )
}

export default Main;