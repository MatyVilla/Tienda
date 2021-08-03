import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
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

export default function GridCategorias(props) {
  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const categoria = props.cat 

  const productoDB = [1,2]

  const [arreglo, setArreglo] = useState([])
  
  useEffect(() => {

    const getProductos = async () => {
      const array = []
      const querySnapshot = await db.collection(`categoria/${categoria}/polera`).get();
      querySnapshot.forEach(doc =>{
        const prod = doc.data()
        array.push(prod)
      })
      console.log(querySnapshot)
      setArreglo(array)
      
    } 
    
    getProductos()
    
  },[]);

/*   console.log(arreglo) */


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {productoDB.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >  
                <ButtonBase className={classes.btnBase}>
                    {value}
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
