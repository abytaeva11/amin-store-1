import { useState } from "react";
import { Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
    AppTable,
    CustomModal,
    MenuDropDown
} from "src/components";
import { Path, notify } from "src/utils";
import { useDeleteDeliveryMutation } from "src/store";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


export const DeliveryTable = ({ filter }: { filter?: DeliveryFilterType }) => {
    const navigate = useNavigate();

    const [deliveryDelete] = useDeleteDeliveryMutation();

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
            await deliveryDelete(id)
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
            to: `/admin/delivery/${id}/edit-delivery`,
        },
        {
            icon: FaEye,
            title: "Подробнее",
            to: `/admin/delivery/${id}`,
        },
        {
            icon: FaRegTrashAlt,
            title: "Удалить",
            onClick: () => handleOpen(id),
        },
    ];

    const headCells: HeadCell<DeliveryType>[] = [
        {
            label: "Номер",
            render: el => el.id,
        },

        {
            label: "Товар",
            render: el => el.order.product.title,
        },
        {
            label: "Адрес доставки",
            render: el => `${el.order.city} ${el.order.street} ${el.order.houseOrComplex} ${el.order?.homeNumber}`,
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
            <AppTable<DeliveryType>
                headCells={headCells}
                doubleClickPath={(n) => navigate(`${n.id}`)}
                searchApiUrl={Path.Delivery.search}
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
