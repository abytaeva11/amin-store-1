import { LoadingOverlay } from "@mantine/core";

export const CustomLoader = () => {
    return (
        <LoadingOverlay
            loaderProps={{ size: "md", color: "blue", variant: "bars" }}
            style={{ opacity: "0.2", color: "#c5c5c5" }}
            visible
        />
    );
};
