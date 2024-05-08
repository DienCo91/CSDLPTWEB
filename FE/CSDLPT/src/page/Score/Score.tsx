import { fake_data } from "./fake_data";

const Score = () => {
  return (
    <div>
      <div className="bg-mainRed text-[white] font-normal flex justify-between px-[10px] py-[2px]  items-center">
        <div>
          <i className="fa-solid fa-atom mr-[10px]"></i>
          <span>XEM ĐIỂM</span>
        </div>
      </div>

      <table className="w-full rounded-t-md overflow-hidden mt-[40px]">
        <tr className="flex bg-mainRed  text-white text-center justify-between border-[#CCCC]">
          <th className=" border-[1px]  flex-[1] font-normal">STT</th>
          <th className=" border-[1px] flex-[1] font-normal">
            Mã MH <i className="fa-solid fa-caret-up ml-[4px]"></i>
          </th>
          <th className=" font-normal border-[1px]  flex-[1]">Nhóm Tổ</th>
          <th className=" font-normal border-[1px] flex-[5] ">Tên môn học </th>

          <th className=" font-normal border-[1px]  flex-[1]">Số TC</th>
          <th className=" font-normal border-[1px]  flex-[1]">Điểm thi</th>
          <th className=" font-normal border-[1px]  flex-[1]">Điểm TK (10)</th>
          <th className=" font-normal border-[1px]  flex-[1]">Điểm TK (4)</th>
          <th className=" font-normal border-[1px]  flex-[1]">Điểm TK (C)</th>
          <th className=" font-normal border-[1px]  flex-[1]">Kết quả</th>
          <th className=" font-normal border-[1px]  flex-[1]">Chi tiết</th>
        </tr>
        {fake_data &&
          fake_data.map((item, idx) => (
            <tr className="flex   text-[black] text-center justify-between border-[#CCCC]">
              <th className=" border-[1px]  flex-[1] font-normal">{idx + 1}</th>
              <th className=" border-[1px] flex-[1] font-normal">{item.id}</th>
              <th className=" font-normal border-[1px]  flex-[1]">
                {item.group}
              </th>
              <th className=" font-normal border-[1px] flex-[5] ">
                {item.name}
              </th>

              <th className=" font-normal border-[1px]  flex-[1]">
                {item.stc}
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                {item.result_end}
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                {item.score_10}
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                {item.score_4}
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                {item.score_c}
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                <i className="fa-solid fa-check text-mainRed"></i>
              </th>
              <th className=" font-normal border-[1px]  flex-[1]">
                <i className="fa-solid fa-list text-mainRed"></i>
              </th>
            </tr>
          ))}
      </table>
      <div className="py-[10px] bg-[#cccccc78] text-mainRed">
        <div className="flex">
          <h1 className="flex-1">- Điểm trung bình học kỳ hệ 4: </h1>
          <h1 className="flex-[2] text-start">
            - Điểm trung bình tích lũy hệ 4:
          </h1>
        </div>
        <div className="flex">
          <h1 className="flex-1">- Điểm trung bình học kỳ hệ 10: </h1>
          <h1 className="flex-[2] text-start">
            - Điểm trung bình tích lũy hệ 10:
          </h1>
        </div>
        <div className="flex">
          <h1 className="flex-1">- Số tín chỉ đạt học kỳ: </h1>
          <h1 className="flex-[2] text-start">- Số tín chỉ tích lũy:</h1>
        </div>
      </div>
    </div>
  );
};

export default Score;
