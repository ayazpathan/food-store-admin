import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import "./store.css";

import SkeletonCard from "../../components/skeletons/cards/SkeletonCard";
import ItemCard from "../../components/card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const StoreFront = () => {
  const [isDataFetching, setIsDataFetching] = React.useState(true);

  const hideSkeleton = () => {
    setIsDataFetching(false);
  };

  const renderSkeleton = () => {
    setTimeout(hideSkeleton, 5000);
    return Array(4)
      .fill()
      .map((item, index) => <SkeletonCard key={index} />);
  };

  const renderCards = () => {
    return Array(4)
      .fill()
      .map((item, index) => <ItemCard key={index} />);
  };

  return (
    <div className="grid-view">
      {isDataFetching === true ? renderSkeleton() : renderCards()}
    </div>
  );
};

export default StoreFront;
