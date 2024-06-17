import { Container, Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ComputerDetails } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

type Params = {
    computerId: string;
};

export const ComputerView = () => {
    const { computerId } = useParams<Params>();
    const title = "Подробный просмотр компьютера";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Container size="xl">
                <Center>
                    <Title c="white" fw="normal" mb="1rem">
                        {title}
                    </Title>
                </Center>
                {computerId && <ComputerDetails computerId={computerId} />}
            </Container>
        </CustomAppShell>
    );
};
