import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, IconButton, Divider, useTheme } from '@material-ui/core';
import ListaCategoria from './ListaCategoria';
import useStyles from '../style/Sidebar';


const Sidebar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const handleDrawerClose = () => {
        props.setOpen(false);
    };
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <ListaCategoria/>
            </Drawer>
        </>
    )
}

export default Sidebar
