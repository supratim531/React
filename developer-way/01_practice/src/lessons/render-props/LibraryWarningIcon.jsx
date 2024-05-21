import React from "react";

function LibraryWarningIcon({ fontColor, ...props }) {
  console.log({ fontColor });
  console.log("props:", props);

  return (
    <i
      style={{
        color: fontColor,
      }}
      className="fa-solid fa-triangle-exclamation"
    ></i>
  );
}

export default LibraryWarningIcon;
