import { makeStyles } from '@material-ui/core/styles';

const productItemStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '1fr 3fr',
  },
  cover: {
    minWidth: '25%',
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0',
    whiteSpace: 'nowrap',
    padding: '10px',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 8px 6px 10px',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    whiteSpace: 'break-spaces',
    height: '2em',
    lineHeight: '1em',
    overflow: 'hidden',
  },
  unity: {
    color: 'grey',
    paddingTop: '10px',
  },
}));

export default productItemStyle;
