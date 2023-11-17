import { Typography } from "@mui/material";

const Display = ({ count }) => {
  return (
    <Typography textAlign="center" variant="h4" fontWeight="600">
      Count : {count}
    </Typography>
  );
};

export default Display;