import { ThemeProvider } from "styled-components" ;
import { defaultTheme } from "./styles/theme/default" ;
import { GlobalStyled } from "./styles/global";
import { Router } from "./components/router";
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyled />
          <Router/>
        </BrowserRouter>
      </ThemeProvider>
    
  )
}
