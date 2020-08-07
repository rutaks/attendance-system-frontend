import { ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./theme";
import "./assets/scss/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
