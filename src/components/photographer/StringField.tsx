import { forwardRef } from "react";
interface Props {
  type: string;
  label: string;
  disabled?: boolean;
}

const StringField = forwardRef((props: Props, ref: any) => {
  const { disabled, type, label, ...field } = props;

  return (
    <input
      ref={ref}
      disabled={disabled}
      placeholder={label}
      className={`w-full text-lg h-14 rounded-customRadius_1 ps-2 border-0 outline-none place_holder_disabled ${
        disabled && "bg-field-disabled"
      }`}
      type={type}
      {...field}
    />
  );
});

StringField.displayName = "StringField";

export default StringField;
