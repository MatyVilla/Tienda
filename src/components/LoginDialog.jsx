import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ingresarUsuarioGoogle, IniciarSesion } from '../redux/usuario';
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import { IngresarUsuarioFacebook } from '../redux/usuario';
import { useState } from 'react';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="#">
                Tiendita
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginDialog = (props) => {
    //inicializar estilos
    const classes = useStyles();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            console.log('ingresa email')
            return
        }
        if (!pass.trim()) {
            console.log('ingresa contrasena')
            return
        }
        dispatch(IniciarSesion(props,email,pass))
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar sesion
                </Typography>
                <form className={classes.form} noValidate onSubmit={procesarDatos}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electronico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Ingrese contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Iniciar sesion
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to='#' variant="body2">
                                ¿Se te olvidó tu contraseña?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                {"¿No tienes una cuenta? Registrate"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <div className={classes.root}>
                    <IconButton className={classes.large}>
                        <Avatar alt="Facebook" onClick={() => dispatch(IngresarUsuarioFacebook())} className={classes.large} src="https://firebasestorage.googleapis.com/v0/b/tienda-1eebe.appspot.com/o/facebook.jpg?alt=media&token=17133cb3-2bb2-4fc2-b22c-42b62e1fb2bb" />
                    </IconButton>
                    <IconButton className={classes.large} onClick={() => dispatch(ingresarUsuarioGoogle())}>
                        <Avatar alt="Google" className={classes.large} src="https://firebasestorage.googleapis.com/v0/b/tienda-1eebe.appspot.com/o/google.png?alt=media&token=b5f68933-db43-4677-bda7-0ed81dee9417" />
                    </IconButton>
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default withRouter(LoginDialog)
