import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerContent from "./DrawerContent";

const XSMALL_DRAWER_WIDTH = 280;
const SMALL_UP_DRAWER_WIDTH_COLLAPSED = 56;
const SMALL_UP_DRAWER_WIDTH_OPEN = 320;

const SmallUpDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    [theme.breakpoints.up("xs")]: {
      border: 0,
      width: 0,
    },
    [theme.breakpoints.up("sm")]: {
      borderRightColor: theme.palette.divider,
      borderRightStyle: "solid",
      borderRightWidth: "1px",
      width: SMALL_UP_DRAWER_WIDTH_OPEN,
    },
    whiteSpace: "nowrap",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up("sm")]: {
        borderRightColor: theme.palette.divider,
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        width: SMALL_UP_DRAWER_WIDTH_COLLAPSED,
      },
    }),
  },
}));

function DashboardContent() {
  const [xSmallDrawerOpen, setXSmallDrawerOpen] = useState(false);
  const [smallUpDrawerOpen, setSmallUpDrawerOpen] = useState(true);

  const toggleXSmallDrawer = () => {
    setXSmallDrawerOpen(!xSmallDrawerOpen);
  };

  const toggleSmallUpDrawer = () => {
    setSmallUpDrawerOpen(!smallUpDrawerOpen);
  };

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
      <Box
        component="nav"
        sx={{
          width: {
            sm: smallUpDrawerOpen
              ? SMALL_UP_DRAWER_WIDTH_OPEN
              : SMALL_UP_DRAWER_WIDTH_COLLAPSED,
          },
          flexShrink: { sm: 0 },
        }}
        aria-label="menu"
      >
        <Drawer
          variant="temporary"
          open={xSmallDrawerOpen}
          onClose={toggleXSmallDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: XSMALL_DRAWER_WIDTH,
            },
          }}
        >
          <Toolbar />
          <DrawerContent />
        </Drawer>
        <SmallUpDrawer variant="permanent" open={smallUpDrawerOpen}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              px: [1],
              marginBottom: 1,
            }}
          >
            <IconButton onClick={toggleSmallUpDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <DrawerContent open={smallUpDrawerOpen} />
        </SmallUpDrawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar
          elevation={0}
          position="sticky"
          sx={{
            backgroundColor: "background.default",
            borderBottomColor: "divider",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            color: "text.primary",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleXSmallDrawer}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Page title
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="div" sx={{ overflowY: "scroll" }}>
          <Container>
            <Box component="div" sx={{ marginBottom: 4 }}>
              <TextField label="Enter text" variant="standard" />
            </Box>
            <Box>
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
            </Box>
          </Container>
        </Box>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Container>
            <Stack direction="row-reverse" spacing={2}>
              <Button variant="contained">Save</Button>
              <Button variant="outlined">Cancel</Button>
            </Stack>
          </Container>
        </Toolbar>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
