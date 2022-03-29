import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import ArticleIcon from "@mui/icons-material/Article";
import WebIcon from "@mui/icons-material/Web";

function DrawerContent({ open }) {
  return (
    <Box
      component="div"
      sx={{
        paddingX: {
          xs: 1,
          sm: open ? 1 : 0,
        },
      }}
    >
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{
          fontWeight: "bold",
          marginLeft: 2,
          display: {
            xs: "block",
            sm: open ? "block" : "none",
          },
        }}
      >
        App title
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <BrushIcon />
          </ListItemIcon>
          <ListItemText>Action 1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ColorLensIcon />
          </ListItemIcon>
          <ListItemText>Action 2</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FormatPaintIcon />
          </ListItemIcon>
          <ListItemText>Action 3</ListItemText>
        </ListItem>
      </List>
      <Box
        component="div"
        sx={{
          display: {
            sm: open ? "block" : "none",
          },
        }}
      >
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText>Page 1</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
            <ListItemText>Page 2</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default DrawerContent;
