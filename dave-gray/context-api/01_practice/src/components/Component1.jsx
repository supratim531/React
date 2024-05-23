import React, { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";
import clsx from "clsx";

function Component1() {
  const { test } = useContext(DataContext);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("supratim531");

  useEffect(() => {
    if (username === "supratim531") {
      setError(false);
    } else {
      setError(true);
    }
  }, [username]);

  return (
    <div>
      <h2 className="text-4xl font-medium">{test}</h2>

      <button
        onClick={() => setError((prev) => !prev)}
        className="rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all"
      >
        Make {error ? "Success" : "Error"}
      </button>
      <div className="my-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={clsx(
            "rounded border px-2.5 py-1.5 focus:outline-none",
            error
              ? "border-red-600 text-red-600"
              : "border-green-600 text-green-600",
          )}
        />
        <p className={clsx(error ? "text-red-600" : "text-green-600")}>
          {error ? "Username is invalid" : "Username is valid"}
        </p>
      </div>
    </div>
  );
}

export default Component1;
