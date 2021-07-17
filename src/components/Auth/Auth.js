import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Paper } from '@material-ui/core';
import AuthBG from './img/auth-bg.png'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    bgIMG: {
        height: '100%',
        width: '100%',
        filter: 'blur(10px)',
        background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${AuthBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    content: {
        height: '100%',
    },
    alert: {
        position: 'absolute',
        width: "100%",
        top: theme.spacing(1)
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(7, 4, 4, 4),
        borderRadius: 20
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    input: {
        height: 35,
        border: '1px solid #C9CACC',
        boxSizing: 'border-box',
        borderRadius: 4,
        marginTop: 7,
        marginBottom: 25,
        padding: theme.spacing(1),
        outline: 'none'
    },
    inputLabel: {
        fontWeight: '300',
        fontSize: 16,
        lineHeight: '19px',
        color: '#424242',
    },
    inputError: {
        height: 35,
        border: '1px solid #EB1717',
        boxSizing: 'border-box',
        borderRadius: 4,
        marginTop: 7,
        padding: theme.spacing(1),
        outline: 'none',
        boxShadow: '0px 0px 4px rgba(235, 23, 23, 0.2)'
    },
    inputErrorLabel: {
        color: '#EB1717',
        fontSize: 16,
        lineHeight: '19px',
        fontWeight: '300',
    },
    inputErrorMessage: {
        color: '#EB1717',
        fontSize: 12,
        fontWeight: 300,
        lineHeight: '14px',
        marginTop: 3,
        marginBottom: 11,
        
        

    },
    button: {
        width: 116,
        height: 34,
        background: 'linear-gradient(104deg, rgba(60,76,173,1) -15.34%, rgba(0,195,255,1) 145.95%)',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        color: '#FFFFFF',
        border: 'transparent',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 0px 4px #99A0A3',
        },
        '&:active': {
            cursor: 'pointer',
            background: 'linear-gradient(104deg, rgba(83,98,190,1) -15.34%, rgba(74,213,255,1) 145.95%)',
            border: '1.5px solid rgba(29, 138, 216, 0.3)'
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const Auth = (props) => {

    const classes = useStyles();
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        resetForm()
        if (props.status === "SIGNIN_FAILED") {
            setAlert(true)
        } else {
            setAlert(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.status, alert])

    const { handleSubmit, handleChange, values, touched, errors, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object({
            username: yup.string()
                .max(150, 'Max 150 characters')
                .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email')
                .required('Required'),
            password: yup.string()
                .min(8, 'Min 8 characters')
                .max(128, 'Max 128 characters')
                .matches(/^[a-zA-Z0-9]{8,}$/, 'Password should be 8+ latin characters or numbers')
                .required('Required')
        }),
        onSubmit: ({ username, password }) => {
            props.SignIn(values)
            props.setPending()
        }
    })
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.bgIMG}></Box>
                <Grid container direction='column' wrap='nowrap' justifyContent='center' alignItems='center' className={classes.content}>
                    {
                        alert ?
                            <Grid item sm={12} md={6} className={classes.alert}>
                                <Alert
                                    severity="error"
                                    elevation={6}
                                    variant="filled"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            size="medium"
                                            onClick={() => {
                                                props.setReady();
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                >
                                    <AlertTitle>Error</AlertTitle>
                                    <strong>{props.status}</strong>
                                </Alert>
                            </Grid>
                            :
                            null
                    }
                    <Container component="main" maxWidth="xs" >
                        <CssBaseline />
                        <Paper className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Simple Flight Check
                            </Typography>
                            <form className={classes.form} onSubmit={handleSubmit}>

                                {touched.username && errors.username ?
                                    <Grid container direction='column'>
                                        <label className={classes.inputErrorLabel}>Логин:</label>
                                        <input
                                            className={classes.inputError}
                                            value={values.username}
                                            onChange={handleChange}
                                            type='email'
                                            name='username'
                                            id='username'
                                        />
                                        <span className={classes.inputErrorMessage}>{errors.username}</span>
                                    </Grid>
                                    :
                                    <Grid container direction='column'>
                                        <label className={classes.inputLabel}>Логин:</label>
                                        <input
                                            className={classes.input}
                                            value={values.username}
                                            onChange={handleChange}
                                            name='username'
                                            id='username'
                                        />
                                    </Grid>

                                }
                                {touched.password && errors.password ?
                                    <Grid container direction='column'>
                                        <label className={classes.inputErrorLabel}>Пароль:</label>
                                        <input
                                            className={classes.inputError}
                                            value={values.password}
                                            onChange={handleChange}
                                            type='password'
                                            name='password'
                                            id='password'
                                        />
                                        <span className={classes.inputErrorMessage}>{errors.password}</span>
                                    </Grid>
                                    :
                                    <Grid container direction='column'>
                                        <label className={classes.inputLabel}>Пароль:</label>
                                        <input
                                            className={classes.input}
                                            value={values.password}
                                            onChange={handleChange}
                                            type='password'
                                            name='password'
                                            id='password'
                                        />
                                    </Grid>
                                }
                                {
                                    props.status === 'PENDING' ?
                                        <button type='submit' className={classes.button}>
                                            Войти
                                        </button>
                                        :
                                        <button type='submit' className={classes.button}>
                                            Войти
                                        </button>
                                }
                            </form>
                        </Paper>
                    </Container>
                </Grid>
            </Box>
        </>
    );
}

export default Auth;