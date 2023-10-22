import Image from "next/image";
import React from "react";

interface Props {
  disabled: boolean;
  onChange: (value: string | null) => void;
  value: string | null;
  setImageVal: React.Dispatch<File | null>;
}

const ImageUpload = React.forwardRef((props: Props, _ref) => {
  const { disabled, onChange, setImageVal, value, ...field } = props;
  const fileInput = React.useRef<HTMLInputElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);

  const enableCamera = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRecording(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
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

  const disableCamera = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      console.log(tracks);
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null; // Set the video element's srcObject to null
      }
    }
    setIsRecording(false);
  };

  const capture = (e: React.MouseEvent) => {
    e.stopPropagation();
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    if (context && videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob !== null) {
          const imageUrl = URL.createObjectURL(blob);
          onChange(imageUrl);
          stopStream(e);
        }
      });
    }
    setIsRecording(false); //if camera can not be found just close recording
  };

  const handleSelectFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    fileInput.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files && e.target.files[0];
    setImageVal(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChange(imageUrl);
    }
  };

  const stopStream = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRecording(false);
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null; // Set the video element's srcObject to null
      }
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
            {/* selected image */}
            <Image
              src={value}
              alt="Description of Image"
              fill
              className="rounded-customRadius_1 w-full h-auto object-fill"
            />
            <div>
              <button
                className="absolute top-1 right-1 bg-white/25 rounded-full p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange?.(null);
                }}
              >
                {/* close icon */}
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
            {isRecording ? (
              <div className="bg-black fixed top-0 left-0 right-0 bottom-0 z-30">
                <video
                  ref={videoRef}
                  autoPlay
                  className="w-full h-full"
                ></video>
                <button
                  className="absolute text-white bottom-10 left-10 h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg  hover:bg-background-gray-l"
                  onClick={capture}
                >
                  Capture
                </button>
                <button
                  className="absolute text-white bottom-10 right-10 h-14 font-bold py-2 px-4 rounded-customRadius_1 shadow-lg hover-bg-background-gray-l"
                  onClick={disableCamera}
                >
                  Disable Camera
                </button>
              </div>
            ) : (
              // start recording
              <button onClick={enableCamera} disabled={disabled}>
                <Image
                  src={"/assets/icons/add-photo.svg"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="add-photo"
                  className="w-full h-auto"
                />
              </button>
            )}
          </label>
        )}
      </div>
      <div>
        {/* browse file */}
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
    </>
  );
});

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
