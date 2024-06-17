import { useState } from "react";
import { Image, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
    AppTable,
    CustomModal,
    MenuDropDown
} from "src/components";
import { Path, notify } from "src/utils";
import { useDeleteComputerMutation } from "src/store";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


export const ComputerTable = ({ filter }: { filter?: ComputerFilterType }) => {
    const navigate = useNavigate();

    const [computerDelete] = useDeleteComputerMutation();

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
            await computerDelete(id)
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
            to: `/admin/computers/${id}/edit-computer`,
        },
        {
            icon: FaEye,
            title: "Подробнее",
            to: `/admin/computers/${id}`,
        },
        {
            icon: FaRegTrashAlt,
            title: "Удалить",
            onClick: () => handleOpen(id),
        },
    ];

    const headCells: HeadCell<ComputerType>[] = [
        {
            label: "Название",
            render: el => el.title,
        },
        {
            label: "Бренд",
            render: el => el.brand,
        },
        {
            label: "Модель",
            render: el => el.model,
        },
        {
            label: "Цена",
            render: el => el.price,
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
            <AppTable<ComputerType>
                headCells={headCells}
                doubleClickPath={(n) => navigate(`${n.id}`)}
                searchApiUrl={Path.Computer.search}
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
