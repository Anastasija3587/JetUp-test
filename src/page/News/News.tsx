// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { fetchNews } from '../../redux/info/operations';
import { State } from '../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
      width: '200px',
      height: '200px',
    },
  }),
);

const News = (): JSX.Element => {
  const dispatch = useDispatch();
  const news = useSelector((state: State) => state.info.news);

  useEffect((): any => {
    dispatch(fetchNews());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
    <Link to='/'>Back</Link>
    <List className={classes.root}>
      {news.length > 0 && news.map((n: any) => (
          <>
            <ListItem key={n.url} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="foto"
                  src={n.urlToImage}
                />
              </ListItemAvatar>
              <ListItemText
                primary={n.author}
                secondary={<React.Fragment>{n.content}</React.Fragment>}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
    </List>
    </>
  );
};

export default News;
