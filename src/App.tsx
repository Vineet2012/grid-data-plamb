import "./App.css";
import AntDesignGrid from "./tableGrid";
import { ThemeProvider } from "@emotion/react";
import { materialTheme } from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={materialTheme}>
        <AntDesignGrid />
      </ThemeProvider>
    </div>
  );
}

export default App;
