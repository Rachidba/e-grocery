import { makeStyles } from '@material-ui/core/styles';

const productItemStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '25% auto',
  },
  cover: {
    width: '30%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0',
    whiteSpace: 'nowrap',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 6px 6px 15px',
  },
  title: {
    fontWeight: 'bold',
  },
  unity: {
    color: 'grey',
    paddingTop: '10px',
  },
}));

export default productItemStyle;
