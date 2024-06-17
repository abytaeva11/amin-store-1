import { Box, Paper, Text } from "@mantine/core";
import {
    CustomLoader,
    TextInfo,
} from "src/components";
import { useGetOrderQuery, useGetProductQuery } from "src/store";
import { createStyles } from "@mantine/styles";

type Props = {
    orderId: string;
};

export const OrdersDetails = ({ orderId }: Props) => {
    const { classes } = useStyles();

    const { data: orderData, isLoading } = useGetOrderQuery(orderId, {
        refetchOnMountOrArgChange: true,
    });
    const data = [
        {
            label: "Категория товара",
            value: orderData?.product.title,
        },
        {
            label: "Модель",
            value: orderData?.product.model,
        },
        {
            label: "Цена",
            value: orderData?.product.price,
        },
        {
            label: "ФИО заказчика",
            value: orderData?.fullName,
        },
        {
            label: "Эл. почта заказчика",
            value: orderData?.email,
        },
        {
            label: "Номер телефон заказчика",
            value: orderData?.phoneNumber,
        },
        {
            label: "Город доставки",
            value: orderData?.city,
        },
        {
            label: "Улица доставки",
            value: orderData?.street,
        },
        {
            label: "Дом / Жилой комплекс доставки",
            value: orderData?.houseOrComplex,
        },
        {
            label: "Номер дома доставки",
            value: orderData?.homeNumber,
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
                <Box mt={30}>
                    {/* <Box className={classes.content}>
                        <Text>{orderData?.product.category}</Text>
                        <Text>{orderData?.product.title}</Text>
                        <Text>{orderData?.product.price}</Text>
                    </Box> */}
                </Box>
            </Paper>
        </Paper>
    );
};

const useStyles = createStyles({
    content: {
        "& img": {
            maxWidth: "70rem",
        },
    },
});
