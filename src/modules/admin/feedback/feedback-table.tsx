import { useState } from "react";
import { Image, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
    AppTable,
    CustomModal,
    MenuDropDown
} from "src/components";
import { Path, notify } from "src/utils";
import { useDeleteFeedbackMutation } from "src/store";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";


export const FeedbackTable = ({ filter }: { filter?: FeedbackFilterType }) => {
    const navigate = useNavigate();
    const [feedbackDelete] = useDeleteFeedbackMutation();

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
            await feedbackDelete(id)
            notify(true, "Успешно удалено")
        } catch (error) {
            notify(false)
        }
        setOpen(false);
    };

    const actions = (id: number) => [
        {
            icon: FaEye,
            title: "Подробнее",
            to: `/product/${id}`,
        },
        {
            icon: FaRegTrashAlt,
            title: "Удалить",
            onClick: () => handleOpen(id),
        },
    ];

    const headCells: HeadCell<FeedbackType>[] = [
        {
            label: "Фото",
            render: el => <Image src={el.img} w={50} />,
        },
        {
            label: "Заголовка",
            render: el => el.title,
        },
        {
            label: "Звезды",
            render: el => el.stars,
        },
        {
            label: "Описание",
            render: el => el.description.slice(0, 25),
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
            <AppTable<FeedbackType>
                headCells={headCells}
                doubleClickPath={(n) => navigate(`${n.id}`)}
                searchApiUrl={Path.Feedback.getAll}
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
