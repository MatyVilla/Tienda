import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {NavLink,Switch,Route} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import GridProductos from "./GridProductos"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    height: "auto",
    width: "auto",
    /* paddingTop: "50%" */
  },
  control: {
    padding: theme.spacing(2),
  },
  btnBase: {
    width: 128,
    height: 128,
  },
  
}));

//Traer de BD
const categorias = ["hombre","mujer","niño"]

export default function GridCategorias() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const [categoria,setCategoria] = React.useState("hombre");

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {categorias.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >  
                <NavLink className={classes.btnBase} onClick={() => setCategoria(value)} to="/productos" >
                    {value}
                </NavLink>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Switch>
        <Route path="/productos">
          <GridProductos cat={categoria}/>
        </Route>
      </Switch>
    </Grid>
  );
}
