import React from "react";

const ButtonTable = ({ onCLick }: { onCLick: () => void }) => {
  return (
    <button
      onClick={onCLick}
      className="bg-button-red hover:bg-button-red-l rounded-md text-white px-4 py-1"
    >
      عملیات
    </button>
  );
};

export default ButtonTable;
