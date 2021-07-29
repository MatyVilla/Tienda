import React from 'react'
import { Button, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import LoginDialog from './LoginDialog';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RegistrarDialog from './RegistrarDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
           
                <Switch>
                <Route path='/login' component={LoginDialog}/>
                <Route path='/register' component={RegistrarDialog}/>
                </Switch>
            
        </Dialog>
    );
}



const DialogLogin = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
        <Router>
            <Button variant="text" color="inherit">
                <ListItem to='/login' component={Link}  onClick={handleClickOpen} button variant='text' color="inherit">
                    Login
                </ListItem>
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </Router>
        </>
    )
}

export default DialogLogin
