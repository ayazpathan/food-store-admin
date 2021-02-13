import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from "@material-ui/lab/Skeleton";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import "../../recepie-tile/recepie-tile.css";

const useStyles = makeStyles((theme) => ({
  tile: {
    height: "250px",
    width: "340px",
  },
  skeletonScale: {
    transform: "scale(1, 1.6)",
  },
}));

const DashboardSkeleton = () => {
  const classes = useStyles();

  return (
    <div className="tile-container">
      <GridListTile className={classes.tile}>
        <div className="skeleton-image-holder">
          <Skeleton
            className={classes.skeletonScale}
            height={250}
            width={340}
          />
        </div>

        <GridListTileBar
          title={<Skeleton />}
          subtitle={<Skeleton />}
          actionIcon={
            <IconButton>
              <Skeleton>
                <InfoIcon />
              </Skeleton>
            </IconButton>
          }
        />
      </GridListTile>
    </div>
  );
};

export default DashboardSkeleton;
