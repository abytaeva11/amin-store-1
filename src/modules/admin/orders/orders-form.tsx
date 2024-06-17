import {
    Container,
    Grid,
    Modal,
    Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useCreateOrderMutation, useGetAllProductsQuery, useUpdateOrderMutation, } from "src/store";
import { notify } from "src/utils";
import { CustomInputText, ButtonGroup, CustomSelect, CustomSwitch, CustomInputNumber } from "src/components";
import { nowDate } from "src/constants";
import { DateInput } from "@mantine/dates";

type Props = {
    order?: OrderType;
};

export const OrdersForm = ({ order }: Props) => {
    const navigate = useNavigate();

    const [createOrder] = useCreateOrderMutation();
    const [updateOrder] = useUpdateOrderMutation();
    const { data: products } = useGetAllProductsQuery({})

    const productSelect = products?.map(item => ({
        label: `${item.title}`,
        value: `${item.id}`
    }))
    const [opened, { close, open }] = useDisclosure(false);

    const form = useForm<OrderFormType>({
        initialValues: {
            city: order?.city || "",
            street: order?.street || "",
            houseOrComplex: order?.houseOrComplex || "",
            homeNumber: order?.homeNumber,
            phoneNumber: order?.phoneNumber || "",
            fullName: order?.fullName || "",
            willBeDeliveredAt: new Date(order?.willBeDeliveredAt || nowDate),
            product: order?.product.id,
            importance: order?.importance,
            active: order?.active || true,
            email: order?.email || ""
        },
    });
    const handleSubmit = async (values: OrderFormType) => {
        if (order) {
            try {
                await updateOrder({ id: order.id, body: values }).unwrap()
                notify(true, "Обновлено")
                navigate(-1);
            } catch {
                notify(false)
            }
        } else {
            try {
                await createOrder(values).unwrap()
                notify(true, "Сохранено")
                form.reset();
                navigate(-1);
            } catch {
                notify(false)
            }
        }
    };

    return (
        <Container size="xl">
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Paper bg="rgba(33, 41, 54, 0.7)" shadow="sm" p="xl">
                    <Grid justify="space-start">
                        <Grid.Col span={12}>
                            <CustomSwitch
                                {...form.getInputProps("active")}
                                label="Активный"
                                formData={form.values.active}
                            />
                        </Grid.Col>
                        <Grid.Col span={4} mt={-8}>
                            <DateInput
                                locale="ru"
                                c="white"
                                {...form.getInputProps("willBeDeliveredAt")}
                                label="Дата доставки"
                                error={form.errors.willBeDeliveredAt}
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>

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
                                label="Телефон номер заказчика"
                                error={form.errors.phoneNumber}
                                formData={form.values.phoneNumber}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputText
                                {...form.getInputProps("email")}
                                label="Эл почта заказчика"
                                error={form.errors.email}
                                formData={form.values.email}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomSelect
                                {...form.getInputProps("product")}
                                placeholder="Продукт"
                                data={productSelect || [""]}
                                error={form.errors.product}
                                formData={form.values.product}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputText
                                {...form.getInputProps("city")}
                                label="Город заказа"
                                error={form.errors.city}
                                formData={form.values.city}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputText
                                {...form.getInputProps("street")}
                                label="Улица"
                                error={form.errors.street}
                                formData={form.values.street}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputText
                                {...form.getInputProps("houseOrComplex")}
                                label="Жилой комплекс или номер дома"
                                error={form.errors.houseOrComplex}
                                formData={form.values.houseOrComplex}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputNumber
                                {...form.getInputProps("homeNumber")}
                                label="Номер квартиры или дома"
                                error={form.errors.homeNumber}
                                formData={form.values.homeNumber}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputNumber
                                {...form.getInputProps("importance")}
                                label="Важность доставки"
                                error={form.errors.importance}
                                formData={form.values.importance}
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <ButtonGroup
                                onClickCancel={() => navigate(-1)}
                                type="submit"
                            />
                        </Grid.Col>
                    </Grid>
                </Paper>
            </form>
            <Modal
                opened={opened}
                onClose={close}
                size={"60%"}
                title="Предпросмотр"
            >
            </Modal>
        </Container>
    );
};
