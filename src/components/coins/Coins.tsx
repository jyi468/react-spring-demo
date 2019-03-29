import React from 'react';
import classNames from 'classnames';
import {Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import createStyles from "@material-ui/core/styles/createStyles";
import {CoinData} from "../../types/types";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {Card, CardActionArea, CardContent, CardHeader, Grid, IconButton, Typography} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MinuteDataContainer from "../minuteData/MinuteDataContainer";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 10 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 10 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginTop: '75px'
    },
});

interface CoinProps extends WithStyles<typeof styles> {
    theme: any;
    fetchMinuteData: (name: string) => {};
    handleDrawerOpen: () => {};
    handleDrawerClose: () => {};
    coins: CoinData[]
    isOpen: boolean;
}

class Coins extends React.Component<CoinProps> {
    render() {
        const { classes, theme, fetchMinuteData, handleDrawerOpen, handleDrawerClose, coins, isOpen } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
/*                    onMouseEnter={handleDrawerOpen}
                    onMouseLeave={handleDrawerClose}*/
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: isOpen,
                            [classes.drawerClose]: !isOpen,
                        }),
                    }}
                    open={isOpen}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {coins.map((coin: CoinData) => (
                            <ListItem button key={coin.id} onClick={() => fetchMinuteData(coin.name)}>
                                <ListItemIcon>
                                    <Avatar>{coin.symbol}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={coin.fullName} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <div className={classes.content}>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader>Coin</CardHeader>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography>$4,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Card>
                                <CardHeader>Grid</CardHeader>
                                <CardActionArea>
                                    <CardContent>
                                        <MinuteDataContainer/>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Coins);