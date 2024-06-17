import { Link } from "react-router-dom";
import { Flex, Menu, Text } from "@mantine/core";
import "./styles.scss";

type Props = {
    item: MenuItemType;
};

export const MenuItem = ({ item }: Props) => {
    if (item.to) {
        return (
            <Menu.Item
                className={"item"}
                fz={16}
                fw={400}
                c="primary"
                to={item.to}
                state={item.roadmapId}
                component={Link}
            >
                <Flex align="center" gap={10}>
                    <item.icon size={14} />
                    <Text c="primary">{item.title}</Text>
                </Flex>
            </Menu.Item>
        );
    }
    return (
        <Menu.Item
            className={'item'}
            fz={16}
            fw={400}
            c="primary"
            onClick={item.onClick}
        >
            <Flex ml={-5} align="center" gap={10}>
                <item.icon size={14} />
                <Text c="primary">{item.title}</Text>
            </Flex>
        </Menu.Item>
    );
};
