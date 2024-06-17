import { useState } from "react";
import { Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
    AppTable,
    CustomModal,
    MenuDropDown
} from "src/components";
import { Path, notify } from "src/utils";
import { useDeleteOrderMutation, useGetProductQuery } from "src/store";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


export const OrdersTable = ({ filter }: { filter?: OrderFilterType }) => {
    const navigate = useNavigate();

    const [orderDelete] = useDeleteOrderMutation();

    const [id, setId] = useState<number | null>();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (id: number) => {
        setOpen(true);
        setId(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {
            await orderDelete(id)
            notify(true, "Успешно удалено")
        } catch (error) {
            notify(false)
        }
        setOpen(false);
    };

    const actions = (id: number) => [
        {
            icon: FaPencilAlt,
            title: "Редактировать",
            to: `/admin/orders/${id}/edit-order`,
        },
        {
            icon: FaEye,
            title: "Подробнее",
            to: `/admin/orders/${id}`,
        },
        {
            icon: FaRegTrashAlt,
            title: "Удалить",
            onClick: () => handleOpen(id),
        },
    ];

    const headCells: HeadCell<OrderType>[] = [
        {
            label: "ФИО заказчика",
            render: el => el.fullName,
        },
        {
            label: "Номер",
            render: el => el.id,
        },
        {
            label: "Товар",
            render: el => el.product.title,
        },
        {
            label: "Действия",
            render: (n) => (
                <MenuDropDown label={"Дейсвия"} item={actions(n.id)} />
            ),
        },

    ];

    return (
        <>
            <AppTable<OrderType>
                headCells={headCells}
                doubleClickPath={(n) => navigate(`${n.id}`)}
                searchApiUrl={Path.Orders.search}
                extraFilter={filter}
            />
            <CustomModal
                labelSubmit={"Удалить"}
                open={open}
                handleClose={handleClose}
                onClick={handleDelete}
            >
                <Title
                    order={3}
                    fw={400}
                    mt="5px"
                    mb="2rem"
                    style={{ textAlign: "center" }}
                >
                    Удалить
                </Title>
            </CustomModal>
        </>
    );
};
