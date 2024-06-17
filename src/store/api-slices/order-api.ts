import { apiSlice } from "src/store/apiSlice";
import { Path } from "src/utils";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation<OrderType, OrderFormType>({
            query: (body) => {
                return {
                    url: Path.Orders.create,
                    method: "POST",
                    body,
                };
            },
        }),
        updateOrder: builder.mutation<
            OrderType,
            { id: number; body: Partial<OrderFormType> }
        >({
            query: ({ id, body }) => ({
                url: Path.Orders.update(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Orders"],
        }),
        getOrder: builder.query<OrderType, string>({
            query: (id) => ({
                url: Path.Orders.get(id),
            }),
            providesTags: ["Product"],
        }),
        getAllOrders: builder.query<OrderType[], unknown>({
            query: () => Path.Orders.getAll,
            providesTags: ["Orders"],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: Path.Orders.delete(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"],
        }),
        searchOrders: builder.mutation<
            SearchResponse<OrderType>,
            OrderSearchType
        >({
            query: (queries) => ({
                url: `${Path.Orders.search}?${queries}`,
                method: "GET",
                cache: "no-store",
            }),
            invalidatesTags: ["Orders"],
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useDeleteOrderMutation,
    useGetAllOrdersQuery,
    useSearchOrdersMutation,
    useGetOrderQuery,
    useUpdateOrderMutation
} = orderApiSlice;
