import Image from "next/image";
import React, { Dispatch, forwardRef } from "react";

interface Props {
  disabled: boolean;
  onChange: (value: string | null) => void;
  value: string | null;
  setImageVal: Dispatch<File | null>;
}

const ImageUpload = forwardRef((props: Props, ref: any) => {
  const { disabled, onChange, setImageVal, value, ...field } = props;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageVal(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChange(imageUrl);
    }
  };
  return (
    <div
      className={`w-full rounded-customRadius_1 bg-field-disabled h-48 flex justify-center items-center relative ${
        !disabled && "bg-white"
      }`}
    >
      <input
        type="file"
        id="imageUpload"
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
        onChange={handleImageChange}
        disabled={disabled}
        ref={ref}
        {...field}
      />
      {value ? (
        <div className="relative w-full h-full">
          <Image
            src={value}
            alt="Description of Image"
            fill
            className="rounded-customRadius_1 w-full h-auto object-cover"
          />
          <div>
            <button
              className="absolute top-1 right-1 bg-white/25 rounded-full p-1"
              onClick={() => onChange?.(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor="imageUpload"
          className={disabled ? "" : "cursor-pointer"}
        >
          <Image
            src={"/assets/icons/add-photo.svg"}
            width={0}
            height={0}
            sizes="100vw"
            alt="add-photo"
            className="w-full h-auto"
          />
        </label>
      )}
    </div>
  );
});

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
