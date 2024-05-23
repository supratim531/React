import React from "react";
import Button from "./Button";
import SendIcon from "./SendIcon";
import UpdateIcon from "./UpdateIcon";
import WarningIcon from "./WarningIcon";

function ElementAsProp() {
  return (
    <div className="p-4 space-x-4">
      <Button
        onClick={() => {
          console.log("Sending...");
        }}
        icon={<SendIcon />}
      >
        Send
      </Button>
      <Button
        onClick={() => {
          console.log("Updating...");
        }}
        appearance="secondary"
        icon={<UpdateIcon />}
      >
        Update
      </Button>
      <Button
        onClick={() => {
          console.log("It's dangerous");
        }}
        className="hover:bg-red-700 bg-red-600"
        icon={<WarningIcon />}
      >
        Danger
      </Button>
      <Button
        onClick={() => {
          console.log("It won't work");
        }}
        appearance="primary"
        disabled
        className="rounded-3xl"
      >
        Disabled
      </Button>
    </div>
  );
}

export default ElementAsProp;
