import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Dialog,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import pallete from "../pallete";
import validate from "validate.js";
import emailjs from "@emailjs/browser";

const USER_ID = import.meta.env.VITE_EMAILJS_USERID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICEID;
const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
  phone: {
    presence: false,
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 1000,
    },
  },
};

function ContactForm() {
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const handleCloseThankYou = () => {
    setThankYouOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        setThankYouOpen(true);
        setTimeout(() => {
          setThankYouOpen(false);
        }, 3000);
      })
      .catch((error) => console.log("FAILED...", error));

    setFormState((formState) => ({
      ...formState,
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    }));
  };

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <section id="contact">
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
              Feel free to leave a message below! Happy to connect with anyone
              looking to work with me. Feedback and enquires welcomed!
            </Typography>
          </Box>
          <Box className="box-content" sx={{ textAlign: "center" }}>
            <form
              headers="application/json"
              name="contact-form"
              onSubmit={sendEmail}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  width: { xs: "250px", sm: "480px" },
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    placeholder="Name"
                    name="name"
                    id="name"
                    helperText={
                      hasError("name") ? formState.errors.name[0] : null
                    }
                    type="text"
                    value={formState.values.name || ""}
                    onChange={handleChange}
                    error={hasError("name")}
                    variant="filled"
                    fullWidth
                    sx={{
                      backgroundColor: pallete.whitegray,
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone (Optional)"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    helperText={
                      hasError("phone") ? formState.errors.phone[0] : null
                    }
                    type="text"
                    value={formState.values.phone || ""}
                    onChange={handleChange}
                    error={hasError("phone")}
                    variant="filled"
                    fullWidth
                    sx={{
                      backgroundColor: pallete.whitegray,
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="filled"
                    placeholder="Email"
                    name="email"
                    id="email"
                    helperText={
                      hasError("email") ? formState.errors.email[0] : null
                    }
                    type="email"
                    value={formState.values.email || ""}
                    onChange={handleChange}
                    error={hasError("email")}
                    fullWidth
                    sx={{
                      backgroundColor: pallete.whitegray,
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="filled"
                    placeholder="Message"
                    name="message"
                    id="message"
                    helperText={
                      hasError("message") ? formState.errors.message[0] : null
                    }
                    type="text"
                    value={formState.values.message || ""}
                    onChange={handleChange}
                    error={hasError("message")}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      marginBottom: 2,
                      backgroundColor: pallete.whitegray,
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    color="lapis"
                    type="submit"
                    disabled={!formState.isValid}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box className="box-content">
            <Typography
              sx={{ color: "#808080", marginTop: 4, fontSize: "12px" }}
            >
              Copyright 2023 © Johnson Wang
            </Typography>
          </Box>
        </Container>
      </div>
      <Dialog open={thankYouOpen} onClose={handleCloseThankYou}>
        <Typography sx={{ padding: 2 }}>
          Thank you for your message! I will get back to you soon.
        </Typography>
      </Dialog>
    </section>
  );
}

export default ContactForm;
