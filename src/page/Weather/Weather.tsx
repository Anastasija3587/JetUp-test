// eslint-disable-next-line
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
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

  const handleClick = (id: number) => {
    if (weather) {
      const newWeather: any = weather.filter((w: singleWeather) => w.id !== id);
      dispatch(deleteWeather(newWeather));
    }
  };

  return (
    <>
      <Link to="/">Back</Link>
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
            <Button size="small" onClick={() => handleClick(w.id)}>
              &#10006;
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Weather;
