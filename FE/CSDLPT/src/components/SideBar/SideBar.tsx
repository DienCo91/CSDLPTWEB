import { Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useRef, useState } from "react";
import "./SideBar.css";
import { ROUTES } from "../../until/CONSTANS";
import { useLocation, useNavigate } from "react-router-dom";
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

const FEATURES = [
  {
    route: ROUTES.COURSE_REGISTRATION,
    name: "Đăng kí môn học",
  },
  {
    route: ROUTES.SCHEDULE,
    name: "Xem thời khóa biểu",
  },
  {
    route: ROUTES.SCORE,
    name: "Xem điểm",
  },
];

const SideBar = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const iconRightLeft = useRef<HTMLDivElement>(null);
  const [isShowMoreIcon, setIsShowMoreIcon] = useState<boolean>(false);
  const showMoreText = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleShowMore = () => {
    !isShowMoreIcon
      ? iconRightLeft.current?.classList.add("rotate-90")
      : iconRightLeft.current?.classList.remove("rotate-90");
    console.log(isShowMoreIcon);

    !isShowMoreIcon
      ? showMoreText.current?.classList.add("parent-height")
      : showMoreText.current?.classList.remove("parent-height");

    setIsShowMoreIcon(!isShowMoreIcon);
  };

  return (
    <>
      <div className="overflow-hidden rounded-md bg-white shadow-md pb-[10px] ">
        <div className="bg-mainRed py-[6px] px-[12px]  flex justify-between">
          <h1 className="text-white text-[0.9em] ">
            <i className="fa-solid fa-user mr-[10px]"></i> ĐĂNG NHẬP
          </h1>
          {isLogin && (
            <i
              onClick={handleShowMore}
              ref={iconRightLeft}
              className="fa-solid fa-angle-right text-white transition-all duration-200 ease-in "
            ></i>
          )}
        </div>
        <div className="px-[10px] mt-[10px]">
          {!isLogin ? (
            <>
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
              <p className="text-end italic text-mainRed text-[0.8em] mb-[6px] cursor-pointer">
                Quên mật khẩu
              </p>
            </>
          ) : (
            <div
              className="overflow-hidden parent ease-in-out "
              ref={showMoreText}
            >
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Tài khoản</div>
                <div className=""> B21DCCN555</div>
              </div>
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Họ và tên</div>
                <div className=""> Dương Minh Tuyền</div>
              </div>
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Ngày sinh</div>
                <div className=""> 11/12/2018</div>
              </div>
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Ngành</div>
                <div className=""> Công Nghệ Thông Tin</div>
              </div>
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Khoa</div>
                <div className=""> Công Nghệ Thông Tin</div>
              </div>
              <div className="text-mainRed text-[0.9em] flex py-[6px] border-b-[1px] border-solid border-[#CCCC]">
                <div className="w-[40%]">Lớp</div>
                <div className=""> B21CQCN23</div>
              </div>
            </div>
          )}

          <Button
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#ad171c" }}
            startIcon={<LoginIcon />}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Đăng Xuất" : "Đăng Nhập"}
          </Button>
        </div>
      </div>
      {isLogin && (
        <div className="mt-[20px] text-[white] overflow-hidden rounded-md  shadow-md ">
          <div className="bg-mainRed py-[6px] px-[12px]">
            <i className="fa-solid fa-gears"></i>TÍNH NĂNG
          </div>
          <div className="pl-[6px] text-mainRed pb-[6px] px-[10px] text-[0.9em]">
            {FEATURES.map((item) => (
              <div
                onClick={() => navigate("/" + item.route)}
                className="pt-[6px] border-b-[1px] border-[#7f7f7f7d] cursor-pointer hover:text-[#5a2525]"
              >
                <i
                  className={`fa-solid  fa-chevron-right mr-[10px] transition-all duration-200 ${
                    "/" + item.route === pathname && "rotate-90"
                  }`}
                ></i>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
