import { ThemeProvider } from "styled-components";
import { Home } from "./page/Home";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
