import { ThemeProvider, DefaultTheme } from 'styled-components';
import { colors } from './styles/colors';

import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
