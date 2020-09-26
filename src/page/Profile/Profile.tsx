// eslint-disable-next-line
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { State, singleNews } from '../../types/types';
import { deleteProfile } from '../../redux/info/actions';

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

const Profile = (): JSX.Element => {
  const dispatch = useDispatch();
  const profile = useSelector((state: State) => state.info.profile);

  const classes = useStyles();

  return (
    <>
      <Link to="/">&#8617; Back</Link>
      <List className={classes.root}>
        {profile.length > 0 ? (
          profile.map((n: singleNews) => (
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
                <Grid
                  item
                  xs={8}
                  onClick={() => dispatch(deleteProfile(n.url))}
                >
                  <DeleteIcon />
                </Grid>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        ) : (
          <h3>You don't have saved news!</h3>
        )}
      </List>
    </>
  );
};

export default Profile;
