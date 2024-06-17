import { Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ProductForm } from "src/modules";
import { useGetProductQuery } from "src/store";
import { CustomAppShell, CustomLoader } from "src/components";
import { usePageTitle } from "src/hooks";

type Params = {
    productId: string;
};

export const EditProduct = () => {
    const title = "Редактировать товар";
    usePageTitle(title);

    const { productId } = useParams<Params>();
    const { data, isLoading } = useGetProductQuery(productId as unknown as string, {
        refetchOnMountOrArgChange: !!productId,
    });

    return (
        <CustomAppShell>
            {productId}
            {isLoading ? (
                <CustomLoader />
            ) : (
                data && (
                    <>
                        <Center>
                            <Title c="white" fw="normal" mb="1rem">
                                {title}
                            </Title>
                        </Center>
                        <ProductForm product={data} />
                    </>
                )
            )}
        </CustomAppShell>
    );
};
