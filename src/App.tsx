import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Header } from './components/Header';
import { CardSection } from './components/CardSection';

import { colors } from './styles/colors';
import { GlobalStyle } from "./styles/GlobalStyles";
import { OuterLayout } from './styles/layout';
import { ChartSection } from './components/ChartSection';

function App() {
  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />

      <Header />

      <OuterLayout>
        <CardSection />
        <ChartSection />
      </OuterLayout>
    </ThemeProvider>
  );
}

export default App;
