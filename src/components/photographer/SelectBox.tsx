import { forwardRef, useId } from "react";
import Select from "react-select";
type Option = { value: number; label: string };
interface Props {
  options: Option[];
  placeholder: string | undefined;
  isDisabled?: boolean;
  fieldValue: Option;
}

const SelectBox = forwardRef((props: Props, ref: any) => {
  const { options, fieldValue, isDisabled, placeholder, ...field } = props;
  const id = useId();
  return (
    <Select
      {...field}
      instanceId={id}
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      value={fieldValue}
      ref={ref}
      styles={{
        control: (base) => ({
          ...base,
          height: "3.5rem",
          boxShadow: "none",
          border: 0,
          borderRadius: "var(--border-radius_1)",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        }),
        option: (provided) => ({
          ...provided,
          borderBottom: "1px solid  var(--background-gray-l-hex)",
          backgroundColor: "#fff",
          color: "var(--field-label)",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          "&:hover": {
            backgroundColor: " var(--background-gray-l-hex)",
            borderRadius: "0.5rem",
          },
          ":last-child": {
            borderBottom: "none",
          },
        }),
        menu: (base) => ({
          ...base,
          padding: "0.5rem",
          borderRadius: "var(--border-radius_1)",
        }),
      }}
    />
  );
});

SelectBox.displayName = "SelectBox";

export default SelectBox;
