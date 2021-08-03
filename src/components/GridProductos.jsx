import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useSelector } from 'react-redux';
import { db } from "../firebase"

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





/* const productos = ["Producto 1","Producto 2","Producto 3"] */

export default function  GridCategorias(props) {
  const productos = useSelector(store => store.producto.producto)
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  
  const productoDB = [1,2]

  console.log(productos)
  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {productos !== undefined && productos.length > 0 ?(
            productoDB.map((value,index) => (
              <Grid key={index} item>
                <Paper className={classes.paper} >  
                  <ButtonBase className={classes.btnBase}>
                      {value.nombre}
                  </ButtonBase>
                </Paper>
              </Grid>
            ))
          ): null}
        </Grid>
      </Grid>
    </Grid>
  );
}
