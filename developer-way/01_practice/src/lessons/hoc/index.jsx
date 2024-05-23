import React from "react";
import Button from "./Button";
import SendIcon from "./SendIcon";
import withTheme from "./withTheme";
import withLoggingOnClick from "./withLoggingOnClick";

const ButtonWithTheme = withTheme(Button);
const ButtonWithLoggingOnClick = withLoggingOnClick(Button, {
  label: "Button",
});

function HOC() {
  return (
    <div className="p-4 space-x-4">
      <Button onClick={() => console.log("Sent")} icon={<SendIcon />}>
        Send
      </Button>
      <ButtonWithTheme onClick={() => console.log("Button with theme")}>
        Theme Button
      </ButtonWithTheme>
      <ButtonWithLoggingOnClick
        location={HOC.name}
        icon={<SendIcon />}
        onClick={() => console.log("Sent (Analytical)")}
      >
        Send (Analytical)
      </ButtonWithLoggingOnClick>
    </div>
  );
}

export default HOC;
