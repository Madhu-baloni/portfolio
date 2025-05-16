import React from "react";
import styles from "../Style/AboutPage.module.css";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import data from "../DummyData/Aboutdata";
import SkillsPart from "./SkillsPart";

function AboutPage() {
  return (
    <>
      <Container className={styles.box}>
        <Box>
          <Typography className={styles.mainheading}>
            Experience & Education
          </Typography>
        </Box>
        {data.map((item) => (
          <Card className={styles.card}>
            <Grid container spacing={{ xs: 1, md: 15 }}>
              <Grid size={{ xs: 12, md: 3 }} className={styles.grid1}>
                <img src={item.image} className={styles.logo}></img>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }} className={styles.grid2}>
                <Stack>
                  <Typography className={styles.title}>{item.title}</Typography>
                  <Stack direction="row" gap={1}>
                    <Typography className={styles.text}>
                      {item.designation}
                    </Typography>
                    <Typography className={styles.text}>
                      ({item.time_period})
                    </Typography>
                  </Stack>
                  <Box className={styles.list}>
                    {item.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        ))}

        {/* <Button sx={{  mt: 3, color:'black' }}>Download Resume </Button> */}
        <SkillsPart />
      </Container>
    </>
  );
}

export default AboutPage;
