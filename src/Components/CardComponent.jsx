import {
  Card,
  Grid,
  Stack,
  Typography,
  Box,
  Container,
  Tooltip,
} from "@mui/material";
import React from "react";
import data from "../DummyData/Carddata";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "../Style/ProjectPage.module.css";
import { Link } from "react-router-dom";
function CardComponent() {
  return (
    <>
      <Container>
        {data.map((item) => (
          <Card className={styles.card}>
            <Grid container spacing={{xs : 1, md:10}}>
              <Grid size={{xs:12,md: 6 }}>
                <img src={item.image} className={styles.image} />
              </Grid>
              <Grid size={{ xs:12, md: 6 }}>
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#462037",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box>
                    <Tooltip title="code" placement="top" arrow>
                      <Link to={item.github} target="_blank">
                        <GitHubIcon
                          sx={{ p: 1, cursor: "grab", color: "black" }}
                        />
                      </Link>
                    </Tooltip>

                    <Tooltip title="Demo" placement="top" arrow>
                      <Link to={item.host_site}>
                        <OpenInNewIcon
                          sx={{ p: 1, cursor: "grab", color: "black" }}
                        />
                      </Link>
                    </Tooltip>
                  </Box>
                </Box>
                <Typography sx={{ p: 2, textAlign: "justify", color: "gray" }}>
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CardComponent;
