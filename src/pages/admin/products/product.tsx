import { useEffect, useState } from "react";
import { Button, Title } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";
import { ProductFilter, ProductTable } from "src/modules";
import { useGetAllProductsQuery } from "src/store";

export const ProductPage = () => {
    const navigate = useNavigate();
    const title = "Товары";
    usePageTitle(title);

    const [open, setOpen] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<ProductFilterType | undefined>(
        // @ts-ignore
        Object.fromEntries([...searchParams])
    );
    const { data } = useGetAllProductsQuery({})
    useEffect(() => {
        // @ts-ignore
        const url = Object.fromEntries([...searchParams]);
        setFilter(url);
    }, [searchParams]);

    const onReset = () => {
        setSearchParams(new URLSearchParams());
    };

    return (
        <CustomAppShell>
            <Title fw="normal" c="white" mb="1rem">
                {title}
            </Title>
            <Button.Group p={5}>
                <Button bg="#212936" c="white"
                    variant="default"
                    radius={10}
                    onClick={() => setOpen(true)}
                >
                    Поиск товара
                </Button>
                <Button bg="#212936" c="white"
                    variant="default"
                    radius={10}
                    onClick={() => navigate("/admin/products/add-product")}
                >
                    Добавить новый товар
                </Button>
            </Button.Group>
            <ProductTable filter={filter} />
            <ProductFilter
                open={open}
                filter={filter}
                onReset={onReset}
                setSearchParams={setSearchParams}
                handleClose={() => setOpen(false)}
            />
        </CustomAppShell>
    );
};
