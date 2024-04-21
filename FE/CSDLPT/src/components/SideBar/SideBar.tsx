import {
  Autocomplete,
  Button,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import DeleteIcon from "@mui/icons-material/Delete";
declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}
const theme = createTheme({
  palette: {
    ochre: {
      main: "black",
      light: "black",
      dark: "black",
      contrastText: "#242105",
    },
  },
});
const SideBar = () => {
  return (
    <div className=" rounded-md overflow-hidden bg-white shadow-md pb-[10px]">
      <div className="bg-mainRed py-[6px] px-[12px] mb-[10px]">
        <h1 className="text-white text-[0.9em] ">
          <i className="fa-solid fa-user mr-[10px]"></i> ĐĂNG NHẬP
        </h1>
      </div>
      <div className="px-[10px]">
        <ThemeProvider theme={theme}>
          <TextField
            fullWidth
            size="small"
            label="Tên đăng nhập"
            variant="standard"
            color="ochre"
          />
          <TextField
            fullWidth
            size="small"
            label="Mật khẩu"
            variant="standard"
            color="ochre"
            margin="normal"
            type="password"
          />
        </ThemeProvider>
        <p className="text-end italic text-mainRed text-[0.8em] mb-[6px]">
          Quên mật khẩu
        </p>

        <Button
          fullWidth
          variant="contained"
          style={{ backgroundColor: "#ad171c" }}
          startIcon={<LoginIcon />}
        >
          Đăng Nhập
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
