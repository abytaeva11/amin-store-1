import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "src/components";
import { BackgroundImage, Box } from "@mantine/core";

export const Layout = () => {
    const { pathname } = useLocation();
    return (
        <BackgroundImage
            src="/assets/bg.webp"
            style={{
                display: "flex", flexDirection: "column", height: "100%",
                backgroundSize: "100%",
                backgroundRepeat: "repeat"
            }}>
            {pathname !== "/login" && !pathname.startsWith("/admin") && <Header />}
            <Box>
                <Outlet />
            </Box>
            {pathname !== "/login" && !pathname.startsWith("/admin") && <Footer />}
        </BackgroundImage>
    );
};
