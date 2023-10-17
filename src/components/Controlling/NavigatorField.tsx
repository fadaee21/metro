import Image from "next/image";

interface Props {
  onClick: () => void;
  label: string;
  value: string;
}

const NavigatorField = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-white mb-4 borer border-2 border-gray-light-5 w-11/12 flex justify-between items-center px-5 h-14 rounded-customRadius_1 text-field-label cursor-pointer"
    >
      <p>{label}</p>
      <i className="text-gray-light-5">
        <Image
          src="/assets/icons/Arrow - Left Circle.svg"
          alt="arrow"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </i>
    </button>
  );
};

export default NavigatorField;
