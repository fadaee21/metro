import Image from "next/image";
import React, { Dispatch, forwardRef, useRef, useState } from "react";

interface Props {
  disabled: boolean;
  onChange: (value: string | null) => void;
  value: string | null;
  setImageVal: Dispatch<File | null>;
}

const ImageUpload = forwardRef((props: Props, ref: any) => {
  const { disabled, onChange, setImageVal, value, ...field } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturing, setCapturing] = useState(false);

  const enableCamera = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCapturing(true);
      navigator.mediaDevices
        // .getUserMedia({ video: true })
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          let video = videoRef.current;
          if (video) {
            video.srcObject = stream;
            video.play();
            setStream(stream);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const disableCamera = () => {
    setCapturing(false);
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      console.log(tracks);
      setStream(null);
    }
  };

  const capture = () => {
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

  const handleSelectFile = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <>
      <div
        className={`w-full rounded-customRadius_1 bg-field-disabled h-48 flex justify-center items-center relative ${
          !disabled && "bg-white"
        }`}
      >
        {value ? (
          <div className="relative w-full h-full">
            <Image
              src={value}
              alt="Description of Image"
              fill
              className="rounded-customRadius_1 w-full h-auto object-fill"
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
            <button onClick={enableCamera}>
              <Image
                src={"/assets/icons/add-photo.svg"}
                width={0}
                height={0}
                sizes="100vw"
                alt="add-photo"
                className="w-full h-auto"
              />
            </button>
          </label>
        )}
      </div>
      <div>
        <button
          className="h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg w-full  hover:bg-background-gray-l"
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
          {...field}
        />
      </div>
      {capturing && (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            style={{ width: "100%", height: "100%" }}
            className="absolute top-0 left-0 w-full h-full"
          ></video>
          <button
            className=" absolute bottom-20 h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg w-full  hover:bg-background-gray-l"
            onClick={capture}
          >
            Capture
          </button>
          <button
            className=" absolute bottom-10 h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg w-full  hover:bg-background-gray-l"
            onClick={disableCamera}
          >
            Disable Camera
          </button>
        </div>
      )}
    </>
  );
});

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
