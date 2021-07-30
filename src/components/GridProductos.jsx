import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  image: {
    width: 128,
    height: 128,
  },
  
}));

//Traer de BD
const categorias = ["Categoria 1","Categoria 2","Categoria 3"]

export default function GridProductos() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {categorias.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >  
                <ButtonBase className={classes.image}>
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
