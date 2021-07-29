import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import useStyles from '../style/ListaCategoria';

const ListaCategoria = () => {

    const classes = useStyles();
    const [openHombre, setOpenHombre] = React.useState(false);
    const [openMujer, setOpenMujer] = React.useState(false);

    const handleClickHombre = () => {
        setOpenHombre(!openHombre);
    };
    const handleClickMujer = () => {
        setOpenMujer(!openMujer);
    };

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Categorias
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={handleClickHombre}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hombre" />
                    {openHombre ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openHombre} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Pantalon" />
                        </ListItem>
                    </List>
                </Collapse>
                
                <ListItem button onClick={handleClickMujer}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mujer" />
                    {openMujer ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMujer} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Pantalon" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </>
    )
}

export default ListaCategoria
