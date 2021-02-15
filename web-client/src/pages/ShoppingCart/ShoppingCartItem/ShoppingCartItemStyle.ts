import { makeStyles } from '@material-ui/core';
import { borderRadius, primaryColor } from '../../../Theme';

// eslint-disable-next-line max-lines-per-function
const ShoppingCartItemStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '25% auto',
    height: '80px',
  },
  cover: {
    width: '20%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flex: '3fr 1fr',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0',
    paddingTop: '3px',
    whiteSpace: 'nowrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  controlItems: {
    width: '25px',
    height: '25px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: borderRadius,
    borderColor: primaryColor,
    padding: 0,
    textAlign: 'center',
  },
  button: {
    backgroundColor: primaryColor,
  },
  controls: {
    paddingTop: '10px',
    display: 'flex',
    flex: '1 1 1 3',
    alignItems: 'center',
    columnGap: '2px',
  },
  unitaryPrice: {
    paddingLeft: '5px',
    fontSize: '12px',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
}));

export default ShoppingCartItemStyle;
