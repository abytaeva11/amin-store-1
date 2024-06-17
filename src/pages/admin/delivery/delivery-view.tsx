import { Container, Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { DeliveryDetails } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

type Params = {
    deliveryId: string;
};

export const DeliveryView = () => {
    const { deliveryId } = useParams<Params>();
    const title = "Подробная информация о доставке";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Container size="xl">
                <Center>
                    <Title c="white" fw="normal" mb="1rem">
                        {title}
                    </Title>
                </Center>
                {deliveryId && <DeliveryDetails deliveryId={deliveryId} />}
            </Container>
        </CustomAppShell>
    );
};
