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
import Gym from "../assets/projects/gym_scheduling.png";
import Movie from "../assets/projects/movie_api.png";
import Roulette from "../assets/projects/roulette_game.png";
import Portfolio from "../assets/projects/portfolio_prototype.png";

function Projects() {
  const projects = [
    {
      name: "Gym Scheduling",
      description:
        "Fullstacks scheduling app, features include class calendar, user login, user registration, and class signup.",
      image: Gym,
      tech: ["JavaScript", "React", "Node", "Express", "MongoDB"],
      links: {
        github: "https://github.com/orgs/Roids-Fitness/repositories",
        frontend: "https://roids-fitness.vercel.app",
        backend: "https://roids-fitness-server-c1145ebc83e7.herokuapp.com",
      },
      date: "Aug, 2023"
    },
    {
      name: "Movie Review API",
      description:
        "Backend RESTful API application, features include Features include browsing movie titles, creating movie watchlists, and leaving movie reviews.",
      image: Movie,
      tech: ["Python", "Flask", "PostgreSQL"],
      links: {
        github: "https://github.com/johnsonw1017/pyflask-movie-review-api",
      },
      date: "Mar, 2023"
    },
    {
      name: "Roulette Game",
      description:
        "A text-based terminal application that simulates the classic casino game of roulette.",
      image: Roulette,
      tech: ["Python"],
      links: {
        github: "https://github.com/johnsonw1017/py-terminal-roulette-game",
      },
      date: "Dec, 2022"
    },
    {
      name: "Portfolio Prototype",
      description:
        "Three-day project of a portfolio website with a focus on responsive design.",
      image: Portfolio,
      tech: ["CSS", "HTML"],
      links: {
        github: "https://github.com/johnsonw1017/portfolio-prototype",
        frontend: "https://portfolio-prototype-johnsonwang.netlify.app",
      },
      date: "Nov, 2022"
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: pallete.whitegray }}>
        <Container maxWidth="md" sx={{ paddingBottom: "20px" }}>
          <Box className="box-content">
            <Typography
              sx={{ fontWeight: "700", fontSize: "30px", marginTop: 2 }}
            >
              Projects
            </Typography>
            <Typography sx={{ fontWeight: "400", margin: 2 }}>
              Here, you can explore a selection of the work I've done, ranging
              from web applications to APIs and more. Feel free to click on the
              cards to access their respective repositories and demos.
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {projects.map((project, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "100%",
                    backgroundColor: pallete.hunyellow,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="150"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "600" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "14px" }}>
                      {project.description} <span style={{fontWeight: "600"}}>({project.date})</span>
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "10px", fontWeight: "500" }}
                    >
                      {project.tech.join(" · ")}
                    </Typography>
                  </CardContent>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <Button
                        size="small"
                        href={project.links.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                      {project.links.frontend && (
                        <Button
                          size="small"
                          href={project.links.frontend}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      )}
                      {project.links.backend && (
                        <Button
                          size="small"
                          href={project.links.backend}
                          target="_blank"
                        >
                          Backend
                        </Button>
                      )}
                    </CardActions>
                  </div>
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
