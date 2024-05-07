import React from "react";

const ListCourseOpenRegister = () => {
  return (
    <div>
      <table className="w-full rounded-t-md overflow-hidden">
        <tr className="flex bg-mainRed text-white text-center justify-between border-[#CCCC]">
          <th className=" border-[1px] flex-[1]">
            Mã MH <i className="fa-solid fa-caret-up ml-[4px]"></i>
          </th>
          <th className=" border-[1px] flex-[5] ">Tên môn học </th>
          <th className=" border-[1px]  flex-[1]">Nhóm Tổ</th>
          <th className=" border-[1px]  flex-[1]">Số TC</th>
          <th className=" border-[1px]  flex-[1]">Lớp</th>
          <th className=" border-[1px]  flex-[2]">Số Lượng</th>
          <th className=" border-[1px]  flex-[1]">Còn Lại</th>
          <th className=" border-[1px] flex-[2]">Thời khóa biểu</th>
        </tr>
        <tr className="flex  text-black text-center justify-between border-[#cccc]">
          <th className=" border-[1px] flex-[1]">...</th>
          <th className=" border-[1px] flex-[5] ">...</th>
          <th className=" border-[1px]  flex-[1]">...</th>
          <th className=" border-[1px]  flex-[1]">...</th>
          <th className=" border-[1px]  flex-[1]">...</th>
          <th className=" border-[1px]  flex-[2]">...</th>
          <th className=" border-[1px]  flex-[1]">...</th>
          <th className=" border-[1px] flex-[2]">...</th>
        </tr>
      </table>
    </div>
  );
};

export default ListCourseOpenRegister;
