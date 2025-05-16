import React from "react";
import skills from "../DummyData/Skilldata";
import { Card, Container, Grid, Typography } from "@mui/material";
import styles from "../Style/SkillPart.module.css";
function SkillsPart() {
  return (
    <>
      <Container>
        <Typography className={styles.title}>Skills</Typography>
        <Grid container spacing={6}>
          {skills.map((item) => (
            <Grid size={{ xs: 12, md: 3 }} className={styles.grid}>
              <Card className={styles.card} sx={{ background: "#d3d3d3" }}>
                <img src={item.logo} className={styles.image} />
                <Typography className={styles.card_text}>
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default SkillsPart;
