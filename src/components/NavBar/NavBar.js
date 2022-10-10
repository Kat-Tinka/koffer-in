// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Drawer from "@mui/material/Drawer";
// // import { Link } from "react-router-dom";

// import { useContext, useState } from "react";
// // import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// ///////////////////////////////////////////////////////////////////////////////

// export default function NavBar() {
//   const { logout, user } = useContext(AuthContext);
//   const [open, setisOpen] = useState(false);

//   return (
//     <AppBar position="sticky">
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//           onClick={() => setisOpen(!open)}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Koffer in ...{"{ Berlin }"} / <br />
//           One Little Suitcase in...
//         </Typography>
//         <div></div>
//         <Link to="/">Home </Link>|
//         {!user ? (
//           <>
//             <Button variant="info" href="/register">
//               {" "}
//               register
//             </Button>

//             <Button variant="info" href="/login">
//               {" "}
//               login
//             </Button>
//           </>
//         ) : (
//           <Button variant="info" onClick={logout}>
//             {" "}
//             logout
//           </Button>
//         )}
//         <Link to="/chat">Chat </Link>| <Link to="/region">Region </Link>|{" "}
//         <Drawer open={open} onClose={() => setisOpen(false)} anchor="right">
//           <Link to="/countries">Countries </Link>
//         </Drawer>
//         |{" "}
//         {/* <Button href="/register" color="inherit">
//           Register
//         </Button>
//         <Button href="/login" color="inherit">
//           Login
//         </Button>*/}
//       </Toolbar>
//     </AppBar>
//   );
// }

//

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
// import Drawer from "@mui/material/Drawer";
// import { Link } from "react-router-dom";

import { useContext, useState } from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { style } from "@mui/system";

///////////////////////////////////////////////////////////////////////////////

export default function NavBar() {
  const { logout, user } = useContext(AuthContext);
  const [open, setisOpen] = useState(false);

  //Chat App Style- NavBar
  // const style = {
  //   nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  //   heading: `text-white text-3xl`
  // }

  return (
    // <div className ={style.nav}>
    //   <h1 className={style.heading}></h1>
    // </div>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          // onClick={() => setisOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Koffer in ...{"{ Berlin }"} / <br />
          One Little Suitcase in...
        </Typography>
        
        <Link to="/">Home </Link>|<Link to="/countries">Countries </Link>|
        <Link to="/region">Region </Link>|<Link to="/chat">Chat </Link>|
        {/* {user && <Link to="/chat">Chat</Link>} */}
        {!user ? (
          <>
            <Button variant="info" href="/register">
              {" "}
              register
            </Button>
            |
            <Button variant="info" href="/login">
              {" "}
              login
            </Button>
          </>
        ) : (
          <Button variant="info" onClick={logout}>
            {" "}
            logout
          </Button>
        )}
        {/* <Drawer open={open} onClose={() => setisOpen(false)} anchor="right"> */}
        {/* <Link to="/countries">Countries </Link> */}
        {/* </Drawer> */}|{" "}
        {/* <Button href="/register" color="inherit">
          Register
        </Button> 
        <Button href="/login" color="inherit">
          Login
        </Button>*/}
      </Toolbar>
    </AppBar>
  );
}
