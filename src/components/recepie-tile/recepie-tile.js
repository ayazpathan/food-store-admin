import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./recepie-tile.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  tile: {
    height: "250px",
    width: "340px",
  },
}));

const RecepieTile = ({ img, title, author }) => {
  const classes = useStyles();

  return (
    <div className="tile-container">
      <GridListTile key={img} className={classes.tile}>
        <LazyLoadImage
          src={"https://material-ui.com" + img}
          effect="blur"
          alt={title}
        />
        <GridListTileBar
          title={title}
          subtitle={<span>by: {author}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about ${title}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </div>
  );
};

export default RecepieTile;
