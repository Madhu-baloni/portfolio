import React from "react";
import styles from "../Style/FooterPart.module.css";
import XIcon from "@mui/icons-material/X";
import { Box, Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
function FooterPart() {
  return (
    <>
      <Stack className={styles.box}>
        <Typography className={styles.title}>
          Get in touch in social media
        </Typography>
        <Grid container spacing={5} mt={3}>
          <Link className={styles.link}>
            <Grid>
              <XIcon />
            </Grid>
          </Link>
          <Link to="https://github.com/Madhu-baloni" className={styles.link}>
            <Grid>
              <GitHubIcon />
            </Grid>
          </Link>

          <Link
            to="https://in.linkedin.com/in/madhu-baloni-47baa1227"
            className={styles.link}
          >
            <Grid>
              <LinkedInIcon />
            </Grid>
          </Link>
          <Link className={styles.link}>
            <Grid>
              <EmailIcon />
            </Grid>
          </Link>
        </Grid>
      </Stack>
    </>
  );
}

export default FooterPart;
