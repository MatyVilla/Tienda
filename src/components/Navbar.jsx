import React from 'react'
import clsx from 'clsx';
import { InputBase, IconButton, Typography, Toolbar, AppBar, CssBaseline, MenuItem, Menu } from '@material-ui/core';

import { AccountCircle, Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../style/Navbar';
import DialogLogin from './DialogLogin';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesion } from '../redux/usuario';
import {  withRouter } from 'react-router-dom';

const Navbar = (props) => {
    const dispatch = useDispatch()
    const cierreSesion = () => {
        dispatch(cerrarSesion())
        props.history.push()
    }
    const activo = useSelector(store => store.usuario.activo)
    const classes = useStyles();

    const handleDrawerOpen = () => {
        props.setOpen(true);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openCuenta = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <CssBaseline />
            <AppBar color='secondary'
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}
            >
                <Toolbar>
                    {/* burguerIcon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, props.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.grow}>
                        Tiendita
                    </Typography>
                    {/* Buscador */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {
                        activo !== true ? (
                            <DialogLogin />
                        ) : (
                            <div >
                                {/* UserIcon */}
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openCuenta}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                                    <MenuItem onClick={()=>cierreSesion()}>Cerrar sesion</MenuItem>
                                </Menu>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
 
        </>
    )
}

export default withRouter(Navbar)
