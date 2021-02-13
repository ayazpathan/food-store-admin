import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import tileData from "./data";
import RecepieTile from "../../components/recepie-tile/recepie-tile";
import DashboardSkeleton from "../../components/skeletons/dashboard/dashboard";

import "./dashboard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Dashboard = () => {
  const [isDataFetching, setIsDataFetching] = React.useState(true);

  const hideSkeleton = () => {
    setIsDataFetching(false);
  };

  const renderTiles = () => {
    return tileData.map((item) => (
      <RecepieTile title={item.title} img={item.img} author={item.author} />
    ));
  };

  const renderSkeleton = () => {
    setTimeout(hideSkeleton, 5000);
    return Array(16)
      .fill()
      .map((item, index) => <DashboardSkeleton key={index} item={item} />);
  };

  return (
    <div className="grid-view">
      {isDataFetching === true ? renderSkeleton() : renderTiles()}
    </div>
  );
};

export default Dashboard;
