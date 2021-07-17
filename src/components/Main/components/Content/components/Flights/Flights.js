import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Flight from './components/Flight';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

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
        },
        [theme.breakpoints.down('sm')]: {
            '& p': {
                fontSize: 15,
            },
            '& span': {
                fontSize: 16,
            },
        }
    },
    flights: {
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

    },
    emptyFlights: {
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            '& h6': {
                fontSize: 17,
            }

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
                        Добавлено в Избранное: <Typography variant="body1" component='span'>{props.flightsPage.favoritFlights}</Typography> рейсов
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.flights}>
                    {
                        props.flightsPage.flights.Quotes.length ?
                            props.flightsPage.flights.Quotes.map((flight) => {
                                return <Flight
                                    flight={flight}
                                    carriers={props.flightsPage.flights.Carriers}
                                    currencies={props.flightsPage.flights.Currencies}
                                    places={props.flightsPage.flights.Places}
                                    setFavorit={props.setFavorit}
                                    key={Math.floor(Math.random() * 1e10)}
                                />
                            })
                            :
                            <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.emptyFlights}>
                                <Typography variant='h6'>В выбранный день рейсов нет</Typography>
                                <SentimentVeryDissatisfiedIcon fontSize='large' />
                            </Grid>
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Flights;