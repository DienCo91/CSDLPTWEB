import { Autocomplete, Button, TextField } from "@mui/material";
import ListCourseOpenRegister from "./ListCourseOpenRegister";
import { LIST_COURSE_REGISTERED } from "./data_fake";
import ListCourseRegisted from "./ListCourseRegisted";
import { useEffect, useState } from "react";
import axios from "axios";
import { env } from "../../services/config";
import { useDispatch } from "react-redux";
import { setLoading } from "../../features/loading/loadingSlice";
const OPTION_COURSE = [{ label: "Môn học theo kì học lớp sinh viên" }];

export interface ICourse {
  bo_mon_id:string,
  mon_hoc_id:string,
  so_tc:string,
  ten_mon_hoc:string
}
const CourseRegistration = () => {
  const [courses,setCourses] = useState<ICourse[]>([])
  const dispatch = useDispatch()
  const [listCourseChecked,setListCourseChecked] = useState<string[]>([])
  const getDataCourse = async()=>{
    dispatch(setLoading(true))
  try{
    const res = await axios.get(`${env.VITE_API_ENDPOINT}/all-course`)
    setCourses(res.data.object)
  }
  catch(e){
    console.log(e);
    
  }
  finally{
    dispatch(setLoading(false))
  }
  }

  useEffect(()=>{

    getDataCourse()


  },[])

  const onChecked = (idCourseCheck:string)=>{
    if(listCourseChecked.includes(idCourseCheck)){
      const newListCourseChecked = listCourseChecked.filter((id)=>id!==idCourseCheck)
      setListCourseChecked(newListCourseChecked)
      return 
    }
    setListCourseChecked([...listCourseChecked,idCourseCheck])
  }

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

      <div >
        <h1 className="bg-[#7a7a7a1c] mt-[10px] py-[10px] px-[6px] font-semibold">
          Danh sách môn học mở cho đăng ký
        </h1>
        <ListCourseOpenRegister courses={courses} onChecked={onChecked} listCourseChecked={listCourseChecked}/>
        {!courses &&<h1 className="bg-[#7a7a7a1c]  text-center py-[6px] italic">
          Không tìm thấy dữ liệu
        </h1>}
        <div className="flex justify-end m-[10px]">
        <Button variant="contained" style={{ backgroundColor: "#ad171c" }} size="large">Đăng ký</Button>
        </div>
      </div>

      <div>
        <h1 className="bg-[#7a7a7a1c] mt-[10px] py-[10px] px-[6px] font-semibold">
          Môn học đã đăng ký :
        </h1>
        <ListCourseRegisted data={LIST_COURSE_REGISTERED} />
        {!courses && (
          <h1 className="bg-[#7a7a7a1c]  text-center py-[6px] italic">
            Không tìm thấy dữ liệu
          </h1>
        )}
      </div>
    </div>
  );
};

export default CourseRegistration;
