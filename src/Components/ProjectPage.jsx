import React from "react";
import CardComponent from "./CardComponent";
import { Container, Typography } from "@mui/material";
import styles from "../Style/ProjectPage.module.css";

function ProjectPage() {
  return (
    <>
      <Container sx={{ mt: "4.1rem" }}>
        <Typography
          sx={{
            p: 1,
            m: 2,
            fontSize: "2rem",
            fontWeight: "bolder",
            color: "#462037",
          }}
        >
          Projects
        </Typography>
        <CardComponent />
      </Container>
    </>
  );
}

export default ProjectPage;
