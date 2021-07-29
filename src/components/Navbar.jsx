import React, { useState } from 'react'
import clsx from 'clsx';
import { Button,ListItem, InputBase, IconButton, Typography, Toolbar, AppBar, CssBaseline, MenuItem, Menu } from '@material-ui/core';

import { AccountCircle, Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';
import useStyles from '../style/Navbar';
import ModalLogin from './ModalLogin';
import DialogLogin from './DialogLogin';

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openCuenta = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //prueba de inicio de sesion
    const [si,setSi] = useState(true)
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar color='secondary'
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    {/* burguerIcon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.grow}>
                        Tienda
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
                        si === true ? (
                            <DialogLogin/>
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
                                </Menu>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>

            <Sidebar open={open} setOpen={setOpen} />

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                Componentes
            </main>
        </div >
    )
}

export default Navbar
