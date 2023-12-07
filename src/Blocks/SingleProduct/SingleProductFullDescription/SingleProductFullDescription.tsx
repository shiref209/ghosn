import { Box, Typography } from "@mui/material";
import React from "react";

const SingleProductFullDescription = () => {
  return (
    <Box>
      <Typography variant="h3" fontFamily="Cairo" fontWeight="700">
        وصف المنتج
      </Typography>
      {/* Body */}
      <Typography
        variant="body1"
        fontFamily="Cairo"
        fontWeight="400"
        fontSize="1.5rem"
        mt="1rem"
      >
        يحتوي هذا الطعام على أفضل العناصر الغذائية الضرورية لتحقيق صحة أفضل وجسم
        أقوى، كما أنه مليء بالفوائد المتعددة التي تساعد على تسهيل عملية الهضم.
        إنه غني بالفيتامينات والمعادن التي تعزز النمو الصحي وتساهم في الحياة
        الصحية الأفضل. كما انه يمكن أن يكون مفيد كجزء من نظام غذائي لفقدان
        الوزن.
      </Typography>
    </Box>
  );
};

export default SingleProductFullDescription;
