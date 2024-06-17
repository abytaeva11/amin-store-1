import { useState } from "react";
import { Box, Image, Paper, Text } from "@mantine/core";
import {
    CustomLoader,
    CustomModal,
    TextInfo,
} from "src/components";
import { useGetProductQuery } from "src/store";
import { createStyles } from "@mantine/styles";

type Props = {
    productId: string;
};

export const ProductDetails = ({ productId }: Props) => {
    const { classes } = useStyles();
    const [isOpened, setIsOpened] = useState(false);

    const { data: productData, isLoading } = useGetProductQuery(productId, {
        refetchOnMountOrArgChange: true,
    });

    const data = [

        {
            label: "Категория",
            value: productData?.category,
        },
        {
            label: "Модель",
            value: productData?.model,
        },
        {
            label: "Цена",
            value: productData?.price,
        },
        {
            label: "Фото",
            value: <Image h={200} w="auto" src={`data:image/png;base64,${productData?.img}`} />,
        },
    ];

    return isLoading ? (
        <CustomLoader />
    ) : (
        <Paper shadow="sm" p="xl">
            <TextInfo
                data={data}
                display={true}
                spanFirst={4}
                spanTwo={8}
            />
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
