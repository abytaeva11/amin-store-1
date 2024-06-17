import {
    Container,
    Grid,
    Modal,
    Paper,
    Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { notify } from "src/utils";
import { CustomInputText, ButtonGroup, CustomSelect, CustomSwitch } from "src/components";
import { useCreateDeliveryMutation, useGetAllDeliveryQuery, useGetAllOrdersQuery, useUpdateDeliveryMutation } from "src/store";

type Props = {
    delivery?: DeliveryType;
};

export const DeliveryForm = ({ delivery }: Props) => {
    const navigate = useNavigate();
    const { data: orders } = useGetAllOrdersQuery({})
    const { data: deliveries } = useGetAllDeliveryQuery({})
    const [createDelivery] = useCreateDeliveryMutation();
    const [updateDelivery] = useUpdateDeliveryMutation();

    const filtered = orders?.filter(order => {
        return !deliveries?.some(delivery => delivery.order.id === order.id);
    });

    const ordersSelect = filtered?.map(item => ({
        value: `${item.id}`,
        label: `${item.fullName}`
    }))

    const [opened, { close, open }] = useDisclosure(false);

    const form = useForm<DeliveryFormType>({
        initialValues: {
            active: delivery?.active || true,
            order: delivery?.order.id || 1,
            status: delivery?.status || ""
        },
    });

    const handleSubmit = async (values: DeliveryFormType) => {
        if (delivery) {
            try {
                await updateDelivery({ id: delivery.id, body: values }).unwrap()
                notify(true, "Обновлено")
                form.reset();
                navigate(-1);
            } catch {
                notify(false)
            }
        } else {
            try {
                await createDelivery(values).unwrap()
                notify(true, "Сохранен")
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
                                label="Активный"
                                formData={form.values.active}
                                {...form.getInputProps("active")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomInputText
                                {...form.getInputProps("status")}
                                label="Статус доставки"
                                error={form.errors.status}
                                formData={form.values.status}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <CustomSelect
                                placeholder="Выбрать из заказов"
                                formData={form.values.order}
                                {...form.getInputProps("order")}
                                data={ordersSelect || [""]}
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
