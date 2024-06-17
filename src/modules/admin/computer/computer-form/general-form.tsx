import {
    Flex,
    Grid,
    Text,
    Title,
    UnstyledButton,
} from "@mantine/core";
import { CustomDropzone, CustomInputText, CustomInputNumber, CustomSwitch, TextEditor } from "src/components";
import { MIME_TYPES } from "@mantine/dropzone";
import { UseFormReturnType } from "@mantine/form";
import { GoArrowRight } from "react-icons/go";

interface Props {
    form: UseFormReturnType<ComputerFormType, (values: ComputerFormType) => ComputerFormType>;
    onClick: () => void
}

export const GeneralForm = ({ form, onClick }: Props) => {
    return (
        <Grid>
            <Grid.Col span={12}>
                <Flex justify="space-between">
                    <Title fz={24} fw="normal" c="white" ta="center">Первая часть</Title>
                    <UnstyledButton onClick={onClick} c="white">
                        <Flex gap={10} align="center">
                            <Text fz={18} fw="normal">Перейти в следующию часть</Text>
                            <GoArrowRight size={20} />
                        </Flex>
                    </UnstyledButton>
                </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
                <Flex gap={20}>
                    <CustomSwitch
                        {...form.getInputProps("active")}
                        label={"Активный"}
                        formData={form.values.active}
                    />
                    <CustomSwitch
                        {...form.getInputProps("is_game")}
                        label={"Игровой комьютер?"}
                        formData={form.values.is_game}
                    />
                </Flex>
            </Grid.Col>
            <Grid.Col mb={20} span={8}>
                <CustomInputText
                    {...form.getInputProps("title")}
                    label={"Название"}
                    required
                    error={form.errors.title}
                    formData={form.values.title}
                />
                <CustomInputText
                    {...form.getInputProps("price")}
                    label={"Цена товара"}
                    required
                    error={form.errors.price}
                    formData={form.values.price}
                />
                <Grid gutter={10}>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("brand")}
                            label={"Бренд"}
                            required
                            error={form.errors.brand}
                            formData={form.values.brand}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("model")}
                            label={"Модель"}
                            required
                            error={form.errors.model}
                            formData={form.values.model}
                        />

                    </Grid.Col>
                    <Grid.Col span={2}>
                        <CustomInputNumber
                            {...form.getInputProps("year")}
                            label={"Год"}
                            required
                            error={form.errors.year}
                            formData={form.values.year}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputText
                            {...form.getInputProps("powerScale")}
                            label={"Мощность по 4 бальной школе"}
                            required
                            max={4}
                            min={1}
                            error={form.errors.powerScale}
                            formData={form.values.powerScale}
                        />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <CustomInputNumber
                            {...form.getInputProps("sale")}
                            label={"Акция"}
                            error={form.errors.sale}
                            formData={form.values.sale}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CustomInputNumber
                            required
                            {...form.getInputProps("importance")}
                            label={"Важность по 20 бальной шкале"}
                            max={20}
                            min={1}
                            error={form.errors.importance}
                            formData={form.values.importance}
                        />
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomDropzone
                    label={"Фотография"}
                    error={form.errors.image}
                    {...form.getInputProps("image")}
                    accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.svg, MIME_TYPES.webp]}
                />
            </Grid.Col>
            <Grid.Col bg="rgba(255,255,255,1)" style={{ borderRadius: "10px" }} span={12}>
                <TextEditor
                    label="Описание товара"
                    required
                    error={form.errors.description}
                    formData={form.values.description}
                    {...form.getInputProps("description")}
                />
            </Grid.Col>
        </Grid>
    );
};
