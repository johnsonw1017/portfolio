import "./component.css";
import pallete from "../pallete";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap
} from "react-icons/fa6";
import { SiMui, SiMongodb, SiPostgresql, SiDjango } from "react-icons/si";
import { Box, Container } from "@mui/material";

function TechStackTicker() {
  return (
    <section id="tech-stack-ticker" style={{backgroundColor: pallete.caroline_blue}}>
      <div style={{ backgroundColor: pallete.lapis, transform: "skewY(3deg)"}}>
        <Container className="ticker-container" maxWidth="md">
          <Box className="tech-stack-container">
            <FaJs className="ticker-item" size="2em" color="white" />
            <FaPython className="ticker-item" size="2em" color="white" />
            <FaReact className="ticker-item" size="2em" color="white" />
            <SiMui className="ticker-item" size="2em" color="white" />
            <FaBootstrap className="ticker-item" size="2em" color="white" />
            <SiDjango className="ticker-item" size="2em" color="white" />
            <FaGitAlt className="ticker-item" size="2em" color="white" />
            <FaCss3Alt className="ticker-item" size="2em" color="white" />
            <FaNodeJs className="ticker-item" size="2em" color="white" />
            <SiMongodb className="ticker-item" size="2em" color="white" />
            <SiPostgresql className="ticker-item" size="2em" color="white" />
          </Box>
        </Container>
      </div>
    </section>
  );
}

export default TechStackTicker;
