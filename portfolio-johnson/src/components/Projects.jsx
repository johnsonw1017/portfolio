import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import pallete from "../pallete";

function Projects() {
  return (
    <>
      <div style={{ backgroundColor: pallete.whitegray }}>
        <Container maxWidth="md">
          <Box className="box-content">
            <Typography
              sx={{ fontWeight: "700", fontSize: "30px", marginTop: 2 }}
            >
              Projects
            </Typography>
            <Typography sx={{ fontWeight: "400", margin: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index} >
                <Card sx={{ maxWidth: 345, marginBottom: index === 5 ? 2:0, backgroundColor: pallete.hunyellow}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://unsplash.com/photos/8wTPqxlnKM4/download?force=true&w=640"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Projects;
