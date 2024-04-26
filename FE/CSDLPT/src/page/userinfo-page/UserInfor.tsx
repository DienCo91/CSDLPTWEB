import { Autocomplete, TextField } from "@mui/material";
import { KI_HOC } from "../Schedule/Schedule";
import Charts from "./Charts";

const UserInfor = () => {
  return (
    <div className="shadow-md py-[6px] px-[10px] flex justify-between">
      <div className="w-[50%]">
        <div className="shadow-md border-[1px] border-[#cccc] ">
          <h1 className="text-mainRed font-semibold border-b-[1px] px-[10px] py-[6px] border-[#cccc]">
            Thông tin sinh viên{" "}
          </h1>
          <div className="flex justify-between">
            <div className="px-[10px] py-[6px] ">
              <div className="flex">
                <p className="w-[200px]">Mã SV</p>
                <p>B21DCCN524</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Họ và tên</p>
                <p>Dương Minh Tuyền</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Ngày sinh</p>
                <p>07/10/1988</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Giới tính</p>
                <p>Nam</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Email</p>
                <p>duongminhtuyen.SIUUUU</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Email 2</p>
                <p>duongminhtuyen.SIUUUU</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Nơi sinh</p>
                <p>Bắc Ninh</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Dân tộc</p>
              </div>
              <div className="flex">
                <p className="w-[200px]">Hiện diện</p>
                <p>Đang học</p>
              </div>
            </div>

            <img
              src="https://scrumvn.com/wp-content/uploads/2023/05/Duong-Minh-Tuyen-la-ai-1-thang-kiem-duoc-bao-nhieu-tien-Co-bi-bat-chua-9.jpg"
              alt="img"
              className="object-cover h-[140px] w-[120px] my-[20px] mr-[10px] lg:mr-[40px]"
            />
          </div>
        </div>

        <div className="shadow-md border-[1px] mt-[20px] border-[#cccc] ">
          <h1 className="text-mainRed font-semibold border-b-[1px] px-[10px] py-[6px] border-[#cccc]">
            Thông tin khoá học
          </h1>

          <div className="px-[10px] py-[6px] ">
            <div className="flex">
              <p className="w-[200px]">Lớp</p>
              <p>D21CQCN121-B</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Ngành</p>
              <p>Công nghệ thông tin</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Khoa</p>
              <p>Công nghệ thông tin</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Bậc hệ đào tạo</p>
              <p>ĐHCQ (4,5 năm)</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Niên khóa</p>
              <p>2021-2026</p>
            </div>
          </div>
        </div>

        <div className="shadow-md border-[1px] mt-[20px] border-[#cccc] ">
          <h1 className="text-mainRed font-semibold border-b-[1px] px-[10px] py-[6px] border-[#cccc]">
            Cố vấn học tập
          </h1>

          <div className="px-[10px] py-[6px] ">
            <div className="flex">
              <p className="w-[200px]">Tài khoản</p>
              <p>QL1007</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Họ và tên</p>
              <p>Chu Phương Hiền</p>
            </div>
            <div className="flex">
              <p className="w-[200px]">Email</p>
              <p>cphien@ptit.edu.vn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-lg w-[50%] ml-[10px]">
        <div className="flex items-center  border-b-[1px] border-b-[#cccc] pb-[10px] ">
          <h1 className="text-mainRed font-semibold px-[10px] py-[6px] mt-[10px]">
            Kết quả học tập
          </h1>
          <Autocomplete
            disablePortal
            options={KI_HOC}
            sx={{
              width: 300,

              "& .MuiAutocomplete-input": {
                fontSize: 15,
              },
            }}
            defaultValue={KI_HOC[0]}
            size="small"
            className="mt-[12px] mx-[6px] "
            onChange={(_e, value) => console.log(value)}
            renderInput={(params) => <TextField {...params} label="Kì Học" />}
          />
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default UserInfor;
