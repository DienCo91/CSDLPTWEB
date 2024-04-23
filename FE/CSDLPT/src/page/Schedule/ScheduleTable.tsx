import React from "react";

const ALL_DAY = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];
const TIET = [
  ["Tiết 1", "", "", "", "", "", "", "", "07:00"],
  ["Tiết 2", "", "", "", "", "", "", "", "08:00"],
  ["Tiết 3", "", "", "", "", "", "", "", "09:00"],
  ["Tiết 4", "", "", "", "", "", "", "", "10:00"],
  ["Tiết 5", "", "", "", "", "", "", "", "11:00"],
  ["Tiết 6", "", "", "", "", "", "", "", "12:00"],
  ["Tiết 7", "", "", "", "", "", "", "", "13:00"],
  ["Tiết 8", "", "", "", "", "", "", "", "14:00"],
  ["Tiết 9", "", "", "", "", "", "", "", "15:00"],
  ["Tiết 10", "", "", "", "", "", "", "", "16:00"],
  ["Tiết 11", "", "", "", "", "", "", "", "17:00"],
  ["Tiết 12", "", "", "", "", "", "", "", "18:00"],
  ["Tiết 13", "", "", "", "", "", "", "", "19:00"],
  ["Tiết 14", "", "", "", "", "", "", "", "20:00"],
  ["Tiết 15", "", "", "", "", "", "", "", "21:00"],
];

const ScheduleTable = () => {
  return (
    <div className="mt-[10px]">
      <table className="w-full">
        <tr>
          <th className="font-normal w-[80px] text-center border-[1px] border-[#CCCC]">
            <i className="fa-solid fa-left-long text-mainRed"></i> Trước
          </th>
          {ALL_DAY.map((item) => (
            <th className="font-normal border-[1px] border-[#CCCC] w-[100px] bg-mainRed text-white text-center">
              {item}
            </th>
          ))}
          <th className="font-normal w-[80px] text-center border-[1px] border-[#CCCC]">
            Sau <i className="fa-solid fa-right-long text-mainRed"></i>
          </th>
        </tr>
        {TIET.map((item) => (
          <tr>
            {item.map((x, index) => (
              <td
                className={`w-[80px] text-center border-[1px] border-[#8f8f8fcc] ${
                  index === 0 || index === 8 ? "bg-mainRed text-white" : ""
                }`}
              >
                {x}
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <th className="font-normal w-[80px] text-center border-[1px] border-[#CCCC]">
            <i className="fa-solid fa-left-long text-mainRed"></i> Trước
          </th>
          {ALL_DAY.map((item) => (
            <th className="font-normal border-[1px] border-[#CCCC] w-[100px] bg-mainRed text-white text-center">
              {item}
            </th>
          ))}
          <th className="font-normal w-[80px] text-center border-[1px] border-[#CCCC]">
            Sau <i className="fa-solid fa-right-long text-mainRed"></i>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default ScheduleTable;
