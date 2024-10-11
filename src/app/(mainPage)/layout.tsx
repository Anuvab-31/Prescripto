"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Header from "@/layouts/MainPage/Header";
import Nav from "@/layouts/MainPage/Nav";
import { Configs } from "@/theme/ThemeConfig";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
    width: "100vw",
});

const Main = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    overflow: "hidden",
    minHeight: "100%",
    width: "100%",
    backgroundColor: '#FFFFFF',
    paddingTop: Configs.APP_BAR_MOBILE + 16,
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        paddingTop: Configs.APP_BAR_DESKTOP,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

// ----------------------------------------------------------------------

const MainPageLayout = ({ children }: any) => {
    const [open, setOpen] = useState( true);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);


    return (
        <StyledRoot>
            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            {/* <Nav open={open} handleDrawerClose={handleDrawerClose} /> */}
            <Main>
                {children}
            </Main>
        </StyledRoot>
    );
};

export default MainPageLayout;
