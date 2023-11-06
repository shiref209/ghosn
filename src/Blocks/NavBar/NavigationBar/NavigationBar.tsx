import {
  Stack,
  Box,
  FormControl,
  TextField,
  Typography,
  Button,
  Divider,
  styled,
} from "@mui/material";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const CustomTextfield = styled(TextField)({});

const NavigationBar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={{ bsm: "20px 3rem", md: "20px 5rem" }}
    >
      {/* filter menu */}
      <Box
        sx={{
          display: "flex",
          width: "10%",
        }}
      >
        <Link to="/all-categories">
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
          "@media (max-width: 1024px)": {
            "& > :nth-child(n+5)": {
              display: "none",
            },
          },
          "@media (max-width: 800px)": {
            "& > :nth-child(n+4)": {
              display: "none",
            },
          },
        }}
      >
        <Typography variant="body2">البقالة</Typography>
        <Typography variant="body2">فواكه وخضروات</Typography>
        <Typography variant="body2">المشروبات</Typography>
        <Typography variant="body2">الجمال والعناية الشخصية</Typography>
        <Typography variant="body2">منتجات الأطفال</Typography>
      </Box>

      {/* user login */}
      <Box
        sx={{
          display: "flex",
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
