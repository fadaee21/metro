import React from "react";
interface Props {
  label: string;
  type?: "add-new" | "admit";
}
const SubmitButton = ({ label, type }: Props) => {
  const buttonClass = `h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg w-full text-white ${
    type === "add-new"
      ? "bg-button-green hover:bg-button-green-l"
      : type === "admit"
      ? "bg-button-red hover:bg-button-red-l"
      : "text-black bg-white hover:bg-background-gray-l"
  }`;

  return (
    <button type="submit" className={buttonClass}>
      {label}
    </button>
  );
};

export default SubmitButton;
