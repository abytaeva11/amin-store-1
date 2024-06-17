import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Flex, Grid, Text } from "@mantine/core";
import { ButtonGroup, CustomInputText, CustomModal, CustomSwitch } from "src/components";

type Props = {
    open: boolean;
    filter?: ComputerFilterType;
    handleClose: () => void;
    onReset: () => void;
    setSearchParams: Function;
};

export const ComputerFilter = ({
    open,
    filter,
    handleClose,
    onReset,
    setSearchParams,
}: Props) => {

    const form = useForm<ComputerFilterType>({
        initialValues: {
            model: "",
            price: "",
            active: true,
            brand: "",
            description: "",
            title: "",
            year: 2020,
        },
    });

    useEffect(() => {
        if (filter) {
            form.setValues({
                model: filter?.model,
                price: filter?.price,
                active: filter?.active,
                brand: filter?.brand,
                description: filter?.description,
                title: filter?.title,
                year: filter?.year,
            });
        }
    }, [filter]);

    const onClickReset = () => {
        form.reset();
        handleClose();
        onReset();
    };

    const handleSubmit = async (values: ComputerFilterType) => {
        form.reset();
        handleClose();
        for (let key in values) {
            if (values[key as keyof ComputerFilterType] === "") {
                delete values[key as keyof ComputerFilterType];
            }
        }
        setSearchParams(values);
    };

    return (
        <CustomModal
            title={"Поиск товара"}
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
                    <Grid.Col span={12}>
                        <CustomInputText
                            {...form.getInputProps("title")}
                            label="Название"
                            required
                            error={form.errors.title}
                            formData={form.values.title}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <CustomInputText
                            {...form.getInputProps("year")}
                            label="Год товара"
                            error={form.errors.year}
                            formData={form.values.year}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <CustomInputText
                            {...form.getInputProps("brand")}
                            label="Бренд"
                            error={form.errors.brand}
                            formData={form.values.brand}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <CustomInputText
                            {...form.getInputProps("model")}
                            label="Модель"
                            error={form.errors.model}
                            formData={form.values.model}
                        />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <CustomInputText
                            {...form.getInputProps("price")}
                            label="Цена товара"
                            error={form.errors.price}
                            formData={form.values.price}
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
