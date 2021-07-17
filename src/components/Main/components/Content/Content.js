import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from 'react';
import Slider from './components/Slider/Slider';
import NavBar from './components/NavBar/NavBar';
import Flights from './components/Flights/Flights';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    paper: {
        width: '100%',
        boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
        borderRadius: 20,
        padding: theme.spacing(7, 4, 4, 4),
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
    flights: {
        overflowY: 'auto',
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

const Content = (props) => {
    console.log(props, 'Content - props');
    const classes = useStyles()
    useEffect(() => {
        if (props.state.flightsPage.outboundPartialDate) {
            props.setPendingFlights()
            props.fetchBrowseQuotes(props.state.flightsPage.outboundPartialDate)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.state.flightsPage.outboundPartialDate])
    return (
        <>
            <Grid item xs={11} md={8} lg={8} className={classes.root}>
                <Paper className={classes.paper}>
                    <NavBar setOutboundPartialDate={props.setOutboundPartialDate} outboundPartialDate={props.state.flightsPage.outboundPartialDate} />
                    <Slider setImages={props.setImages} images={props.state.sliderPage} />
                    {
                        props.state.flightsPage.status === "PENDING_FLIGHTS" ?
                            <Skeleton animation="wave" className={classes.flights} />
                            :
                            <Flights flightsPage={props.state.flightsPage} setFavorit={props.setFavorit} />
                    }
                </Paper>
            </Grid>
        </>
    )
}

export default Content;