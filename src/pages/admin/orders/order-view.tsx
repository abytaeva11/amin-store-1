import { Container, Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";
import { OrdersDetails } from "src/modules/admin/orders";

type Params = {
    orderId: string;
};

export const OrdersView = () => {
    const { orderId } = useParams<Params>();
    const title = "Подробнее о заказе";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Container size="xl">
                <Center>
                    <Title c="white" fw="normal" mb="1rem">
                        {title}
                    </Title>
                </Center>
                {orderId && <OrdersDetails orderId={orderId} />}
            </Container>
        </CustomAppShell>
    );
};
