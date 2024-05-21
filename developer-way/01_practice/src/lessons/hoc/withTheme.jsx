export default function withTheme(Component) {
  const theme = localStorage.getItem("theme");

  return (props) => <Component {...props} theme={theme}></Component>;
}
