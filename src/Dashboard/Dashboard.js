import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const drawerWidth = 240;
const miniDrawerWidth = 60;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: `${miniDrawerWidth}px`,
    width: `calc(100% - ${miniDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  ...(open && {
    [theme.breakpoints.up("sm")]: {
      marginLeft: `${drawerWidth}px`,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SmallUpDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent(props) {
  const [xSmallBreakpointDrawerOpen, setXSmallBreakpointDrawerOpen] =
    React.useState(false);
  const [smallBreakpointUpDrawerOpen, setSmallBreakpointUpDrawerOpen] =
    React.useState(true);

  const handleDrawerToggle = () => {
    setXSmallBreakpointDrawerOpen(!xSmallBreakpointDrawerOpen);
  };

  const toggleDrawer = () => {
    setSmallBreakpointUpDrawerOpen(!smallBreakpointUpDrawerOpen);
  };

  const drawer = (
    <Box component="div" sx={{ paddingX: 1 }}>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ fontWeight: "bold", marginLeft: 2 }}
      >
        App title
      </Typography>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={smallBreakpointUpDrawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Page title
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: {
            sm: smallBreakpointUpDrawerOpen ? drawerWidth : miniDrawerWidth,
          },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={xSmallBreakpointDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open={smallBreakpointUpDrawerOpen}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: smallBreakpointUpDrawerOpen
                ? drawerWidth
                : miniDrawerWidth,
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
          width: {
            sm: smallBreakpointUpDrawerOpen
              ? `calc(100% - ${miniDrawerWidth}px)`
              : `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Toolbar />
        <Paper sx={{ p: 2, marginBottom: 4 }} variant="outlined">
          <TextField label="Enter text" variant="standard" />
        </Paper>
        <Paper sx={{ p: 2 }} variant="outlined">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula nibh quis leo dictum, nec feugiat ante vestibulum. Sed nec
            tempus elit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Quisque quis orci rhoncus turpis
            porttitor pellentesque. Vivamus consequat efficitur blandit. Morbi
            egestas convallis elit vitae gravida. Etiam posuere lorem a feugiat
            lobortis. Maecenas at tellus sem. Vestibulum enim erat, pretium sit
            amet tempor vel, auctor sed ipsum. Ut vitae libero et turpis
            facilisis aliquet a quis nisi. Quisque sed elit auctor, consequat mi
            ac, maximus orci. Fusce a odio purus. Phasellus rhoncus lacus eu
            porta facilisis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec turpis ligula, euismod et tempus nec, ultrices et nibh. Nunc
            ut mi quam. Phasellus at diam leo. Duis laoreet nunc id luctus
            pulvinar. Etiam efficitur, justo vitae vulputate pretium, ipsum
            metus eleifend justo, eu dictum leo mauris non sapien. Aliquam a
            dignissim eros. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vestibulum sem odio,
            bibendum eu sapien sed, mattis posuere augue. Etiam vestibulum
            mollis bibendum. Nulla nec tortor suscipit, maximus nibh et, blandit
            sem. Integer orci libero, sollicitudin eu justo sit amet, tincidunt
            tempor diam.
          </p>
          <p>
            Duis vitae posuere lacus, quis facilisis nisi. Nunc quis nulla non
            ligula congue hendrerit. Suspendisse accumsan tortor non metus
            condimentum, a ultrices dui porta. Aenean imperdiet volutpat augue,
            vitae suscipit velit gravida non. Nullam risus libero, finibus eget
            nunc in, molestie auctor augue. Etiam eu justo purus. Sed eget
            commodo metus, sodales volutpat magna. Aenean molestie, tortor nec
            elementum tempus, lorem arcu posuere arcu, eu volutpat nulla lacus
            vel odio. Vivamus fringilla erat nisi, consequat laoreet est
            eleifend in. Vivamus hendrerit blandit augue at finibus. Maecenas
            iaculis velit quis facilisis porta. Curabitur sit amet mi elit.
          </p>
          <p>
            Duis sit amet felis at tortor luctus ullamcorper. Proin nec justo
            eget augue feugiat convallis vulputate non ante. Quisque non mollis
            nulla. Fusce lacinia blandit lacus quis aliquam. Vestibulum ante
            justo, pretium nec metus ac, lobortis posuere nibh. Etiam consequat
            mattis justo, vitae consequat eros maximus interdum. Sed rutrum
            auctor est, sit amet semper libero pellentesque id. Nam facilisis
            diam ut augue pretium, sed euismod risus tempor. Aenean sagittis,
            odio ut feugiat fermentum, arcu lectus lobortis justo, vel semper
            magna erat ac mi. Vivamus eu dolor in ipsum lobortis bibendum.
            Curabitur massa est, mattis a tempor nec, commodo non dui. Curabitur
            sit amet posuere est. Nulla vel arcu mollis, mattis elit a, porta
            magna. Pellentesque erat nulla, viverra laoreet augue in, lacinia
            consectetur turpis.
          </p>
          <p>
            Sed hendrerit felis quam, sed hendrerit erat ullamcorper vel.
            Vestibulum nibh metus, gravida id sapien ut, placerat luctus lacus.
            Fusce rhoncus felis id justo tincidunt, ac condimentum metus
            hendrerit. Cras vitae malesuada nunc. Curabitur a pellentesque orci,
            et auctor nulla. Cras vel turpis velit. Duis id ligula at libero
            accumsan porta in ut dui. Vivamus vitae lacus congue, ornare dui eu,
            luctus massa. Sed erat massa, elementum id lacinia quis, tincidunt
            ac justo. In facilisis sed odio sed pulvinar. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Sed a tristique mi, quis
            ullamcorper quam. Cras tempus odio turpis, nec euismod urna vehicula
            viverra. Quisque id ante augue. In congue, urna placerat suscipit
            pulvinar, nunc ipsum vestibulum ante, quis dapibus ex sapien ut
            massa.
          </p>
        </Paper>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
