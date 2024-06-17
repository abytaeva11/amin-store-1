import { Center, Title } from "@mantine/core";
import { OrdersForm } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

export const AddOrder = () => {
    const title = "Добавить заказ";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Center>
                <Title fw="normal" c="white" mb="1rem">
                    {title}
                </Title>
            </Center>
            <OrdersForm />
        </CustomAppShell>
    );
};
