import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
interface Props {
  rank: number;
  value: number;
}

const ReviewSingleRanking = ({ rank, value }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      textAlign="center"
      alignItems="center"
    >
      <Typography
        variant="body1"
        fontFamily="Cairo"
        fontWeight="700"
        color="#656565"
      >
        {rank}
      </Typography>
      <FaStar color=" #FFE600" />

      <Box display="flex" flexDirection="row" gap="0.5rem">
        <LinearProgress
          value={value}
          variant="determinate"
          sx={{
            width: "20vw",
            height: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#D3D1D1",
            "& .MuiLinearProgress-bar": { borderRadius: "0.5rem" },
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "#396402",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ReviewSingleRanking;
