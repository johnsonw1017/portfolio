import { Box, Container, Grid, Typography } from "@mui/material";
import pallete from "../pallete";
import IronMan from "../assets/iron-man.png";

function MyStory() {
  return (
    <>
      <div style={{ backgroundColor: pallete.caroline_blue }}>
        <Container maxWidth="md" sx={{ paddingBottom: {xs: 2, md: 5} }}>
          <Box className="box-content">
            <Typography
              sx={{ fontWeight: "700", fontSize: "30px", marginTop: 2 }}
            >
              My Story
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <Typography sx={{ fontSize: {xs: "14px", md: "16px"},fontWeight: "400" }}>
                  During my childhood, I used to imagine a future where we
                  interacted with a 3D holographic user interface, much like the
                  one depicted in Iron Man. While that particular vision has not
                  yet materialized, I firmly believe that the path to achieving
                  something similar lies in the realm of software development.
                  After completing my degree in chemical engineering and
                  spending a year in the corporate world, I made the conscious
                  decision to enroll in Coder Academy, embarking on a journey to
                  transform this dream into a reality. My primary objective is
                  to craft the ultimate user experience for end-users, mirroring
                  the seamless and intuitive technology featured in Tony Stark's
                  lab.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <img className="image" src={IronMan} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default MyStory;
