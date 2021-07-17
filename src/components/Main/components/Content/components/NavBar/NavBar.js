import 'date-fns';
import { Box, Grid, Hidden, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import ArrowIcon from './Arrow.svg'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Calendar from './date.svg';
import ruLocale from "date-fns/locale/ru";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        marginBottom: theme.spacing(3)
    },
    nav: {
        width: '100%',
        fontSize: 32,
        display: 'flex',
        alignItems: 'center',
        '& img': {
            margin: '5px 20px 0 20px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
            '& img': {
                margin: '5px 5px 0 5px',
                transform: 'scale(0.4)'
            }
        },
    },
    date: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        marginBottom: 5,
        '& button': {
            padding: 0,
            margin: '0px 0px 3px 0px',
            [theme.breakpoints.down('sm')]: {
                margin: '0px 0px 5px 0px',
                transform: 'scale(0.8)'
            }
        }
    },
    inputDate: {
        '& div:nth-child(1)': {
            color: '#1157A7',
            fontSize: 25,
            [theme.breakpoints.down('sm')]: {
                fontSize: 15,
            },
            '& input:nth-child(1)': {
                width: 230,
                textAlign: 'right',
                [theme.breakpoints.down('sm')]: {
                    width: 100,
                },
            }
        },
    }
}))
const NavBar = (props) => {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    useEffect(() => {
        let date = selectedDate.toISOString().slice(0, 10)
        props.setOutboundPartialDate(date)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function DateIcon() {
        return <img src={Calendar} alt='date-icon' />
    }
    return (
        <>
            <Box className={classes.root}>
                <Grid item xs={6} md={6} className={classes.nav}>
                    Вылеты
                    <img src={ArrowIcon} alt='ArrowIcon' />
                    SVO - JFK
                </Grid>
                <Grid item xs={6} className={classes.date}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} >
                        <Hidden xsDown>
                            <KeyboardDatePicker
                                margin="normal"
                                format="dd MMMM yyyy"
                                disablePast="true"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    disabled: true,
                                }}
                                keyboardIcon={<DateIcon />}
                                classes={{ root: classes.inputDate }}
                                InputAdornmentProps={{
                                    position: 'end'
                                }}

                            />
                        </Hidden>
                        <Hidden smUp>
                            <KeyboardDatePicker
                                margin="normal"
                                format="dd MMM yyyy"
                                disablePast="true"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    disabled: true,
                                }}
                                keyboardIcon={<DateIcon />}
                                classes={{ root: classes.inputDate }}
                                InputAdornmentProps={{
                                    position: 'end'
                                }}

                            />
                        </Hidden>

                    </MuiPickersUtilsProvider>
                </Grid>
            </Box>
        </>
    )
}

export default NavBar;