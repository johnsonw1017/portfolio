import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import MyStory from "./components/MyStory";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Intro id="intro" />
          <MyStory />
          <Projects />
          <Experiences />
          <ContactForm id="contact" />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
