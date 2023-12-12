import {
  Stack,
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Divider,
  styled,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { categories } from "../../../Helpers/categories-data";

const CustomTextfield = styled(TextField)({});

const NavigationBar = () => {
  // check screen width by mui query
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <Stack
      direction={"row"}
      justifyContent={matches ? "space-around" : "space-between"}
      alignItems={"center"}
      padding={{ bsm: "20px 3rem", md: "20px 5rem" }}
      boxShadow={"0px 0px 4px 4px rgba(226, 231, 217, 0.25)"}
    >
      {/* filter menu */}
      <Box
        sx={{
          display: "flex",
          width: `${matches ? "20%" : "10%"}`,
        }}
      >
        <Link to="/categories">
          <Button
            sx={{
              color: "#A9291F",
            }}
          >
            عرض جميع الفئات
          </Button>
        </Link>
        {/* <FormControl
          sx={{
            flex: "1",
          }}
        >
          <TextField
            variant="standard"
            sx={{
              color: "#A9291F",
              "& .MuiInputLabel-root": {
                top: "10px",
                color: "#A9291F",
                fontSize: "18px",
              },
              "& .MuiInput-root": {
                marginTop: "0px",
              },
              "& .MuiSelect-icon": {
                // marginLeft: "-7px",
                color: "#A9291F",
              },
              "& .MuiInput-input:focus + .MuiInput-input:focus": {
                backgroundColor: "none",
              },
            }}
            label={"عرض جميع الفئات"}
            select
            SelectProps={{
              IconComponent: AiOutlineDown,
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            // InputLabelProps={shrink:true}
          ></TextField>
        </FormControl> */}
      </Box>
      {/* sections */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          color: "#656565",
          "@media (max-width: 1424px)": {
            "& > :nth-of-type(n+5)": {
              display: "none",
            },
          },
          "@media (max-width: 800px)": {
            "& > :nth-of-type(n+4)": {
              display: "none",
            },
          },
        }}
      >
        {categories.map((category) => (
          <Link to={`/categories/${category.alt}`} key={category.id}>
            <Typography variant="body2">{category.title}</Typography>
          </Link>
        ))}
      </Box>

      {/* user login */}

      <Box
        sx={{
          display: `${matches ? "none" : "flex"} `,
          flexDirection: "row",
          gap: "5px",
          color: "#476A11",
          textDecoration: "underline",
        }}
      >
        <Link to="/login">
          <Typography variant="h6">تسجيل الدخول</Typography>
        </Link>
        <Divider orientation="vertical" sx={{ color: "#476A11" }} flexItem />

        <Link to="/register">
          <Typography variant="h6">التسجيل</Typography>
        </Link>
      </Box>
    </Stack>
  );
};

export default NavigationBar;
