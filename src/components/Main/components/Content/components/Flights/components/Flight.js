import { Divider, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
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

const Flight = () => {
    const classes = useStyles()
    const [favorite, setFavorite] = useState(false)
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
                                Moscow (SVO)
                            </Typography>
                            <img src={ArrowSVG} alt='arrowIcon' />
                            <Typography variant='subtitle1' component='span' >
                                New York City (JFK)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.dateFlight}>
                            <Typography variant='subtitle2' component='span'>
                                28 June, 2020
                            </Typography>
                            <img src={DashSVG} alt='dashIcon' />
                            <Typography variant='subtitle2' component='span'>
                                14:50
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.company}>
                            <Typography variant='subtitle2' component='span'>
                                Aeroflot
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={2} className={classes.flightInfoSecond}>
                        {
                            favorite ?
                                <img onClick={() => setFavorite(false)} src={FavoriteTrue} alt='favoriteTrue' />
                                :
                                <img onClick={() => setFavorite(true)} src={FavoriteFalse} alt='favoriteFalse' />
                        }
                        <Grid item xs={12} className={classes.flightPrice}>
                            <Typography variant='caption'>
                                Price:
                            </Typography>
                            <Typography variant='body1'>
                                23 924 ₽
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