"use client";

import { addBy, decremented, incremented, incrementedAsync } from "@/lib/store/counterStore";
import { useDispatch, useSelector } from "react-redux";

const StoreComponent = () => {
  const counter = useSelector((state) => state.counterSlice.counter);
  const todo = useSelector((state) => state.counterSlice.todo);
  const dispath = useDispatch();
  return (
    <div>
      <h1 className="text-white text-2xl">{counter}</h1>
      {todo.map((todo) => (
        <div className="text-white" key={todo.userId}>
          <h2>{todo.id}</h2>
          <h2>{todo.title}</h2>
        </div>
      ))}
      <div className="flex gap-4">
        <button className="py-3 px-4 bg-blue-400 text-white" onClick={() => dispath(incrementedAsync())}>
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
