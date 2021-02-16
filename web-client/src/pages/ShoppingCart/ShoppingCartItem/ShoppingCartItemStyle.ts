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
    minWidth: '20%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flex: '90% 10%',
    flexDirection: 'row',
  },
  content: {
    maxWidth: '80%',
    flex: '1 0',
    padding: '3px 0px 3px 10px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    whiteSpace: 'break-spaces',
    height: '2em',
    lineHeight: '1em',
    overflow: 'hidden',
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
