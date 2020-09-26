// eslint-disable-next-line
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { State, singleWeather } from '../../types/types';
import { fetchWeather } from '../../redux/info/operations';
import { deleteWeather } from '../../redux/info/actions';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    wrap: {
      width: '500px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 'auto',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather: [] = useSelector((state: State) => state.info.weather);

  const classes = useStyles();

  const handleChange = (e: any): void => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity('');
  };

  return (
    <>
      <Link to="/">&#8617; Back</Link>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="input city..."
          value={city}
          onChange={handleChange}
        />
      </form>
      {weather.map((w: singleWeather) => (
        <Card key={w.id} className={classes.wrap}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Weather in {w.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {w.main.temp} K
            </Typography>
            <Typography variant="body2" component="p">
              {w.weather[0].description}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid item xs={8} onClick={() => dispatch(deleteWeather(w.id))}>
              <DeleteIcon />
            </Grid>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Weather;
