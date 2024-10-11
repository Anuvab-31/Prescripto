
import React from 'react';
import { Drawer as MuiDrawer, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, DrawerProps, Box, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { CSSObject, useTheme } from '@mui/material/styles';
import { Configs } from '@/theme/ThemeConfig';

interface NavProps {
    open: boolean;
    handleDrawerClose?: () => void;
    handleDrawerOpen?: () => void; // Add this prop to handle opening the drawer
}

const openedMixin = (theme: any): CSSObject => ({
    width: Configs.drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: any): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DesktopDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerProps>(({ theme, open }) => ({
    width: Configs.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const MobileDrawer = styled(MuiDrawer)(({ theme }) => ({
    width: Configs.drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: Configs.drawerWidth,
        // height: '100vh', // Full height
    },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Nav: React.FC<NavProps> = ({ open, handleDrawerClose }) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Determine if it's mobile view

    const drawer = (
        <Box>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {!open ? <ChevronRight /> : <ChevronLeft />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All Mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return !isMobile ? (
        <DesktopDrawer
            variant={"permanent"}
            open={open}
            onClose={handleDrawerClose}
        >
            {drawer}
        </DesktopDrawer>
    ) : (
        <MobileDrawer
            variant={"temporary"}
            open={open}
            onClose={handleDrawerClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawer}
        </MobileDrawer>
    );
}

export default Nav
