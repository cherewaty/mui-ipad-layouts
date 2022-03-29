import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Deposits from "./Deposits";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
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

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const mdTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={mdTheme}>
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
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 2, marginBottom: 4 }}>
              <TextField label="Enter text" variant="standard" />
            </Paper>

            {/* Recent Deposits */}
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
                marginBottom: 4,
              }}
            >
              <Deposits />
            </Paper>

            <Paper sx={{ p: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula nibh quis leo dictum, nec feugiat ante vestibulum. Sed
                nec tempus elit. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Quisque quis orci
                rhoncus turpis porttitor pellentesque. Vivamus consequat
                efficitur blandit. Morbi egestas convallis elit vitae gravida.
                Etiam posuere lorem a feugiat lobortis. Maecenas at tellus sem.
                Vestibulum enim erat, pretium sit amet tempor vel, auctor sed
                ipsum. Ut vitae libero et turpis facilisis aliquet a quis nisi.
                Quisque sed elit auctor, consequat mi ac, maximus orci. Fusce a
                odio purus. Phasellus rhoncus lacus eu porta facilisis. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <p>
                Donec turpis ligula, euismod et tempus nec, ultrices et nibh.
                Nunc ut mi quam. Phasellus at diam leo. Duis laoreet nunc id
                luctus pulvinar. Etiam efficitur, justo vitae vulputate pretium,
                ipsum metus eleifend justo, eu dictum leo mauris non sapien.
                Aliquam a dignissim eros. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
                sem odio, bibendum eu sapien sed, mattis posuere augue. Etiam
                vestibulum mollis bibendum. Nulla nec tortor suscipit, maximus
                nibh et, blandit sem. Integer orci libero, sollicitudin eu justo
                sit amet, tincidunt tempor diam.
              </p>
              <p>
                Duis vitae posuere lacus, quis facilisis nisi. Nunc quis nulla
                non ligula congue hendrerit. Suspendisse accumsan tortor non
                metus condimentum, a ultrices dui porta. Aenean imperdiet
                volutpat augue, vitae suscipit velit gravida non. Nullam risus
                libero, finibus eget nunc in, molestie auctor augue. Etiam eu
                justo purus. Sed eget commodo metus, sodales volutpat magna.
                Aenean molestie, tortor nec elementum tempus, lorem arcu posuere
                arcu, eu volutpat nulla lacus vel odio. Vivamus fringilla erat
                nisi, consequat laoreet est eleifend in. Vivamus hendrerit
                blandit augue at finibus. Maecenas iaculis velit quis facilisis
                porta. Curabitur sit amet mi elit.
              </p>
              <p>
                Duis sit amet felis at tortor luctus ullamcorper. Proin nec
                justo eget augue feugiat convallis vulputate non ante. Quisque
                non mollis nulla. Fusce lacinia blandit lacus quis aliquam.
                Vestibulum ante justo, pretium nec metus ac, lobortis posuere
                nibh. Etiam consequat mattis justo, vitae consequat eros maximus
                interdum. Sed rutrum auctor est, sit amet semper libero
                pellentesque id. Nam facilisis diam ut augue pretium, sed
                euismod risus tempor. Aenean sagittis, odio ut feugiat
                fermentum, arcu lectus lobortis justo, vel semper magna erat ac
                mi. Vivamus eu dolor in ipsum lobortis bibendum. Curabitur massa
                est, mattis a tempor nec, commodo non dui. Curabitur sit amet
                posuere est. Nulla vel arcu mollis, mattis elit a, porta magna.
                Pellentesque erat nulla, viverra laoreet augue in, lacinia
                consectetur turpis.
              </p>
              <p>
                Sed hendrerit felis quam, sed hendrerit erat ullamcorper vel.
                Vestibulum nibh metus, gravida id sapien ut, placerat luctus
                lacus. Fusce rhoncus felis id justo tincidunt, ac condimentum
                metus hendrerit. Cras vitae malesuada nunc. Curabitur a
                pellentesque orci, et auctor nulla. Cras vel turpis velit. Duis
                id ligula at libero accumsan porta in ut dui. Vivamus vitae
                lacus congue, ornare dui eu, luctus massa. Sed erat massa,
                elementum id lacinia quis, tincidunt ac justo. In facilisis sed
                odio sed pulvinar. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Sed a tristique mi, quis ullamcorper quam.
                Cras tempus odio turpis, nec euismod urna vehicula viverra.
                Quisque id ante augue. In congue, urna placerat suscipit
                pulvinar, nunc ipsum vestibulum ante, quis dapibus ex sapien ut
                massa.
              </p>
            </Paper>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
