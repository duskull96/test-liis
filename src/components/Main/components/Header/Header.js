import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import LogOut from './img/logout.svg'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 70
    },
    button: {
        height: 30,
        width: 100,
        border: 'none',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 20,
        color: '#1157A7',
        cursor: 'pointer'
    }
})

const Header = (props) => {
    const classes = useStyles()

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={8} className={classes.header}>
                    <button className={classes.button}>
                        Выйти
                        <img src={LogOut} alt='logout' />
                    </button>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;