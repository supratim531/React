import React from "react";

function LibrarySendIcon({ fontColor, ...props }) {
  console.log({ fontColor });
  console.log("props:", props);

  return (
    <i
      style={{
        color: fontColor,
      }}
      className="fa-solid fa-paper-plane"
    ></i>
  );
}

export default LibrarySendIcon;
