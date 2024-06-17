import { Container, Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { FeedbackDetails } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

type Params = {
    feedbackId: string;
};

export const FeedbackView = () => {
    const { feedbackId } = useParams<Params>();
    const title = "Подробный просмотр отзыва";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Container size="xl">
                <Center>
                    <Title fw="normal" mb="1rem">
                        {title}
                    </Title>
                </Center>
                {feedbackId && <FeedbackDetails feedbackId={feedbackId} />}
            </Container>
        </CustomAppShell>
    );
};
