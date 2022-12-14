import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Header } from './components/Header';
import { CardSection } from './components/CardSection';
import { ChartSection } from './components/ChartSection';
import { Messaging } from './components/Messaging';
import { PaymentSection } from './components/PaymentSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

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
        <ChartSection />
        <Messaging />
        <PaymentSection />
        <FAQSection />
      </OuterLayout>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
