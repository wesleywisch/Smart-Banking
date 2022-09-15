import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      purplePrimary: string,
      accentPink: string,
      neutralLight: string,
      lavenderSecondary: string,
      darkPrimary: string,
      borderColor: string,
    }
  }
}