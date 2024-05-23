import React, { useEffect, useId, useRef } from "react";

const Input = React.forwardRef(({ label, placeholder, ...props }, ref) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>{label}: </label>
      <input
        ref={ref}
        id={inputId}
        type="text"
        className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

export default function RefForwarding() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  return (
    <form className="m-4 inline-flex flex-col gap-4 rounded bg-[papayawhip] p-4 text-slate-800 shadow shadow-slate-400">
      <Input
        ref={inputRef}
        label="Username"
        placeholder="Enter Username"
        aria-label="User Input"
        data-uppercase
      />
      <button
        tabIndex={1}
        type="button"
        onClick={() => inputRef.current.focus()}
        className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
      >
        Click To Focus
      </button>
      <button
        tabIndex={1}
        type="button"
        onClick={() => alert(inputRef.current.value)}
        className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
      >
        Get Username
      </button>
    </form>
  );
}
