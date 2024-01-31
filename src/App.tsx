import { ThemeProvider } from "styled-components";
import { Home } from "./page/Home";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { GlobalProvider } from "./context/GlobalContext";

export function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeDefault}>
        <Home />

        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}
