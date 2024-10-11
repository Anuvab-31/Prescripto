"use client";

import React, { useContext } from "react";
import { AppBar as MuiAppBar, Toolbar, styled, Button, Box, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { assets } from '../../assets/assets_frontend/assets.js';
import { MyContext } from "@/contexts/UserContextProvider";


interface HeaderProps {
    open: boolean;
    handleDrawerOpen?: () => void;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })
    <HeaderProps>(({ theme, open }) => ({
        paddingLeft: !open ? '64px' : 0,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderBottom: "1px solid #ADADAD",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            // width: `calc(100% - ${Configs.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        // Responsive styles
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            paddingLeft: 0, // Adjust padding for mobile view if needed
        },
    }));

const menuItems = [
    { id: 1, title: "HOME", href: "/" },
    { id: 2, title: "All Doctors", href: "/doctor" },
    { id: 3, title: "ABOUT", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
]


const Header = ({ open, handleDrawerOpen }: HeaderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();
    const { userData } = useContext(MyContext);

    return (
        <AppBar position="fixed" open={open} elevation={0}>
            <Toolbar>
                <Image src={assets.logo} height={30} width={150} alt="" />

                <Box flexGrow={1} />

                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: 3 }}>
                    {
                        menuItems?.map((each: any, i: number) => (
                            <Typography
                                key={i}
                                variant="subtitle2"
                                fontWeight={500}
                                color={pathname === each?.href ? theme.palette.primary.main : "#1F2937"}
                                sx={{ cursor: "pointer", textTransform: "uppercase" }}
                                onClick={() => router.push(each?.href)}>
                                {each?.title}
                            </Typography>
                        ))
                    }
                </Box>

                <Box flexGrow={1} />

                <Button
                    variant="contained"
                    startIcon={userData?.avatar ? <Avatar src={userData?.avatar} sx={{ height: 30, width: 30 }} /> : ""}
                >
                    {userData?.name ?? "Create Account"}
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header