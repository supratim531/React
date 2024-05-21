import React from "react";
import Button from "./Button";
import SendIcon from "./SendIcon";
import withTheme from "./withTheme";
import withLoggingOnClick from "./withLoggingOnClick";

const ButtonWithTheme = withTheme(Button);
const ButtonWithLoggingOnClick = withLoggingOnClick(Button);

function HOC() {
  return (
    <div className="p-4 space-x-4">
      <Button onClick={() => console.log("Sent")} icon={<SendIcon />}>
        Send
      </Button>
      <ButtonWithLoggingOnClick
        onClick={() => console.log("Sent with analytics")}
        icon={<SendIcon />}
      >
        Send (Analytical)
      </ButtonWithLoggingOnClick>
    </div>
  );
}

export default HOC;
