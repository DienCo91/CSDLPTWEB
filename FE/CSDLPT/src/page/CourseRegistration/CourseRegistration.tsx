import { Autocomplete, TextField } from "@mui/material";
import ListCourseOpenRegister from "./ListCourseOpenRegister";
import { LIST_COURSE_REGISTERED } from "./data_fake";
import ListCourseRegisted from "./ListCourseRegisted";
const OPTION_COURSE = [{ label: "Môn học theo kì học lớp sinh viên" }];

const CourseRegistration = () => {
  return (
    <div>
      <div className="bg-mainRed text-[white] font-normal flex justify-between px-[10px] py-[2px]  items-center">
        <div>
          <i className="fa-solid fa-atom mr-[10px]"></i>
          <span>ĐĂNG KÝ MÔN HỌC HỌC KỲ 2 - NĂM HỌC 2023-2024</span>
        </div>
        <i className="fa-solid fa-expand"></i>
      </div>

      <Autocomplete
        disablePortal
        options={OPTION_COURSE}
        sx={{
          width: 400,

          "& .MuiAutocomplete-input": {
            fontSize: 15,
          },
        }}
        defaultValue={OPTION_COURSE[0]}
        size="small"
        className="mt-[12px] mx-[6px] "
        onChange={(_e, value) => console.log(value)}
        renderInput={(params) => (
          <TextField {...params} label="Lọc theo môn học" />
        )}
      />

      <div>
        <h1 className="bg-[#7a7a7a1c] mt-[10px] py-[10px] px-[6px] font-semibold">
          Danh sách môn học mở cho đăng ký
        </h1>
        <ListCourseOpenRegister />
        <h1 className="bg-[#7a7a7a1c]  text-center py-[6px] italic">
          Không tìm thấy dữ liệu
        </h1>
      </div>

      <div>
        <h1 className="bg-[#7a7a7a1c] mt-[10px] py-[10px] px-[6px] font-semibold">
          Môn học đã đăng ký :
        </h1>
        <ListCourseRegisted data={LIST_COURSE_REGISTERED} />
        <h1 className="bg-[#7a7a7a1c]  text-center py-[6px] italic">
          Không tìm thấy dữ liệu
        </h1>
      </div>
    </div>
  );
};

export default CourseRegistration;
