import { Autocomplete, TextField } from "@mui/material";

import ScheduleTable from "./ScheduleTable";

export const KI_HOC = [
  { label: "Học kì 2 Năm học 2023 - 2024 " },
  { label: "Học kì 1 Năm học 2023 - 2024" },
  { label: "Học kì 3 Năm học 2022 - 2023" },
  { label: "Học kì 2 Năm học 2022 - 2023" },
  { label: "Học kì 1 Năm học 2022 - 2023" },
];

const TKB = [
  { label: "Thời khóa biểu cá nhân" },
  { label: "Thời khóa biểu lớp sinh viên" },
  { label: "Thời khóa biểu lớp" },
  { label: "Thời khóa biểu môn học" },
  { label: "Thời khóa biểu khoa quản lí sinh viên" },
];

const WEEK = [
  { label: "Tuần 1" },
  { label: "Tuần 2" },
  { label: "Tuần 3" },
  { label: "Tuần 4" },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden rounded-md shadow-lg pb-[10px] ">
      <div className="bg-mainRed text-[white] font-normal flex justify-between px-[10px] py-[2px]  items-center">
        <div>
          <i className="fa-solid fa-atom mr-[10px]"></i>
          <span>THỜI KHÓA BIỂU HỌC KỲ</span>
        </div>
        <i className="fa-solid fa-expand"></i>
      </div>

      <div className="flex">
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
        <Autocomplete
          disablePortal
          options={TKB}
          defaultValue={TKB[0]}
          sx={{
            width: 400,

            "& .MuiAutocomplete-input": {
              fontSize: 15,
            },
          }}
          size="small"
          className="mt-[12px] mx-[6px] "
          onChange={(_e, value) => console.log(value)}
          renderInput={(params) => (
            <TextField {...params} label="Thời khóa biểu" />
          )}
        />
      </div>
      <Autocomplete
        disablePortal
        options={WEEK}
        defaultValue={WEEK[0]}
        sx={{
          width: 400 + 300 + 12,

          "& .MuiAutocomplete-input": {
            fontSize: 15,
          },
        }}
        size="small"
        className=" mx-[6px] mt-[10px] "
        onChange={(_e, value) => console.log(value)}
        renderInput={(params) => <TextField {...params} label="Tuần" />}
      />
      <ScheduleTable />
    </div>
  );
};

export default Schedule;
