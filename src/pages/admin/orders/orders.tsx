import { useEffect, useState } from "react";
import { Button, Title } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";
import { OrdersFilter, OrdersTable } from "src/modules/admin/orders";

export const OrdersPage = () => {
    const navigate = useNavigate();
    const title = "Заказы";
    usePageTitle(title);

    const [open, setOpen] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<OrderFilterType | undefined>(
        // @ts-ignore
        Object.fromEntries([...searchParams])
    );

    useEffect(() => {
        // @ts-ignore
        const url = Object.fromEntries([...searchParams]);
        // @ts-ignore
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
                    Поиск заказа
                </Button>
                <Button bg="#212936" c="white"
                    variant="default"
                    radius={10}
                    onClick={() => navigate("/admin/orders/add-order")}
                >
                    Добавить новый заказ
                </Button>
            </Button.Group>
            <OrdersTable filter={filter} />
            <OrdersFilter
                open={open}
                filter={filter}
                onReset={onReset}
                setSearchParams={setSearchParams}
                handleClose={() => setOpen(false)}
            />
        </CustomAppShell>
    );
};
