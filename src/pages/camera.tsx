import React, { useRef, useState } from "react";

const WebcamCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const enableCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
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
    if (stream) {
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      console.log(tracks);
      setStream(null);
    }
  };

  const capture = React.useCallback(() => {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    let video = videoRef.current;
    if (context && video) {
      context.drawImage(video, 0, 0, 640, 480);
      let data = canvas.toDataURL("image/png");
      console.log(data);
    }
  }, [videoRef]);

  return (
    <>
      <video ref={videoRef} width="640" height="480" />
      <button onClick={enableCamera}>Enable Camera</button>
      <button onClick={disableCamera}>Disable Camera</button>
      {stream && <button onClick={capture}></button>}
    </>
  );
};

export default WebcamCapture;
