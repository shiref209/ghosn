import { Stack } from "@mui/material";
const SectionLayout = (props: any) => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      // alignItems={"center"}
      padding={{ xs: "0 3rem", bsm: "0 5rem" }}
      marginTop={"3rem"}
      gap={{ xs: "3rem", md: "5rem" }}
    >
      {props.children}
    </Stack>
  );
};

export default SectionLayout;
