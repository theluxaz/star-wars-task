import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "block", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 90 },
      }}
      open
    >
      <CssBaseline />
      <List>
        <ListItem button>
          <Box
            component="img"
            sx={{
              height: 48,
              width: 48,
            }}
            src={require(`../static/logo.png`)}
          />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/films">
          <ListItemText primary="Films" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
