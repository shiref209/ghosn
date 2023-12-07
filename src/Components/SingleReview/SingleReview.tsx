import React from "react";
import { Box, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
interface props {
  stars: number;
}
const SingleReview = ({ stars }: props) => {
  return (
    <Box display="flex" gap="0.5rem" flexDirection="column">
      {/* Review content */}
      <Typography variant="body1" fontWeight="400" color="#000">
        لذيذ ومفيد جدا انصح بشرائه
      </Typography>
      {/* stars */}
      <Box display="flex" flexDirection="row" gap="0.5rem">
        {Array(5)
          .fill(null)
          .map((item, i) => (
            <FaStar color={i < stars ? "#FFE600" : "#989898"} key={i} />
          ))}
      </Box>
      {/* name and date */}
      <Box display="flex" flexDirection="row" gap="0.5rem" fontFamily="Cairo">
        <Typography variant="body1" color="#737373">
          2021/10/10
        </Typography>
        <Typography variant="body1" color="#4563FF">
          محمد علي
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleReview;
