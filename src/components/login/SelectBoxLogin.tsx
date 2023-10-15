import React from "react";
import Select from "react-select";

interface Props {
  options: { value: number; label: string }[];
}

const SelectBoxLogin = React.forwardRef((props: Props, ref: any) => {
  const { options, ...field } = props;
  return (
    <div className="relative w-full h-14 border-2 border-field-border rounded-lg z-10 p-1 bg-field-background">
      <div
        className={`bg-white  absolute top-0 right-0 z-20  label_border_radius flex items-center h-full w-24 justify-center`}
      >
        <p className="text-sm text-field-label">نام کاربری</p>
      </div>

      <Select
        ref={ref}
        {...field}
        options={options}
        placeholder="انتخاب کنید"
        styles={{
          control: (base) => ({
            ...base,
            border: 0,
            borderRadius: "1rem",
            backgroundColor: "var(--field-background)",
            boxShadow: "none",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }),
          menu: (base) => ({
            ...base,
            border: "none",
            backgroundColor: "var(--field-background)",
            width: "300px",
            marginRight: "90px",
            zIndex: 200,
            color: "var(--field-label)",
          }),
          option: (provided) => ({
            ...provided,
            color: "var(--field-label)",
            borderBottom: "1px solid  var(--background-gray-l-hex)",
            backgroundColor: "var(--field-background)",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            "&:hover": {
              backgroundColor: " var(--background-gray-l-hex)",
            },
            ":last-child": {
              borderBottom: "none",
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            position: "absolute",
            right: "96px",
          }),
          placeholder: (provided) => ({
            ...provided,
            position: "absolute",
            right: "96px",
            color: " var(--background-gray-l-hex)",
          }),
        }}
      />
    </div>
  );
});
SelectBoxLogin.displayName = "SelectBoxLogin";
export default SelectBoxLogin;
