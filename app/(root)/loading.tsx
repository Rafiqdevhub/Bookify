import React from "react";
import { Loader2 } from "lucide-react";

const RootLoading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-white shadow-soft-lg">
        <div className="loading-shadow">
          <Loader2 className="loading-animation w-12 h-12 text-[#663820]" />
          <h2 className="loading-title">Loading Your Library</h2>
          <p className="text-[#777] text-center max-w-xs">
            Retrieving your books and preparing your collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RootLoading;
