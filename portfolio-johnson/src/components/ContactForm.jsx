import { Container, Box, Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import pallete from "../pallete";

function ContactForm() {
  return (
    <>
      <div style={{ backgroundColor: pallete.charcoal }}>
        <Container maxWidth="md">
          <Box className="box-content">
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "30px",
                marginTop: 2,
                color: pallete.white,
              }}
            >
              Connect with Me!
            </Typography>
            <Typography
              sx={{ fontWeight: "400", margin: 2, color: pallete.white }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box className="box-content" sx={{ mx: "auto" }}>
            <div>
              <TextField
                label="Name"
                variant="filled"
                sx={{
                  margin: 2,
                  backgroundColor: pallete.whitegray,
                  borderRadius: 2,
                  width: { xs: "95%", sm: "43%" },
                }}
              />
              <TextField
                label="Phone"
                variant="filled"
                sx={{
                  margin: 2,
                  backgroundColor: pallete.whitegray,
                  borderRadius: 2,
                  width: { xs: "95%", sm: "43%" },
                }}
              />
            </div>
            <div>
              <TextField
                label="Email"
                variant="filled"
                sx={{
                  margin: 2,
                  backgroundColor: pallete.whitegray,
                  borderRadius: 2,
                  width: { xs: "100%", sm: 450 },
                }}
              />
            </div>
            <div>
              <TextField
                label="Message"
                variant="filled"
                multiline
                rows={4}
                sx={{
                  margin: 2,
                  backgroundColor: pallete.whitegray,
                  borderRadius: 2,
                  width: { xs: "100%", sm: 450 },
                }}
              />
            </div>
            <Button variant="contained" endIcon={<SendIcon />} color="lapis">
              Send
            </Button>
          </Box>
          <Box className="box-content">
            <Typography sx={{ color: "#808080", marginTop: 4, fontSize: "12px"}}>Copyright 2023 © Johnson Wang</Typography>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
