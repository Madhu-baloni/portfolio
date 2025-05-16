import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;
    if (index <= text.length) {
      timeoutId = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);
    }
    if (index > text.length) {
      setIndex(0);
      setDisplayText("");
    }
    return () => clearTimeout(timeoutId);
  }, [text, index, delay]);

  return (
    <Typography
      sx={{
        fontFamily: "fantasy",
        fontWeight: "bold",
        color: "#462037",
        minHeight: "6rem",
      }}
      fontSize={{ xs: "2rem", md: "4rem" }}
      textAlign={{ xs: "center", md: "start" }}
    >
      {displayText}
    </Typography>
  );
};

export default Typewriter;
