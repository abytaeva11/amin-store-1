import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Grid } from "@mantine/core";
import { ButtonGroup, CustomInputText, CustomModal, CustomSelect } from "src/components";
import { nowDate } from "src/constants";
import { DateInput } from "@mantine/dates";
import { useGetAllProductsQuery } from "src/store";

type Props = {
    open: boolean;
    filter?: OrderFilterType;
    handleClose: () => void;
    onReset: () => void;
    setSearchParams: Function;
};

export const OrdersFilter = ({
    open,
    filter,
    handleClose,
    onReset,
    setSearchParams,
}: Props) => {
    const { data: products } = useGetAllProductsQuery({})

    const productSelect = products?.map(item => ({
        label: `${item.title}`,
        value: `${item.id}`
    }))

    const form = useForm<OrderFilterType>({
        initialValues: {
            fullName: "",
            city: "",
            phoneNumber: "",
            product: 0,
            active: true,
        },
    });

    useEffect(() => {
        if (filter) {
            form.setValues({
                active: filter.active,
                fullName: filter.fullName || "",
                // createdAt: filter.createdAt || nowDate,
                city: filter.city || "",
                phoneNumber: filter.phoneNumber || "",
                product: filter.product,
                // willBeDeliveredAt: filter.willBeDeliveredAt || nowDate,
            });
        }
    }, [filter]);

    const onClickReset = () => {
        form.reset();
        handleClose();
        onReset();
    };

    const handleSubmit = async (values: OrderFilterType) => {
        form.reset();
        handleClose();
        for (let key in values) {
            if (!values[key as keyof OrderFilterType]) {
                delete values[key as keyof OrderFilterType];
            }
        }
        setSearchParams(values);
    };

    return (
        <CustomModal
            title={"Поиск заказа"}
            open={open}
            handleClose={handleClose}
            button={false}
            size="xl"
        >
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Grid>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("city")}
                            label="Город"
                            error={form.errors.city}
                            formData={form.values.city}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("fullName")}
                            label="Полное имя"
                            error={form.errors.fullName}
                            formData={form.values.fullName}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("phoneNumber")}
                            label="Номер телефона"
                            error={form.errors.phoneNumber}
                            formData={form.values.phoneNumber}
                        />
                    </Grid.Col>
                    {/* <Grid.Col span={4}>
                        <DateInput
                            {...form.getInputProps("willBeDeliveredAt")}
                            label="Дата доставки"
                            error={form.errors.willBeDeliveredAt}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <DateInput
                            {...form.getInputProps("createdAt")}
                            label="Дата создание"
                            error={form.errors.createdAt}
                        />
                    </Grid.Col> */}
                    <Grid.Col span={4}>
                        <CustomSelect
                            {...form.getInputProps("product")}
                            placeholder="Продукт"
                            data={productSelect || [""]}
                            error={form.errors.product}
                            formData={form.values.product}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <ButtonGroup
                            labelCancel="Отменить"
                            labelSubmit="Поиск"
                            onClickCancel={onClickReset}
                            type="submit"
                        />
                    </Grid.Col>
                </Grid>
            </form>
        </CustomModal>
    );
};
