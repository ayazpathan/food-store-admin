import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import "./calory-skeleton.css";

const CalorySkeleton = () => {
  const renderSkeletons = () => {
    return Array(8)
      .fill()
      .map((item, index) => <Skeleton width="100%" height={55} />);
  };

  return <div className="skeleton-container">{renderSkeletons()}</div>;
};

export default CalorySkeleton;
