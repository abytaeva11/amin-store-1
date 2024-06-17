import { useState } from "react";
import { Image, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
    AppTable,
    CustomModal,
    MenuDropDown
} from "src/components";
import { Path, notify } from "src/utils";
import { useDeleteProductMutation } from "src/store";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


export const ProductTable = ({ filter }: { filter?: ProductFilterType }) => {
    const navigate = useNavigate();

    const [productDelete] = useDeleteProductMutation();

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
            await productDelete(id)
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
            to: `/admin/product/${id}/edit-product`,
        },
        {
            icon: FaEye,
            title: "Подробнее",
            to: `/admin/product/${id}`,
        },
        {
            icon: FaRegTrashAlt,
            title: "Удалить",
            onClick: () => handleOpen(id),
        },
    ];

    const headCells: HeadCell<ProductType>[] = [
        {
            label: "Название",
            render: el => el.title,
        },
        {
            label: "Категория",
            render: el => el.category,
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
            <AppTable<ProductType>
                headCells={headCells}
                doubleClickPath={(n) => navigate(`/admin/product/${n.id}`)}
                searchApiUrl={Path.Product.search}
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
