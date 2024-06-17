import { Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { DeliveryForm, ProductForm } from "src/modules";
import { useGetDeliveryQuery } from "src/store";
import { CustomAppShell, CustomLoader } from "src/components";
import { usePageTitle } from "src/hooks";

type Params = {
    deliveryId: string;
};

export const EditDelivery = () => {
    const title = "Редактировать доставку";
    usePageTitle(title);

    const { deliveryId } = useParams<Params>();
    const { data, isLoading } = useGetDeliveryQuery(deliveryId as unknown as string, {
        refetchOnMountOrArgChange: !!deliveryId,
    });

    return (
        <CustomAppShell>
            {deliveryId}
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
                        <DeliveryForm delivery={data} />
                    </>
                )
            )}
        </CustomAppShell>
    );
};
