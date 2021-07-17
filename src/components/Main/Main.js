import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const Main = () => {
    return (
        <>
            <Box>
                <HeaderContainer />
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