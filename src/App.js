import { ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import theme from "./temaConfig";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
