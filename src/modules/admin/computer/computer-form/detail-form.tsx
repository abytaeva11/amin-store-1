import { Flex, Grid, Text, Title, UnstyledButton } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, CustomInputText, CustomSelect } from "src/components";
import { FiArrowLeft } from "react-icons/fi";
import { useGetAllProductsQuery } from "src/store";
import { selectGenerator } from "src/utils";

interface Props {
    form: UseFormReturnType<ComputerFormType, (values: ComputerFormType) => ComputerFormType>;
    onClick: () => void
}

export const DetailForm = ({ form, onClick }: Props) => {
    const navigate = useNavigate();
    const { data } = useGetAllProductsQuery({})
    const { cpuId, coolerId, monitorId, motherboardId, ramId,
        videoCardId, hddId, disk1Id, disk2Id, dvdId, soundCardId,
        mouseId, keyboardId, headsetId, bodyId } = selectGenerator(data)

    return (
        <Grid justify="start">
            <Grid.Col span={12}>
                <Flex justify="space-between">
                    <UnstyledButton c="white" onClick={onClick}>
                        <Flex align="center" gap={10}>
                            <FiArrowLeft size={20} />
                            <Text fz={18} fw="normal">Перейти в предыдущую часть</Text>
                        </Flex>
                    </UnstyledButton>
                    <Title fz={24} fw="normal" c="white" ta="center">Вторая часть</Title>
                </Flex>
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomInputText
                    {...form.getInputProps("wifi")}
                    label={"WiFi"}
                    required
                    error={form.errors.wifi}
                    formData={form.values.wifi}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomInputText
                    {...form.getInputProps("powerUnit")}
                    label={"Power Unit"}
                    required
                    error={form.errors.powerUnit}
                    formData={form.values.powerUnit}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomInputText
                    {...form.getInputProps("operatingSystem")}
                    label={"Операционная система"}
                    required
                    error={form.errors.operatingSystem}
                    formData={form.values.operatingSystem}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("body")}
                    placeholder="Корпус"
                    data={bodyId || [""]}
                    required
                    error={form.errors.body}
                    formData={form.values.body}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("cpu")}
                    placeholder="Процессор"
                    data={cpuId || [""]}
                    required
                    error={form.errors.cpu}
                    formData={form.values.cpu}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("cooler")}
                    placeholder="Кулер"
                    data={coolerId || [""]}
                    required
                    error={form.errors.cooler}
                    formData={form.values.cooler}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("motherboard")}
                    placeholder="Материнская плата"
                    data={motherboardId || [""]}
                    required
                    error={form.errors.motherboard}
                    formData={form.values.motherboard}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("ram")}
                    placeholder="ОЗУ"
                    data={ramId || [""]}
                    required
                    error={form.errors.ram}
                    formData={form.values.ram}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("videoCard")}
                    placeholder="Видео карта"
                    data={videoCardId || [""]}
                    required
                    error={form.errors.videoCard}
                    formData={form.values.videoCard}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("hdd")}
                    placeholder="HHD диск"
                    data={hddId || [""]}
                    required
                    error={form.errors.hdd}
                    formData={form.values.hdd}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("disk1")}
                    placeholder="Диск 1"
                    data={disk1Id || [""]}
                    required
                    error={form.errors.disk1}
                    formData={form.values.disk1}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("disk2")}
                    placeholder="Диск 2"
                    data={disk2Id || [""]}
                    required
                    error={form.errors.disk2}
                    formData={form.values.disk2}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("dvd")}
                    placeholder="DVD"
                    data={dvdId || [""]}
                    required
                    error={form.errors.dvd}
                    formData={form.values.dvd}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("soundCard")}
                    placeholder="Звуковая карта"
                    data={soundCardId || [""]}
                    required
                    error={form.errors.soundCard}
                    formData={form.values.soundCard}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("mouse")}
                    placeholder="Мышка"
                    data={mouseId || [""]}
                    required
                    error={form.errors.mouse}
                    formData={form.values.mouse}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("keyboard")}
                    placeholder="Клавиатура"
                    data={keyboardId || [""]}
                    required
                    error={form.errors.keyboard}
                    formData={form.values.keyboard}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("monitor")}
                    placeholder="Монитор"
                    data={monitorId || [""]}
                    required
                    error={form.errors.monitor}
                    formData={form.values.monitor}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <CustomSelect
                    {...form.getInputProps("headset")}
                    placeholder="Гарнитура"
                    data={headsetId || [""]}
                    required
                    error={form.errors.headset}
                    formData={form.values.headset}
                />
            </Grid.Col>
        </Grid>
    );
};
