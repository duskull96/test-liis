import { Divider, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PlaneSVG from './img/Plane.svg';
import ArrowSVG from './img/Arrow.svg';
import DashSVG from './img/Dash.svg';
import FavoriteFalse from './img/FavoriteFalse.svg';
import FavoriteTrue from './img/FavoriteTrue.svg';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        marginRight: 11,
        [theme.breakpoints.down('sm')]: {
            padding: 10
        }
    },
    planeIconBG: {
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(0, 119, 255, 0.05)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 64,
        margin: '0 24px 0 12px'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flightInfo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    countries: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& span': {
            fontSize: 17,
            [theme.breakpoints.down('sm')]: {
                fontSize: 10
            }
        },
        '& img': {
            margin: '0px 12px 0 12px'
        }
    },
    dateFlight: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& span': {
            fontSize: 14,
            color: '#878787',
            fontWeight: 'normal',
            [theme.breakpoints.down('sm')]: {
                fontSize: 10
            }
        },
        '& img': {
            margin: '0px 10px 0 10px'
        }
    },
    company: {
        '& span': {
            color: '#878787',
            fontWeight: 'normal',
            [theme.breakpoints.down('sm')]: {
                fontSize: 10
            }
        }
    },
    flightInfoSecond: {
        height: 70,
        display: 'flex',
        position: 'relative',
        '& img': {
            position: 'absolute',
            top: 0,
            right: 8,
            cursor: 'pointer',

        }
    },
    flightPrice: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        '& span': {
            color: '#878787',
            fontSize: 11,
            marginRight: 8,

        },
        '& p': {
            color: '#000000',
            fontSize: 17,
            [theme.breakpoints.down('sm')]: {
                fontSize: 12
            }
        }
    },
    divider: {
        margin: '0px 11px 0 11px'
    }
}))

const Flight = (props) => {

    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Hidden smDown>
                    <Grid item xs={1} className={classes.icon}>
                        <div className={classes.planeIconBG}>
                            <img src={PlaneSVG} alt='planeIcon' />
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={11} className={classes.info}>
                    <Grid item xs={7} md={10} className={classes.flightInfo}>
                        <Grid item xs={12} className={classes.countries}>
                            <Typography variant='subtitle1' component='span'>
                                {
                                    props.places.map(place => {
                                        if (place.PlaceId === props.flight.OutboundLeg.OriginId) {
                                            return `${place.CityName} (${place.IataCode})`
                                        } return null
                                    })
                                }
                            </Typography>
                            <img src={ArrowSVG} alt='arrowIcon' />
                            <Typography variant='subtitle1' component='span' >
                                {
                                    props.places.map(place => {
                                        if (place.PlaceId === props.flight.OutboundLeg.DestinationId) {
                                            return `${place.CityName} (${place.IataCode})`
                                        } return null
                                    })
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.dateFlight}>
                            <Hidden xsDown>
                                <Typography variant='subtitle2' component='span'>
                                    {
                                        `${new Date(props.flight.OutboundLeg.DepartureDate).getDate()} ` +
                                        `${new Date(props.flight.OutboundLeg.DepartureDate)
                                            .toLocaleDateString('en-EN', { month: 'long' })}, ` +
                                        `${new Date(props.flight.OutboundLeg.DepartureDate).getFullYear()}`
                                    }
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography variant='subtitle2' component='span'>
                                    {
                                        `${new Date(props.flight.OutboundLeg.DepartureDate).getDate()} ` +
                                        `${new Date(props.flight.OutboundLeg.DepartureDate)
                                            .toLocaleDateString('en-EN', { month: 'short' })}, ` +
                                        `${new Date(props.flight.OutboundLeg.DepartureDate).getFullYear()}`
                                    }
                                </Typography>
                            </Hidden>

                            <img src={DashSVG} alt='dashIcon' />
                            <Typography variant='subtitle2' component='span'>
                                {
                                    `${new Date(props.flight.OutboundLeg.DepartureDate)
                                        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.company}>
                            <Typography variant='subtitle2' component='span'>
                                {
                                    props.carriers.map(carrier => {
                                        for (let i = 0; i < props.flight.OutboundLeg.CarrierIds.length; i++) {
                                            if (carrier.CarrierId === props.flight.OutboundLeg.CarrierIds[i]) {
                                                return `${carrier.Name}`
                                            }
                                        } return null
                                    })
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={2} className={classes.flightInfoSecond}>
                        {
                            props.flight.isFavorit === false || props.flight.isFavorit === undefined ?
                                <img onClick={() => props.setFavorit(props.flight.QuoteId, true)} src={FavoriteFalse} alt='favoriteFalse' />
                                :
                                <img onClick={() => props.setFavorit(props.flight.QuoteId, false)} src={FavoriteTrue} alt='favoriteTrue' />
                        }
                        <Grid item xs={12} className={classes.flightPrice}>
                            <Typography variant='caption'>
                                Price:
                            </Typography>
                            <Typography variant='body1'>
                                {
                                    `${props.flight.MinPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")} ` +
                                    `${props.currencies[0].Symbol}`

                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
        </>
    )
}

export default Flight;