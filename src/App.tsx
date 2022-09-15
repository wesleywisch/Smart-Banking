import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Header } from './components/Header';

import { colors } from './styles/colors';
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />

      <Header />
    </ThemeProvider>
  );
}

export default App;
