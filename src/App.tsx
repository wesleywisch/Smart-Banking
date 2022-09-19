import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Header } from './components/Header';
import { CardSection } from './components/CardSection';

import { colors } from './styles/colors';
import { GlobalStyle } from "./styles/GlobalStyles";
import { OuterLayout } from './styles/layout';

function App() {
  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />

      <Header />

      <OuterLayout>
        <CardSection />
      </OuterLayout>
    </ThemeProvider>
  );
}

export default App;
