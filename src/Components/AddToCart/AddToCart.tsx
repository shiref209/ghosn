import { Box, Typography } from "@mui/material";
import { CustomButton } from "../UI/CustomButton/CustomButton";
import { SlHandbag } from "react-icons/sl";
import AmountButton from "../UI/AmountButton/AmountButton";
import { useState } from "react";
import { log } from "console";

interface Props {
  isCart?: boolean;
}
const AddToCart = ({ isCart }: Props) => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount((count) => (count > 1 ? count - 1 : 1));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "default",
        mt: "1rem",
      }}
    >
      {/* amount */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {/* increase  */}
        <AmountButton
          background={isCart ? "#EBEBEB" : "#A9291F"}
          color={isCart ? "#A9291F" : "#FFFFFF"}
          onClick={increase}
        >
          +
        </AmountButton>
        {/* amount number */}
        <Typography color="#1A1A1A">{count}</Typography>
        {/* decrease */}
        <AmountButton
          background={isCart ? "#EBEBEB" : "#F2F2F2"}
          color="#1A1A1A"
          onClick={decrease}
        >
          -
        </AmountButton>
      </Box>

      {/* Add to cart */}
      {!isCart && (
        <CustomButton
          sx={{
            width: "60%",
            display: "flex",
            gap: "0.75rem",
          }}
        >
          أضف لعربة التسوق
          <SlHandbag />
        </CustomButton>
      )}
    </Box>
  );
};

export default AddToCart;
