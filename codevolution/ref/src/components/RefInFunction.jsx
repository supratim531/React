import React, { useEffect, useId, useRef } from "react";

function RefInFunction() {
  const inputId1 = useId();
  const inputId2 = useId();
  let cbInputRef = null;
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    console.log(cbInputRef);

    // // set focus to inputRef
    // this.inputRef.current.focus();

    // set focus to cbInputRef
    cbInputRef.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="m-4 inline-flex flex-col gap-4 rounded bg-[papayawhip] p-4 text-slate-800 shadow shadow-slate-400"
    >
      <div>
        <label htmlFor={inputId1}>Username: </label>
        <input
          ref={inputRef}
          id={inputId1}
          type="text"
          className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
        />
        <button
          tabIndex={1}
          type="button"
          onClick={() => alert(inputRef.current.value)}
          className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
        >
          Get Username
        </button>
      </div>
      <div>
        <label htmlFor={inputId2}>Name: </label>
        <input
          ref={(element) => (cbInputRef = element)}
          id={inputId2}
          type="text"
          className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
        />
        <button
          tabIndex={1}
          type="button"
          onClick={() => alert(cbInputRef.value)}
          className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
        >
          Get Name
        </button>
      </div>
    </form>
  );
}

export default RefInFunction;
