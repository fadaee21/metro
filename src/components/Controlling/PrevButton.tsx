import Image from "next/image";
import React from "react";

interface Props {
  onClick?: () => void;
  label?: string;
}

const PrevButton = ({ onClick, label }: Props) => {
  return (
    <div className={`flex items-start w-11/12 max-w-xl pb-4`}>
      <button
        onClick={onClick}
        className="border-0  bg-inherit text-right w-full flex items-center"
      >
        <i>
          <Image
            src="/assets/icons/Icon feather-arrow-right.svg"
            alt="arrow"
            width={10}
            height={10}
            style={{ width: "auto" }}
          />
        </i>
        <p className="mr-2">{label}</p>
      </button>
    </div>
  );
};

export default PrevButton;
