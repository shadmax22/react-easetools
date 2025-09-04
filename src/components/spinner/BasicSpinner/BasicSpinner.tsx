//@ts-nocheck
import style from "./BasicSpinner.module.css";
export function BasicLoader(prop: { size?: number; color?: string }) {
  const size = prop.size ?? 20,
    borderWidth = size * 0.1,
    color = prop.color ?? "white";

  return (
    <>
      <div
        className={style?.loader}
        style={{
          width: `${size}px`,
          border: `${borderWidth}px solid ${color}`,
        }}
      ></div>
    </>
  );
}
