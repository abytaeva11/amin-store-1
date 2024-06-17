import {
    Container,
    Grid,
    Modal,
    Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useCreateComputerMutation, useUpdateComputerMutation, } from "src/store";
import { notify } from "src/utils";
import { ButtonGroup } from "src/components";
import { GeneralForm } from "./general-form";
import { useState } from "react";
import { DetailForm } from "./detail-form";
import { PRODUCT } from "src/constants";
import { convertToBase64 } from "src/utils/content-functions";

type Props = {
    computer?: ComputerType;
};

export const ComputerForm = ({ computer }: Props) => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0)
    const [createProduct] = useCreateComputerMutation();
    const [updateProduct] = useUpdateComputerMutation();

    const handleChangeActive = () => {
        setActiveSection(activeSection === 0 ? 1 : 0)
    }
    const [opened, { close, open }] = useDisclosure(false);

    const form = useForm<ComputerFormType>({
        initialValues: {
            title: computer?.title || "title",
            description: computer?.description || "description",
            price: computer?.price || "price",
            brand: computer?.brand || "brand",
            model: computer?.model || "model",
            year: computer?.year || 2023,
            category: PRODUCT.computer,
            image: null,
            powerScale: computer?.powerScale || 4,
            importance: computer?.importance || 20,
            is_game: computer?.is_game || false,
            active: computer?.active || true,
            sale: computer?.sale || 0,
            cpu: `${computer?.cpu.id}`,
            cooler: `${computer?.cooler.id}`,
            motherboard: `${computer?.motherboard.id}`,
            ram: `${computer?.ram.id}`,
            videoCard: `${computer?.videoCard.id}`,
            hdd: `${computer?.hdd.id}`,
            disk1: `${computer?.disk1.id}`,
            disk2: `${computer?.disk2.id}`,
            dvd: `${computer?.dvd.id}`,
            body: `${computer?.body.id}`,
            soundCard: `${computer?.soundCard.id}`,
            mouse: `${computer?.mouse.id}`,
            keyboard: `${computer?.keyboard.id}`,
            monitor: `${computer?.monitor.id}`,
            headset: `${computer?.headset.id}`,
            operatingSystem: computer?.operatingSystem || "operatingSystem",
            wifi: computer?.wifi || "wifi",
            powerUnit: computer?.powerUnit || "powerUnit",
        },
    });

    const handleSubmit = async ({ image, ...values }: ComputerFormType) => {
        const convertedImage = await convertToBase64(image[0])
        if (computer) {
            try {
                await updateProduct({ id: computer.id, body: { image: convertedImage, ...values } }).unwrap()
                notify(true, "Обновлён")
                navigate(-1);
            } catch {
                notify(false)
            }
        } else {
            try {
                await createProduct({ image: convertedImage, ...values, }).unwrap()
                notify(true, "Сохранен")
                form.reset();
                navigate(-1);
            } catch (error) {
                notify(false)
            }
        }
    };

    return (
        <Container size="xl">
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Paper bg="rgba(33, 41, 54, 0.7)" shadow="sm" p="xl">
                    <Grid justify="space-between">
                        <Grid.Col span={12}>
                            {
                                activeSection === 0 ?
                                    <GeneralForm onClick={handleChangeActive} form={form} /> :
                                    <DetailForm onClick={handleChangeActive} form={form} />
                            }
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
