"use client";
import { memo } from "react";
import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <ThreeDot color="#000000" size="medium" text="" textColor="" />
        </div>
      </div>
    </div>
  );
};

export default memo(Loading);
