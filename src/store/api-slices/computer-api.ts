import { apiSlice } from "src/store/apiSlice";
import { Path } from "src/utils";

export const computerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createComputer: builder.mutation<ComputerType, ComputerFormType>({
            query: ({ image, ...body }) => {
                const data = {
                    image,
                    cpu: parseInt(body?.cpu || "1"),
                    cooler: parseInt(body?.cooler || "1"),
                    motherboard: parseInt(body?.motherboard || "1"),
                    ram: parseInt(body?.ram || "1"),
                    videoCard: parseInt(body?.videoCard || "1"),
                    hdd: parseInt(body?.hdd || "1"),
                    disk1: parseInt(body?.disk1 || "1"),
                    disk2: parseInt(body?.disk2 || "1"),
                    dvd: parseInt(body?.dvd || "1"),
                    soundCard: parseInt(body?.soundCard || "1"),
                    mouse: parseInt(body?.mouse || "1"),
                    keyboard: parseInt(body?.keyboard || "1"),
                    monitor: parseInt(body?.monitor || "1"),
                    headset: parseInt(body?.headset || "1"),
                    body: parseInt(body?.body || "1"),
                    ...body
                }
                return {
                    url: Path.Computer.create,
                    method: "POST",
                    body: data,
                };
            },
        }),
        updateComputer: builder.mutation<
            ComputerType,
            { id: number; body: Partial<ComputerFormType> }
        >({
            query: ({ id, body }) => ({
                url: Path.Computer.update(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Computer"],
        }),
        getComputer: builder.query<ComputerType, string>({
            query: (id) => ({
                url: Path.Computer.get(id),
            }),
            providesTags: ["Computer"],
        }),
        getAllComputers: builder.query<ComputerType[], unknown>({
            query: () => Path.Computer.getAll,
            providesTags: ["Computer"],
        }),
        deleteComputer: builder.mutation({
            query: (id) => ({
                url: Path.Computer.delete(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Computer"],
        }),
        searchComputer: builder.mutation<
            SearchResponse<ComputerType>,
            ComputerSearchType
        >({
            query: (queries) => ({
                url: `${Path.Computer.search}?${queries}`,
                method: "GET",
                cache: "no-store",
            }),
            invalidatesTags: ["Computer"],
        }),
    }),
});

export const {
    useCreateComputerMutation,
    useDeleteComputerMutation,
    useGetComputerQuery,
    useSearchComputerMutation,
    useUpdateComputerMutation,
    useGetAllComputersQuery
} = computerApiSlice;
