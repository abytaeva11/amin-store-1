import { Center, Title } from "@mantine/core";
import { ComputerForm } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

export const AddComputer = () => {
    const title = "Добавить компьютер";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Center>
                <Title fw="normal" c="white" mb="1rem">
                    {title}
                </Title>
            </Center>
            <ComputerForm />
        </CustomAppShell>
    );
};
