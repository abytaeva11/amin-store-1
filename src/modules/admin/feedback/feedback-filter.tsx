import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Grid } from "@mantine/core";
import { ButtonGroup, CustomInputNumber, CustomInputText, CustomModal } from "src/components";

type Props = {
    open: boolean;
    filter?: FeedbackFilterType;
    handleClose: () => void;
    onReset: () => void;
    setSearchParams: Function;
};

export const FeedbackFilter = ({
    open,
    filter,
    handleClose,
    onReset,
    setSearchParams,
}: Props) => {

    const form = useForm<FeedbackFilterType>({
        initialValues: {
            description: "",
            stars: 0,
            title: "",
        },
    });

    useEffect(() => {
        if (filter) {
            form.setValues({
                description: filter.description || "",
                stars: filter.stars || 0,
                title: filter.title || ""
            });
        }
    }, [filter]);

    const onClickReset = () => {
        form.reset();
        handleClose();
        onReset();
    };

    const handleSubmit = async (values: FeedbackFilterType) => {
        form.reset();
        handleClose();
        for (let key in values) {
            if (values[key as keyof FeedbackFilterType] === "") {
                delete values[key as keyof FeedbackFilterType];
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
                        <CustomInputText
                            {...form.getInputProps("title")}
                            label="Заголовка"
                            error={form.errors.title}
                            formData={form.values.title}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <CustomInputNumber
                            {...form.getInputProps("stars")}
                            label="Звезды"
                            error={form.errors.stars}
                            formData={form.values.stars}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <CustomInputText
                            {...form.getInputProps("description")}
                            label="Описание"
                            error={form.errors.description}
                            formData={form.values.description}
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
