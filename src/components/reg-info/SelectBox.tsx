import React from "react";
import Select from "react-select";
interface Props {
  options: { value: number; label: string }[];
  placeholder: string;
}

const SelectBox = ({ options, placeholder, ...field }: Props) => {
  return (
    <Select
      {...field}
      options={options}
      placeholder={placeholder}
      styles={{}}
    />
  );
};

export default SelectBox;
