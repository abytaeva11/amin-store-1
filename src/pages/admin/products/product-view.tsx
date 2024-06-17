import { Container, Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ProductDetails } from "src/modules";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";

type Params = {
    productId: string;
};

export const ProductView = () => {
    const { productId } = useParams<Params>();
    const title = "Подробный просмотр товара";
    usePageTitle(title);

    return (
        <CustomAppShell>
            <Container size="xl">
                <Center>
                    <Title c="white" fw="normal" mb="1rem">
                        {title}
                    </Title>
                </Center>
                {productId && <ProductDetails productId={productId} />}
            </Container>
        </CustomAppShell>
    );
};
