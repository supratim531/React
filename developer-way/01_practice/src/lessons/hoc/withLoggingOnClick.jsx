export default function withLoggingOnClick(
  Component,
  options = { label: "Component" }
) {
  return ({ location, ...props }) => {
    console.log(`props.onClick: ${props.onClick}`);

    const onClick = () => {
      props.onClick();
      console.log(`analytical logs sent: ${options.label}`);
    };

    return <Component {...props} onClick={onClick}></Component>;
  };
}
