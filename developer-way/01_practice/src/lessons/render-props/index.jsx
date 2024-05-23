import React from "react";
import Button from "./Button";
import LibrarySendIcon from "./LibrarySendIcon";
import LibraryWarningIcon from "./LibraryWarningIcon";

function RenderProps() {
  return (
    <div className="p-4 space-x-4">
      <Button
        icon={(props, isHovered) => (
          <LibrarySendIcon fontColor={isHovered ? "yellow" : ""} {...props} />
        )}
      >
        Send
      </Button>
      <Button
        appearance="secondary"
        icon={(props, isHovered) => (
          <LibraryWarningIcon fontColor={isHovered ? "red" : ""} {...props} />
        )}
      >
        Danger
      </Button>
    </div>
  );
}

export default RenderProps;
