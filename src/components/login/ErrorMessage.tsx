import React from "react";

const ErrorMessage = ({ errMsg }: { errMsg: string | undefined }) => {
  return (
    <>
      {errMsg ? (
        <p className="text-sm text-red-600 ps-3">{errMsg}</p>
      ) : (
        <p className="h-5"> </p>
      )}
    </>
  );
};

export default ErrorMessage;
