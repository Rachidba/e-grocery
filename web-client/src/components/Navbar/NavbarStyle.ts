import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../Theme';

const navbarStyle = makeStyles(() => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '0px',
    position: 'fixed',
    width: '100%',
    overflow: 'hidden',
    top: 0,
    backgroundColor: '#F3F3F4',
    zIndex: 30,
  },
  shoppingCart: {
    paddingRight: '17px',
  },
  menu: {
    paddingLeft: '10px',
  },
  cartBasket: {
    fontSize: '.9rem',
    position: 'absolute',
    top: '4px',
    right: '15px',
    width: '18px',
    height: '18px',
    color: primaryColor,
    borderColor: primaryColor,
    borderStyle: 'solid',
    borderWidth: '0.3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    textAlign: 'center',
  },
}));

export default navbarStyle;
