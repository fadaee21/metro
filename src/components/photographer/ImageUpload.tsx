import Image from "next/image";
import React, { useRef, useState } from "react";

interface Props {
  disabled: boolean;
  onChange: (value: string | null) => void;
  value: string | null;
  setImageVal: React.Dispatch<File | null>;
}

const ImageUpload: React.FC<Props> = ({
  disabled,
  onChange,
  setImageVal,
  value,
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const enableCamera = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStream(stream);
      }
    }
  };

  const disableCamera = () => {
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  };

  const capture = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    if (context && videoRef.current) {
      context.drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );
      canvas.toBlob((blob) => {
        if (blob !== null) {
          const imageUrl = URL.createObjectURL(blob);
          onChange(imageUrl);
        }
      });
    }
  };

  const handleSelectFile = () => {
    fileInput.current?.click();
  };

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
      {value ? (
        <div className="relative w-full h-full">
          <Image
            src={value}
            alt="Captured"
            layout="fill"
            className="rounded-customRadius_1 w-full h-auto object-cover"
          />
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
      ) : (
        <>
          <button onClick={enableCamera}>
            <Image
              src={"/assets/icons/add-photo.svg"}
              width={0}
              height={0}
              layout="responsive"
              alt="add-photo"
              className="w-full h-auto"
            />
          </button>
          <video
            ref={videoRef}
            autoPlay
            style={{ width: "100%", height: "100%" }}
          ></video>
          <button onClick={capture}>Capture</button>
          <button onClick={disableCamera}>Disable Camera</button>
        </>
      )}

      <button
        className="h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg w-full hover:bg-background-gray-l"
        onClick={handleSelectFile}
        disabled={disabled}
      >
        انتخاب عکس
      </button>

      <input
        type="file"
        id="imageUpload"
        accept=".jpg, .jpeg, .png"
        style={{ display: "none" }}
        onChange={handleImageChange}
        disabled={disabled}
        ref={fileInput}
      />
    </div>
  );
};

export default ImageUpload;
