import React from 'react';
import './App.css';
import Theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div>Hello React!</div>
    </ThemeProvider>
  );
};

export default App;
