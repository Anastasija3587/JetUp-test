// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { fetchNews } from '../../redux/info/operations';
import { addNews } from '../../redux/info/actions';
import { State, singleNews } from '../../types/types';

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
  const isAuth = useSelector((state: State) => state.info.isAuth);

  useEffect((): void => {
    dispatch(fetchNews());
  }, [dispatch]);

  const addToProfile = (url: string) => {
    const newsToProf: any = news.find((n: { url: string }) => n.url === url);
    dispatch(addNews(newsToProf));
  };

  const classes = useStyles();

  return (
    <>
      <Link to="/">&#8617; Back</Link>
      <List className={classes.root}>
        {news.length > 0 &&
          news.map((n: singleNews) => (
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
                {isAuth && (
                  <Icon color="primary" onClick={() => addToProfile(n.url)}>
                    add_circle
                  </Icon>
                )}
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
      </List>
    </>
  );
};

export default News;
