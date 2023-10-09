import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import MyStory from "./components/MyStory";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import ConnectForm from "./components/ConnectForm";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Intro />
        <MyStory />
        <Projects />
        <Experiences />
        <ConnectForm />
      </ThemeProvider>
    </>
  );
}

export default App;
