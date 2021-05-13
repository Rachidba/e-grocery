import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  openSideDrawer,
  closeSideDrawer,
} from '../../store/SideDrawer/actions';
import { RootState } from '../../store/reducers';
import { useHistory } from 'react-router-dom';
import GavelIcon from '@material-ui/icons/Gavel';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});
const Drawer: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isOpen: boolean = useSelector(
    (state: RootState) => state.sideDrawer.isOpen,
  );
  /* eslint-disable sonarjs/cognitive-complexity */
  // eslint-disable-next-line
  const toggleDrawer =
    (open: boolean): any =>
    (event: Event): any => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      if (open) dispatch(openSideDrawer());
      else dispatch(closeSideDrawer());
    };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => history.push('/login')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={'Login'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HourglassEmptyIcon />
          </ListItemIcon>
          <ListItemText primary={'Commandes en attente'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={'Historique des commandes'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary={'Conditions generales'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
