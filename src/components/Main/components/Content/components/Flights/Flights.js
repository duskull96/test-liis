import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Flight from './components/Flight';

const useStyles = makeStyles(theme => ({
    flightsCounter: {
        margin: '0px 0px 12px 10px',
        '& p': {
            fontSize: 17,
        },
        '& span': {
            color: '#1157A7',
            fontWeight: 500,
            fontSize: 17,
        }
    },
    flights: {
        // border: '1px solid black',
        overflow: 'auto',
        height: '40vh',
        '&::-webkit-scrollbar': {
            width: 2,
            borderRadius: 2
        },
        '&::-webkit-scrollbar-track': {
            background: '#E7E7E7'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#1157A7'
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vh'
        }

    }

}))
const Flights = (props) => {
    const classes = useStyles()
    return (
        <>
            <Box>
                <Grid item xs={12} className={classes.flightsCounter}>
                    <Typography variant="body1">
                        Добавлено в Избранное: <Typography variant="body1" component='span'>10</Typography> рейсов
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.flights}>
                    <Flight />
                    <Flight />
                    <Flight />
                    <Flight />
                    <Flight />
                    <Flight />

                </Grid>
            </Box>
        </>
    )
}

export default Flights;