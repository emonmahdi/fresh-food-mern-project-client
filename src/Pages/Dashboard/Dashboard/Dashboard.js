import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'; 
import ListItemButton from '@mui/material/ListItemButton'; 
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FcHome, FcRating, FcPaid, FcPlus, FcPositiveDynamic, FcBarChart, FcBusinessman } from "react-icons/fc";
import useAuth from '../../../Components/hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const {user, admin, logOut} = useAuth()
  // console.log(admin)
  // console.log(user.photoURL)
  const [mobileOpen, setMobileOpen] = React.useState(false);
   
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{background: '#351E83', color:'#fff', height: '100%'}}>
      <Toolbar />
      <Typography variant="h6" component="div">
          Fresh Food
      </Typography>
      <Divider />
      <List>
        <ListItem> 
            <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/home'>
                <span style={{ fontSize: "22px", paddingRight: "2px", textAlign: 'center' }}>
                  <FcHome /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Home</Button>
                </span> 
            </NavLink>  
            
          </ListItem>
        {admin && <Box>
          {/* =========== */}
          <ListItem>
              <Link style={{textDecoration:'none',  marginLeft:'20px'}} to='/dashboard/addproducts'> 
                    <FcPlus /> 
                    <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Add Product</Button>
                   
              </Link>
          </ListItem>
          {/* ============== */}
          {/* =========== */}
          <ListItem>
          <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/home'>
                <span style={{ fontSize: "22px", paddingRight: "2px", textAlign: 'center' }}>
                  <FcPositiveDynamic /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Manage Products</Button>
                </span> 
            </NavLink>
          </ListItem>
          {/* ============== */}
          {/* =========== */}
          <ListItem>
            <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/dashboard/manageorder'>
                <span style={{ fontSize: "22px", paddingRight: "2px", textAlign: 'center' }}>
                  <FcBarChart /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Manage Order</Button>
                </span> 
              </NavLink>
          </ListItem>
          {/* ============== */}
          {/* =========== */}
          <ListItem>
            <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/dashboard/makeadmin'>
                <span style={{ fontSize: "22px", paddingRight: "2px", textAlign: 'center' }}>
                  <FcBusinessman /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Make Admin</Button>
                </span> 
              </NavLink>
          </ListItem>
          {/* ============== */}
          
          </Box>}
          {/* User Not Admin */}
        {!admin && <Box>   
          {/* =========== */}
          <ListItem>
            <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/dashboard/review'>
                <span style={{ fontSize: "22px", paddingRight: "2px",textAlign: 'center' }}>
                  <FcRating /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>Add A Review</Button>
                </span> 
              </NavLink>
          </ListItem>
          {/* ============== */}
          {/* =========== */}
          <ListItem>
            <NavLink style={{textDecoration:'none',  marginLeft:'20px'}} to='/dashboard/myorder'>
                <span style={{ fontSize: "22px", paddingRight: "2px", textAlign: 'center' }}>
                  <FcPaid /> 
                  <Button style={{color:'#fff', marginTop:'6px'  }} variant='text'>My Order</Button>
                </span> 
              </NavLink>
          </ListItem>
          {/* ============== */}
          </Box>}
          

      </List>
      <Divider /> 
      <Box>
        <List>
        <ListItem>
            <Button onClick={logOut} style={{margin:'15px 30px'}} variant="contained"> 
              Logout
            </Button>
          </ListItem>
        </List> 
        </Box>
       
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{background:'#351E83'}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
           {
             user?.email ? (
               <span className='ms-auto'>
                 <img src={user.photoURL} className='img-fluid me-3' style={{borderRadius:'50%'}} height='50px' width='50px'  alt="" />
                 <span>{user.displayName}</span>
               </span>
             ) : (<span></span>)
           }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />   
        <Outlet></Outlet>
      </Box> 
     
    </Box>
   
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
