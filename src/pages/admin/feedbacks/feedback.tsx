import { useEffect, useState } from "react";
import { Button, Title } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePageTitle } from "src/hooks";
import { CustomAppShell } from "src/components";
import { FeedbackFilter, FeedbackTable } from "src/modules";

export const FeedbacksPage = () => {
    const navigate = useNavigate();
    const title = "Отзывы";
    usePageTitle(title);

    const [open, setOpen] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<FeedbackFilterType | undefined>(
        // @ts-ignore
        Object.fromEntries([...searchParams])
    );

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
                    Поиск отзыва
                </Button>
            </Button.Group>
            <FeedbackTable filter={filter} />
            <FeedbackFilter
                open={open}
                filter={filter}
                onReset={onReset}
                setSearchParams={setSearchParams}
                handleClose={() => setOpen(false)}
            />
        </CustomAppShell>
    );
};
