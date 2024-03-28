import React, { useEffect } from 'react';
import Root from './Src/setup';
import ThemeProvider from './Src/Store/ThemeProvider';
const App = () => {

  return (
    <ThemeProvider>
    <Root />
    </ThemeProvider>
  );
};
export default App;