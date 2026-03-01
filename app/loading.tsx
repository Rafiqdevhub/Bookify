import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-white shadow-soft-lg">
        <div className="loading-shadow">
          <Loader2 className="loading-animation w-12 h-12 text-[#663820]" />
          <h2 className="loading-title">Loading</h2>
          <p className="text-[#777] text-center max-w-xs">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
