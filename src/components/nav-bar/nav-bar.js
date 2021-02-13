import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShareIcon from "@material-ui/icons/Share";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import StorefrontIcon from "@material-ui/icons/Storefront";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

const NavBar = ({
  className,
  classPaper,
  classToolbar,
  handleDrawerClose,
  directionTheme,
}) => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" className={className} classes={classPaper}>
      <div className={classToolbar}>
        <IconButton onClick={handleDrawerClose}>
          {directionTheme === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <a href="/app/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          </a>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <a href="/app/store">
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
          </a>
          <ListItemText primary="Store Products" />
        </ListItem>
        <ListItem button>
          <a href="/app/calory">
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
          </a>
          <ListItemText primary="Calory List" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Order Dates" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShareIcon />
          </ListItemIcon>
          <ListItemText primary="Share Recepie" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;
