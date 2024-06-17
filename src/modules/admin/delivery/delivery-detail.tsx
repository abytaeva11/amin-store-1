import { Paper } from "@mantine/core";
import { CustomLoader, TextInfo, } from "src/components";
import { useGetDeliveryQuery } from "src/store";

type Props = {
    deliveryId: string;
};

export const DeliveryDetails = ({ deliveryId }: Props) => {

    const { data: deliveryData, isLoading } = useGetDeliveryQuery(deliveryId, {
        refetchOnMountOrArgChange: true,
    });

    const data = [
        {
            label: "Названия товара",
            value: deliveryData?.order.product.title,
        },
        {
            label: "Категория товара",
            value: deliveryData?.order.product.category,
        },
        {
            label: "Модель",
            value: deliveryData?.order.product.model,
        },
        {
            label: "Цена",
            value: deliveryData?.order.product.price,
        },
        {
            label: "ФИО заказчика",
            value: deliveryData?.order.fullName,
        },
        {
            label: "Телефон номер заказчика",
            value: deliveryData?.order.phoneNumber,
        },
        {
            label: "Город доставки",
            value: deliveryData?.order.city,
        },
        {
            label: "Улица доставки",
            value: deliveryData?.order.street,
        },
        {
            label: "Дом / Жилой комплекс доставки",
            value: deliveryData?.order.houseOrComplex,
        },
        {
            label: "Номер дома доставки",
            value: deliveryData?.order.homeNumber,
        },
    ];

    return isLoading ? (
        <CustomLoader />
    ) : (
        <Paper shadow="sm" p="xl">
            <Paper shadow="sm" p="xl">
                <TextInfo
                    data={data}
                    display={true}
                    spanFirst={4}
                    spanTwo={8}
                />
            </Paper>
        </Paper>
    );
};
