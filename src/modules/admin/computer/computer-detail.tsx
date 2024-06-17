import { Image, Paper } from "@mantine/core";
import { CustomLoader, TextInfo, } from "src/components";
import { useGetComputerQuery } from "src/store";

type Props = {
    computerId: string;
};

export const ComputerDetails = ({ computerId }: Props) => {

    const { data: productData, isLoading } = useGetComputerQuery(computerId, {
        refetchOnMountOrArgChange: true,
    });

    const data = [
        {
            label: "Название",
            value: productData?.title,
        },
        {
            label: "Бренд",
            value: productData?.brand,
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
            label: "Категория",
            value: productData?.year,
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
            value: <Image src={`data:image/pnt;base64, ${productData?.image}`} />,
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