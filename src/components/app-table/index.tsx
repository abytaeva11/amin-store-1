import { useCallback, useEffect, useState } from "react";
import {
    Flex,
    Group,
    Pagination,
    Paper,
    ScrollArea,
    Select,
    Table,
    Text,
} from "@mantine/core";
import { CustomLoader, HoverText } from "src/components";
import { useDeepEqualMemo } from "src/hooks";
import { useGetAllFeedbacksQuery, useLazySearchRequestQuery } from "src/store";
import { createStyles } from "@mantine/styles";
import { Path, objectToUrlParams } from "src/utils";

type Props<E> = {
    headCells: HeadCell<E>[];
    searchApiUrl?: string;
    onRowClick?: (row: E) => void;
    extraFilter?: any;
    doubleClickPath?: (row: E) => void;
};

const rowsPerPageOptions = ["10", "20"];

export const AppTable = <Entity extends {}>({
    headCells,
    searchApiUrl,
    onRowClick,
    extraFilter,
    doubleClickPath,
}: Props<Entity>) => {
    const [data, setData] = useState<SearchResponseType<Entity>>()
    const [searchRequest, { data: searchData, isLoading, isError }] = useLazySearchRequestQuery();
    const { data: feedBackData } = useGetAllFeedbacksQuery({})
    const [pagination, setPagination] = useState({ limit: 10, offset: 0 })
    const localFilter = useDeepEqualMemo(extraFilter);
    const { classes } = useStyles();
    const initResponse = {
        count: 0,
        next: "",
        previous: "",
        results: []
    };
    const search = useCallback(async () => {
        const searchQueries = objectToUrlParams({
            ...localFilter,
            limit: pagination.limit,
            offset: pagination.offset,
        });
        const url = `${searchApiUrl}?${searchQueries}`;
        if (searchApiUrl !== Path.Feedback.getAll) {
            return await searchRequest({ path: url });
        }
    }, [searchRequest, searchApiUrl, localFilter, pagination]);

    const handleChangeRowsPerPage = (event: string | null) => {
        if (event) {
            setPagination(prev => ({ limit: parseInt(event), offset: prev.offset }));
        }
    };
    const handleChangePage = (page: number) => {
        setPagination(prev => ({ limit: prev.limit, offset: (page - 1) * prev.limit }));
    }
    useEffect(() => {
        search();
    }, [localFilter, search, pagination]);
    useEffect(() => {
        if (searchApiUrl !== Path.Feedback.getAll && searchData) {
            setData(searchData);
        } else if (feedBackData) {
            setData({
                count: feedBackData?.length,
                next: "",
                previous: "",
                //@ts-ignore
                results: feedBackData as Entity[]
            });
        } else {
            setData(initResponse)
        }
    }, [searchData, feedBackData, searchApiUrl]);
    const handleRowClick = (row: Entity) => onRowClick?.(row);
    const handleDoubleClick = (row: Entity) => doubleClickPath?.(row);

    const ths = (
        <Table.Tr p={10}>
            {headCells.map((headCell) => {
                if (!headCell.display) {
                    return <Table.Th c="white" key={headCell.label}>{headCell.label}</Table.Th>;
                } else return null;
            })}
        </Table.Tr>
    );

    const rows =
        data && data?.results?.map((row: Entity, index: number) => (
            <tr
                key={index}
                onDoubleClick={() => handleDoubleClick(row)}
                onClick={() => handleRowClick(row)}
            >
                {headCells.map((cell) => {
                    if (!cell.display) {
                        const value = cell.render?.(row);
                        return (
                            <Table.Td
                                key={cell.label}
                                c="white"
                                style={{
                                    padding: "10px",
                                    maxWidth: "230px",
                                    whiteSpace: "nowrap",
                                    overflowX: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {value && value.toString().length > 50 ? (
                                    <HoverText
                                        width="auto"
                                        text={`${value.toString().slice(0, 50)}...`}
                                        hoverText={value} />
                                ) : value ?? "-"}
                            </Table.Td>
                        );
                    } else return null;
                })}
            </tr>
        ));

    return (
        <Paper radius="md" bg="rgba(33, 41, 54, 0.7)" className={classes.paper}>
            <ScrollArea
                offsetScrollbars
                scrollbarSize={8}
                style={{ width: "100%", minHeight: "33rem" }}
            >
                {isLoading ? <CustomLoader /> : null}
                {isError || !data?.results || !data?.results[0] ? (
                    <Flex align="center" c="white" justify="center">
                        Не найдено
                    </Flex>
                ) : (
                    <Table
                        withRowBorders
                        withColumnBorders
                        striped
                    >
                        <Table.Thead>{ths}</Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                )}
            </ScrollArea>
            <Group style={{ display: "flex", justifyContent: "right" }}>
                <Flex gap={10} align="center">
                    <Text c="white" style={{ fontSize: 13 }}>
                        Рядов на странице:  {" "}
                    </Text>
                    <Select
                        bg="black"
                        w={70}
                        ta="center"
                        size="xs"
                        data={rowsPerPageOptions}
                        value={`${pagination.limit}`}
                        onChange={(e) => handleChangeRowsPerPage(e)}
                    />
                    <Pagination
                        total={Math.ceil((data?.count || 1) / pagination.limit)}
                        onChange={handleChangePage}
                        radius="lg"
                        color="white"
                        size="sm"
                    />
                </Flex>
            </Group>
        </Paper>
    );
};

const useStyles = createStyles(() => ({
    paper: {
        padding: "1rem",
        minWidth: "100%",
        minHeight: "37.8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
    },
}));
