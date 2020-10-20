import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './SideBar.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function SideBar() {
    const classes = useStyles();
    const sideBarMenu = ['HOME', 'ABOUT', 'PORTFOLIO', 'SERVICES', 'BLOG', 'CONTACT']
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className="sidebar__heading">
                    <h1>Blossom</h1>
                </div>

                <Divider />
                <List>
                    {sideBarMenu.map((text, index) => (
                        <ListItem button key={text} className="sidebar__menuItem">
                            <ListItemText align="center" style={{ padding: 5 }} primary={text} />
                        </ListItem>
                    ))}
                </List>

                <List>
                    <ListItem>
                        <ListItemText primary="+91 8075460699" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="muhamedsufail777@gmail.com" />
                    </ListItem>
                </List>

                <List align='center' >
                    <FacebookIcon style={{ padding: 3 }} />
                    <InstagramIcon style={{ padding: 3 }} />
                    <TwitterIcon style={{ padding: 3 }} />
                </List>
            </Drawer>
        </div>
    );
}

export default SideBar;