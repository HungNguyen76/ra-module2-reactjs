import React from "react";
import { Routes, Route } from "react-router-dom";
import UseState from "./session3/hooks/UseState";
import Homepage from "./components/Homepage";
import Hooks from "./session3/hooks/Hooks";
import UseEffect from "./session3/hooks/UseEffect";
import UseReducer from "./session3/hooks/UseReducer";
import Class from "./session2";
import UseMemo from "./session3/hooks/UseMemo";
import UseCallback from "./session3/hooks/UseCallback";
import UseContext from "./session3/hooks/UseContext";
import UseRef from "./session3/hooks/UseRef";
import FlipCoin from "./session2/practice/Flipcoin";
import TodoList from "./session3/practice/TodoList";

export default function Router() {
  return (
      <Routes>
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/useState" element={<UseState />} />
        <Route path="/hooks/useEffect" element={<UseEffect />} />
        <Route path="/hooks/useReducer" element={<UseReducer />} />
        <Route path="/hooks/useMemo" element={<UseMemo />} />
        <Route path="/hooks/useCallback" element={<UseCallback />} />
        <Route path="/hooks/useContext" element={<UseContext />} />
        <Route path="/hooks/useRef" element={<UseRef />} />
        <Route path="/practice2/flipCoin" element={<FlipCoin />} />
        <Route path="/practice3/todoList" element={<TodoList />} />
        <Route path="/session2" element={<Class />} />
        <Route path="/session3" element={<Hooks />} />
        <Route path="/" element={<Homepage />} />
      </Routes>

  );
}
