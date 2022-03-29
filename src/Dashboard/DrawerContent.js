import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
}

export default DrawerContent;
