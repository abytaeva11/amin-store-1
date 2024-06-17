import { useState } from "react";
import { Box, Image, Paper, Text } from "@mantine/core";
import {
    CustomLoader,
    CustomModal,
    TextInfo,
} from "src/components";
import { useGetFeedbackQuery } from "src/store";
import { createStyles } from "@mantine/styles";

type Props = {
    feedbackId: string;
};

export const FeedbackDetails = ({ feedbackId }: Props) => {
    const { classes } = useStyles();
    const [isOpened, setIsOpened] = useState(false);

    const { data: feedbackData, isLoading } = useGetFeedbackQuery(feedbackId, {
        refetchOnMountOrArgChange: true,
    });

    const data = [
        {
            label: "Фото",
            value: <Image src={feedbackData?.img} />,
        },
        {
            label: "Заголовка",
            value: feedbackData?.title,
        },
        {
            label: "Описание",
            value: feedbackData?.description,
        },
        {
            label: "Звезды",
            value: feedbackData?.stars,
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
                <Box mt={30}>
                    {feedbackData?.img && (
                        <Image
                            mb={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsOpened(true)}
                            src={`data:image/webp;base64,${feedbackData?.img}`}
                            w={"auto"}
                            h={200}
                            alt=""
                        />
                    )}
                    <CustomModal
                        size="xl"
                        labelSubmit={"news.delete"}
                        open={isOpened}
                        handleClose={() => setIsOpened(false)}
                        button={false}
                    >
                        <Image
                            mb={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsOpened(true)}
                            src={`data:image/webp;base64,${feedbackData?.img}`}
                            w={750}
                            alt=""
                        />
                    </CustomModal>
                    <Box className={classes.content}>
                        <Text>{feedbackData?.title}</Text>
                        <Text>{feedbackData?.description}</Text>
                        <Text>{feedbackData?.stars}</Text>
                    </Box>
                </Box>
            </Paper>
        </Paper>
    );
};

const useStyles = createStyles({
    content: {
        "& img": {
            maxWidth: "70rem",
        },
    },
});
