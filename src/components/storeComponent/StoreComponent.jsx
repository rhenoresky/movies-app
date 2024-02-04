"use client";

import { addBy, decremented, incremented } from "@/lib/store/counterStore";
import { useDispatch, useSelector } from "react-redux";

const StoreComponent = () => {
  const state = useSelector((state) => state.counterSlice.counter);
  const dispath = useDispatch();
  return (
    <div>
      <h1 className="text-white text-2xl">{state}</h1>
      <div className="flex gap-4">
        <button className="py-3 px-4 bg-blue-400 text-white" onClick={() => dispath(incremented())}>
          increment
        </button>
        <button className="py-3 px-4 bg-blue-400 text-white" onClick={() => dispath(decremented())}>
          decrement
        </button>
        <button className="py-3 px-4 bg-blue-400 text-white" onClick={() => dispath(addBy())}>
          add 10
        </button>
      </div>
    </div>
  );
};

export default StoreComponent;
