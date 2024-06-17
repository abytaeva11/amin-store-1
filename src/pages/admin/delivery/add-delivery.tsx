import { Center, Title } from "@mantine/core";
import { DeliveryForm } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

export const AddDelivery = () => {
    const title = "Добавить доставку";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Center>
                <Title fw="normal" c="white" mb="1rem">
                    {title}
                </Title>
            </Center>
            <DeliveryForm />
        </CustomAppShell>
    );
};
