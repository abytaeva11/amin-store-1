import { Tooltip, UnstyledButton } from "@mantine/core";
import { createStyles } from "@mantine/styles";

type Props = {
    icon: any;
    label: string;
    onClick: () => void;
};

export const NavbarLink = ({ icon: Icon, label, onClick }: Props) => {
    const { classes } = useStyles({ label });

    return (
        <Tooltip label={label} position="right">
            <UnstyledButton
                onClick={onClick}
                className={classes.link}
            >
                <Icon color="white" className={classes.icon} size={22} />
            </UnstyledButton>
        </Tooltip>
    );
};

const useStyles = createStyles((theme, { label }: { label: string }) => ({
    link: {
        width: 55,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.white,
        borderRadius: 0,
        borderTop: label === "Выход" ? `1px solid ${theme.white}` : "none",
        borderBottom: `1px solid ${theme.white}`,
        "&:hover": {
            borderTop: label === "Выход" ? `1px solid ${theme.white}` : "none",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderBottom: `1px solid ${theme.white}`,
            color: "orange",
        },
    },
    icon: {
        color: "var(--primary)",
        transition: "300ms",
        "&:hover": {
            color: "orange"
        }
    }
}));
