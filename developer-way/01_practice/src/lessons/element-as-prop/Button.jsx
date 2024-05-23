export default function Button({
  onClick,
  children,
  icon = null,
  className = "",
  size = "medium",
  type = "button",
  disabled = false,
  appearance = "primary",
  ...props
}) {
  return (
    <button
      tabIndex={0}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 inline-flex flex-row items-center rounded transition-all ${
        size === "small"
          ? "px-2.5 py-1.5 text-[12px] gap-2"
          : size === "medium"
          ? "px-4.5 py-2.5 text-base gap-4"
          : "text-[20px] gap-4"
      } ${appearance === "primary" ? "text-white" : "text-black"}
      ${appearance === "primary" ? "bg-blue-600" : "bg-gray-200"}
      ${appearance === "primary" ? "hover:bg-blue-700" : "hover:bg-gray-300"} ${
        disabled
          ? "opacity-60 shadow-none text-gray-200 hover:bg-gray-600 bg-gray-600"
          : "shadow-sm shadow-slate-600"
      } ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
