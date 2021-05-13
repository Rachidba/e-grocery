import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    justifyItems: 'center',
    width: '100%',
    height: '100vh',
    alignContent: 'start',
  },
  form: {
    display: 'grid',
    flexWrap: 'wrap',
    justifyItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface LoginInput {
  phoneNumber: string;
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<LoginInput>({
    phoneNumber: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof LoginInput) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}></Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form}>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Phone number
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={values.phoneNumber}
            onChange={handleChange('phoneNumber')}
            labelWidth={70}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              You dont have an account? Create one
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
