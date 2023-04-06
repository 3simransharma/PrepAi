import React from "react";
import { Button } from "@mui/material";
const StartButton = (props) => {
  const { text } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "60%",
        height: "40px",
        marginTop: "20%",
        backgroundColor: "#235c72",
      }}
      style={{
        backgroundColor: "#235c72",
      }}
    >
      {text}
    </Button>
  );
};

export default StartButton;
