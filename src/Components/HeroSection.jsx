import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../Style/HeroSection.module.css";
import Typewriter from "./TypeWriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <>
      <Box className={styles.container}>
        <Container>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 4 }}>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHAkxIL54IgzA/profile-displayphoto-shrink_200_200/B56ZXQX5LlGQAY-/0/1742957681306?e=2147483647&v=beta&t=BiIq4DCBKjbHbjoae2ZVxwCWAhjuUv47xUzSfEI9KLE"
                className={styles.img}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography className={styles.name}>I'm Madhu Baloni</Typography>
              <Typewriter
                className={styles.post}
                text="Frontend Developer"
                delay={500}
              />
              <Typography className={styles.discription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                nam vitae consectetur nemo voluptates. Repellat laborum placeat
                vitae iure alias?
              </Typography>

              <Stack direction="row" gap={3} sx={{ p: 1, mt: 3 }}>
                <Box className={styles.box}>
                  <Link to="https://github.com/Madhu-baloni" target="_blank">
                    <GitHubIcon className={styles.icon} />
                  </Link>
                </Box>
                <Box className={styles.box}>
                  <Link
                    to="https://in.linkedin.com/in/madhu-baloni-47baa1227"
                    target="_blank"
                  >
                    <LinkedInIcon className={styles.icon} />
                  </Link>
                </Box>
                <Box className={styles.box}>
                  <Link to="mailto:balonimadhu@gmail.com" target="_blank">
                    <EmailIcon className={styles.icon} />
                  </Link>
                </Box>
                <Box className={styles.box}>
                  <Link
                    to="http://www.instagram.com/balonimadhu"
                    target="_blank"
                  >
                    <InstagramIcon className={styles.icon} />
                  </Link>
                </Box>
              </Stack>
              <Box className={styles.box1}>
                <Button
                  sx={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontBold: "bold",
                  }}
                  href="/resume.pdf"
                  download="MadhuResume.pdf"
                >
                  Download Resume
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroSection;
