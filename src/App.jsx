import { ThemeProvider } from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import Navbar from "./components/Navbar";
import theme from "./temaConfig";
import Sidebar from "./components/Sidebar";
import useStyles from "./style/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import example from "./components/Example";
import Carrusel from "./components/Carrusel";
import GridProductos from "./components/GridProductos"

function App() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Navbar open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Switch>
              <Route component={example} to='/' exact/>
            </Switch>
          </main>
        </div>
        <Carrusel/>
        <GridProductos/>
      </ThemeProvider> 
    </Router>
  );
}

export default App;
