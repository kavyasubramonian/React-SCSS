import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const [login, setLogin] = React.useState(2);

  const handleLogin = (event, newLogin) => {
      setLogin(newLogin);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <ViewListIcon/>
          </Typography>
          <ToggleButtonGroup
            value={login}
            exclusive
            onChange={handleLogin}
          >
            <ToggleButton value={1} aria-label="sign-in">
              Sign In
            </ToggleButton>
            <ToggleButton value={2} aria-label="sign-out">
              Sign Out
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}