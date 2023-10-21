interface SelectiveButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const SelectiveButton = ({ label, active, onClick }: SelectiveButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`mt-10 w-48  h-14 font-bold py-2 px-4 mx  shadow-lg rounded-customRadius_1 ${
        active
          ? "bg-button-red text-white pointer-events-none"
          : "text-black bg-white hover:bg-background-gray-l"
      } `}
    >
      {label}
    </button>
  );
};

export default SelectiveButton;
