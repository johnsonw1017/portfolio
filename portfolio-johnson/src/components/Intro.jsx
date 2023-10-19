import { Box, Container, Grid, Typography } from "@mui/material";
import "./component.css";
import Profile from "../assets/profile.png";
import pallete from "../pallete";

function Intro() {
  return (
    <section id="intro">
      <div style={{ backgroundColor: pallete.whitegray, transform: "skewY(3deg)" }}>
        <Container maxWidth="md" className="intro-container" disableGutters sx={{transform:  "skewY(-3deg)"}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box textAlign="center" className="box-content">
                <Typography
                  variant="h2"
                  className="intro-text"
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "30px", sm: "48px" },
                  }}
                >
                  Hi I'm <span style={{color: pallete.lapis}}>Johnson</span>, <br /> a <span style={{color: pallete.hunyellow}}>Web Developer</span>.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <img className="image" src={Profile} alt="profile" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

export default Intro;
