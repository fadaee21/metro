import React from "react";
import styles from "./styles.module.css";

interface Props {
  type: "password" | "text";
  label: string;
}
const StringField = ({ type, label, ...field }: Props) => {
  return (
    <div className="border-2 h-14 border-field-border rounded-lg p-1 bg-field-background relative w-full z-0">
      <label
        className={` text-sm flex items-center h-full w-24 justify-center absolute  right-0 top-0 w-100 text-field-label bg-white ${styles.label_border_radius}`}
      >
        {label}
      </label>
      <input
        className="bg-field-background absolute right-28 top-0 outline-none w-60 h-full"
        type={type}
        {...field}
      />
    </div>
  );
};

export default StringField;
