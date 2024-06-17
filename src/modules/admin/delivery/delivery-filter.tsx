import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Checkbox, Flex, Grid, Text } from "@mantine/core";
import { ButtonGroup, CustomInputText, CustomModal, CustomSelect, CustomSwitch } from "src/components";
import { nowDate } from "src/constants";
import { DateInput } from "@mantine/dates";
import { useGetAllProductsQuery } from "src/store";

type Props = {
    open: boolean;
    filter?: DeliveryFilterType;
    handleClose: () => void;
    onReset: () => void;
    setSearchParams: Function;
};

export const DeliveryFilter = ({
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
    const form = useForm<DeliveryFilterType>({
        initialValues: {
            active: true,
            city: "",
            fullName: "",
            phoneNumber: "",
            product: 1,
            publishedAt: nowDate
        },
    });

    useEffect(() => {
        if (filter) {
            form.setValues({
                active: true,
                city: "",
                fullName: "",
                phoneNumber: "",
                product: 0,
                publishedAt: nowDate
            });
        }
    }, [filter]);

    const onClickReset = () => {
        form.reset();
        handleClose();
        onReset();
    };

    const handleSubmit = async (values: DeliveryFilterType) => {
        form.reset();
        handleClose();
        for (let key in values) {
            if (values[key as keyof DeliveryFilterType] === "") {
                delete values[key as keyof DeliveryFilterType];
            }
        }
        setSearchParams(values);
    };

    return (
        <CustomModal
            title={"Поиск доставки"}
            open={open}
            handleClose={handleClose}
            button={false}
            size="xl"
        >
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Grid>
                    <Grid.Col span={12}>
                        <Flex align="center" gap={10}>
                            <CustomSwitch
                                color="black"
                                {...form.getInputProps("active")}
                                label=""
                                formData={form.values.active}
                            />
                            <Text c="black">Активный</Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={4} mt={-8}>
                        <DateInput
                            {...form.getInputProps("publishedAt")}
                            label="Дата"
                            error={form.errors.publishedAt}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("phoneNumber")}
                            label="Телефон номер заказчика"
                            error={form.errors.phoneNumber}
                            formData={form.values.phoneNumber}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("city")}
                            label="Город доставки"
                            error={form.errors.city}
                            formData={form.values.city}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("fullName")}
                            label="ФИО заказчика"
                            error={form.errors.fullName}
                            formData={form.values.fullName}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("city")}
                            label="Город"
                            error={form.errors.city}
                            formData={form.values.city}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomSelect
                            {...form.getInputProps("product")}
                            error={form.errors.product}
                            placeholder="Продукт"
                            data={productSelect || [""]}
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
