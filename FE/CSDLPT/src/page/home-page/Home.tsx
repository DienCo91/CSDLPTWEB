import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { increment } from "../../features/counter/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  console.log(counter);

  return <div onClick={() => dispatch(increment())}>Home</div>;
};

export default Home;
