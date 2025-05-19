import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function ContacPage() {
  return (
    <>
      <Container sx={{ mt: "5rem" }}>
        <Stack>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224097.62384464047!2d76.9284247005003!3d28.64398388315841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1747283196678!5m2!1sen!2sin"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={true}
            width="100%"
          ></iframe>
          <Typography
            sx={{
              mt: 3,
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#462037",
            }}
          >
            Contact Form
          </Typography>
          <form action="https://formspree.io/f/xdkgbqad" method="POST">
            <Grid container spacing={3}>
              <Grid size={{ xs: 6, md: 6 }}>
                <TextField
                  label="Full Name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  sx={{ mt: 3 }}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 6 }} sx={{ mt: 3 }}>
                <TextField
                  label="Enter email"
                  type="email"
                  name="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  label="Message"
                  type="text"
                  name="meassge"
                  required
                  fullWidth
                />
              </Grid>
              <Button
                sx={{
                  background: "#462037",
                  color: "white",
                  width: "10rem",
                  p: "1rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  mt: "2rem",
                }}
                type="submit"
                value="send"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Stack>
      </Container>
    </>
  );
}

export default ContacPage;
