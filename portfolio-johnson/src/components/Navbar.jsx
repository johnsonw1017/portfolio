import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Container,
  Toolbar,
  Button,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HashLink as Link } from "react-router-hash-link";


function Navbar() {
  return (
    <>
      <AppBar position="fixed" color="charcoal">
        <Container maxWidth="md">
          <Toolbar>
            <Box display="flex" alignItems="center">
              <Typography
                component={Link}
                to="/#intro"
                variant="h6"
                align="center"
                sx={{
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Johnson Wang
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginLeft="auto">
              <Button
                component={Link}
                to={"/#contact"}
                variant="contained"
                endIcon={<MailIcon />}
                size="small"
                color="lapis"
                sx={{
                  textTransform: "none",
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  marginRight: 2,
                }}
              >
                Contact
              </Button>
              <IconButton
                component="a"
                target="_blank"
                href="https://www.linkedin.com/in/johnson-wang-ab178117b"
                color="white"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                target="_blank"
                href="https://github.com/johnsonw1017"
                color="white"
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
