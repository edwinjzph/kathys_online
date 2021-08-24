import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
  } from "@material-ui/core";
  import { ShoppingCart } from "@material-ui/icons";
  import { Link, useLocation } from "react-router-dom";
  import { BsFillBackspaceFill, BsFilterLeft } from 'react-icons/bs';
  import { useState,useEffect } from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Search } from "@material-ui/icons";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { commerce } from "../../lib/commerce";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';


  import "./style.css";
import Spinner from "../Spinner";
  
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

  
  const NavBar = ({ basketItems, totalCost,categories }) => {
    const location = useLocation();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [openss, setOpenss] = useState(false);


    const handleClick = () => {
      setOpens(!opens);
    };
    const handleClickk = () => {
      setOpenss(!openss);
    };

    
    return (
      <>
        <AppBar position="fixed" className="custom-navbar">
          <Container>
            <Toolbar className="row5">
              <div className="menu">           
              <BsFilterLeft 
                  edge="start"
             aria-label="open drawer"
              onClick={() => setOpen(true)} 
               height="2rem" color="#ebb608">
             <MenuIcon />
              </BsFilterLeft>
              <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box textAlign="center" p={2}>
            KATHTY'S STORE
          </Box>
          <Divider />
          <List>
          <ListItem        onClick={() => {
                      setOpen(false)
                    }}  classes={classes} component={Link}
                to="/"  button >
              <ListItemText primary={'Home'}
                />
            </ListItem>
            <ListItem button       onClick={() => {
                        handleClick();
                    }}>
        <ListItemText primary="Categories" />
        {opens ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={opens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map(groups => <ListItem onClick={() => {setOpen(false)}} onClick={() => window.location.href=`/categories/${groups.id}`}  component={Link} to={`/categories/${groups.id}`}  button className={classes.nested} key={groups.id} >
        <ListItemText key={groups.id} primary={groups.name}/>
      </ListItem>)}
        </List>
      </Collapse>
          </List>
        </div>
      </SwipeableDrawer>
              </div>
             
             <div>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                className="custom-title"
                color="inherit"
              >
             
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/daring-solstice-308219.appspot.com/o/3.PNG?alt=media&token=3c5ec395-991a-4e72-a355-d0f0d8fafd9b"
                  alt="kathys logo"
                  height="25px"
                  className="logo"
                />
              </Typography>
              </div>
          
              {location.pathname === "/basket" ? (
                <div className="basket-wrapper">
                  <h2>
                    Total cost: <strong>{totalCost}</strong>
                  </h2>
                </div>
              ) : (
                <div className="basket-wrapper">
                  <IconButton
                          color="inherit"
                          component={Link}
                          to="/search"
                     aria-label="Search">
                    <Search className="custom-basket"/>
                  </IconButton>
                  <IconButton
                    component={Link}
                    to="/basket"
                    aria-label="Show basket contents"
                    color="inherit"
                  >
                    <Badge badgeContent={basketItems} color="secondary">
                      <ShoppingCart className="custom-basket" />
                    </Badge>
                  </IconButton>
                </div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  };
  
  export default NavBar; 