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
import { withRouter } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden'
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

function SideBar(props) {
    const classes = useStyles();
    const sideBarMenu = [
        {
            text: 'HOME',
            onClick: () => props.history.push('/')
        },
        {
            text: 'ABOUT',
            onClick: () => props.history.push('/about')
        },
        {
            text: 'PORTFOLIO',
            onClick: () => props.history.push('/portfolio')
        },
        {
            text: 'SERVICES',
            onClick: () => props.history.push('/services')
        },
        {
            text: 'BLOG',
            onClick: () => props.history.push('/blog')
        },
        {
            text: 'CONTACT',
            onClick: () => props.history.push('/contact')
        }
    ]
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
                    {sideBarMenu.map((item, index) => (
                        <ListItem button key={item.text} className="sidebar__menuItem">
                            <ListItemText align="center" style={{ padding: 5 }} onClick={item.onClick} primary={item.text} />
                        </ListItem>
                    ))}
                </List>

                <List >
                    <ListItem >
                        <ListItemText style={{fontSize:'0.7em'}} secondary="+91 8075460699" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="muhamedsufail@gmail.com" />
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

export default withRouter(SideBar);