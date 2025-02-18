"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>tehre are {users.length}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
