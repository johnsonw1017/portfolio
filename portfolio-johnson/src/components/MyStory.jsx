import { Box, Container, Typography } from "@mui/material";
import pallete from "../pallete";

function MyStory() {
  return (
    <>
      <div style={{ backgroundColor: pallete.caroline_blue }}>
        <Container maxWidth="md">
          <Box className="box-content">
            <Typography sx={{fontWeight: "700", fontSize: "30px", marginTop: 2}}>
              My Story
            </Typography>
            <Typography sx={{fontWeight: "400", margin: 2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default MyStory;
