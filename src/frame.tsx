import React from "react";
import { AppShell } from "@mantine/core";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

const Frame = () => {
    return (
        <AppShell>
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main mt={60}>
                <Outlet />
            </AppShell.Main>
            <Footer />
        </AppShell>
    )
};
export default Frame;