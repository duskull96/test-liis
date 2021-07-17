import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from 'react';
import Slider from './components/Slider/Slider';
import NavBar from './components/NavBar/NavBar';
import Flights from './components/Flights/Flights';

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
    }
}))

const Content = (props) => {
    console.log(props, 'Content - props');
    const classes = useStyles()
    useEffect(() => {
        props.fetchBrowseQuotes(props.state.outboundPartialDate)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.state.outboundPartialDate])
    return (
        <>
            <Grid item xs={11} md={8} lg={8} className={classes.root}>
                <Paper className={classes.paper}>
                    <NavBar setOutboundPartialDate={props.setOutboundPartialDate} outboundPartialDate={props.state.outboundPartialDate} />
                    <Slider />
                    <Flights />
                </Paper>
            </Grid>
        </>
    )
}

export default Content;