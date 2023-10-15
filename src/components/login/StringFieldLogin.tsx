import React, { forwardRef } from "react";

interface Props {
  type: "password" | "text";
  label: string;
}
const StringFieldLogin = forwardRef(
  ({ type, label, ...field }: Props, ref: any) => {
    return (
      <div className="border-2 h-14 border-field-border rounded-lg p-1 bg-field-background relative w-full z-0">
        <label
          className={` text-sm flex items-center h-full w-24 justify-center absolute  right-0 top-0 w-100 text-field-label bg-white label_border_radius `}
        >
          {label}
        </label>
        <input
          autoComplete="off"
          ref={ref}
          className="bg-field-background absolute right-28 top-0 outline-none w-60 h-full text-lg "
          type={type}
          {...field}
        />
      </div>
    );
  }
);
StringFieldLogin.displayName = "StringFieldLogin";

export default StringFieldLogin;
