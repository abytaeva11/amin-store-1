import { Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { OrdersForm } from "src/modules";
import { useGetOrderQuery } from "src/store";
import { CustomAppShell, CustomLoader } from "src/components";
import { usePageTitle } from "src/hooks";

type Params = {
    orderId: string;
};

export const EditOrders = () => {
    const title = "Редактировать заказ";
    usePageTitle(title);

    const { orderId } = useParams<Params>();
    const { data, isLoading } = useGetOrderQuery(orderId as unknown as string, {
        refetchOnMountOrArgChange: !!orderId,
    });

    return (
        <CustomAppShell>
            {isLoading ? (
                <CustomLoader />
            ) : (
                data && (
                    <>
                        <Center>
                            <Title c="white" fw="normal" mb="1rem">
                                {title}
                            </Title>
                        </Center>
                        <OrdersForm order={data} />
                    </>
                )
            )}
        </CustomAppShell>
    );
};
