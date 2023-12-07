import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";
import SingleReview from "../../../Components/SingleReview/SingleReview";
import ReviewSingleRanking from "../../../Components/ReviewSingleRanking/ReviewSingleRanking";
import { useState } from "react";

const SingleProductReviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <Box display="flex" flexDirection="row" gap="7.5rem">
      {/* Reviews */}
      <Box display="flex" flexDirection="column" gap="1.5rem" width="40vw">
        <Typography variant="h3" fontFamily="Cairo" fontWeight="700">
          التقييمات (30)
        </Typography>
        {/* Single review */}
        {!showAllReviews ? (
          <>
            {" "}
            <SingleReview stars={4} />
            <Divider />
            <SingleReview stars={3} />
          </>
        ) : (
          <>
            {Array(20)
              .fill(null)
              .map((item, i) => (
                <>
                  <SingleReview stars={4} key={i} />
                  {i == 20 ? <Divider /> : ""}
                </>
              ))}
          </>
        )}
      </Box>
      {/* Rating */}
      <Box display="flex" flexDirection="column" gap="3rem">
        <Box display="flex" flexDirection="column" gap="1rem">
          {/* total rating */}
          <Typography variant="h3" fontFamily="Cairo" fontWeight="700">
            4.5/5
            <FaStar color="#FFE600" />
          </Typography>
          <Typography
            variant="body1"
            fontFamily="Cairo"
            fontWeight="700"
            color="#656565"
          >
            30 تقييم
          </Typography>
          {/* rankings */}
          <Box
            display="flex"
            flexDirection="column"
            gap="0.25rem"
            fontFamily="Cairo"
          >
            {/* single ranking */}
            <ReviewSingleRanking rank={5} value={60} />
            <ReviewSingleRanking rank={4} value={25} />
            <ReviewSingleRanking rank={3} value={10} />
            <ReviewSingleRanking rank={2} value={3} />
            <ReviewSingleRanking rank={1} value={2} />
          </Box>
        </Box>
        {/* show all reviews */}
        <Box>
          <Typography
            onClick={() => setShowAllReviews(!showAllReviews)}
            variant="body1"
            fontWeight="700"
            color="#1D1B75"
            textAlign={"right"}
            sx={{
              textDecorationLine: "underline",
            }}
          >
            مشاهدة جميع التقييمات
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductReviews;
