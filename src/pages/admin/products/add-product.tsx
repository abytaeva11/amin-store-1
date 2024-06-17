import { Center, Title } from "@mantine/core";
import { ProductForm } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

export const AddProduct = () => {
    const title = "Добавить товар";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Center>
                <Title fw="normal" c="white" mb="1rem">
                    {title}
                </Title>
            </Center>
            <ProductForm />
        </CustomAppShell>
    );
};
