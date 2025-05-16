import React from "react";
import CardComponent from "./CardComponent";
import { Container} from "@mui/material";
import styles from '../Style/ProjectPage.module.css'

function ProjectPage() {
  return (
    <>
      <Container sx ={{mt:'4.1rem'}}>
        <CardComponent />
      </Container>
    </>
  );
}

export default ProjectPage;
