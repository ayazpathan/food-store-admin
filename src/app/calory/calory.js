import React from "react";
import ListCalories from "../../components/list-calory/list-calory";
import CalorySkeleton from "../../components/skeletons/calory/CalorySkeleton";

const Calory = () => {
  const [isDataFetching, setIsDataFetching] = React.useState(true);

  const hideSkeleton = () => {
    setIsDataFetching(false);
  };

  const renderSkeleton = () => {
    setTimeout(hideSkeleton, 5000);
    return <CalorySkeleton />;
  };

  const renderCalories = () => {
    return <ListCalories />;
  };

  return (
    <div>{isDataFetching === true ? renderSkeleton() : renderCalories()}</div>
  );
};

export default Calory;
