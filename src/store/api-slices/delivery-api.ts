import { apiSlice } from "src/store/apiSlice";
import { Path } from "src/utils";

export const deliveryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createDelivery: builder.mutation<DeliveryType, DeliveryFormType>({
            query: ({
                ...body
            }) => {
                return {
                    url: Path.Delivery.create,
                    method: "POST",
                    body,
                };
            },
        }),
        updateDelivery: builder.mutation<
            DeliveryType,
            { id: number; body: Partial<DeliveryFormType> }
        >({
            query: ({ id, body }) => ({
                url: Path.Delivery.update(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Delivery"],
        }),
        getDelivery: builder.query<DeliveryType, string>({
            query: (id) => ({
                url: Path.Delivery.get(id),
            }),
            providesTags: ["Product"],
        }),
        getAllDelivery: builder.query<DeliveryType[], unknown>({
            query: () => Path.Delivery.getAll,
            providesTags: ["Delivery"],
        }),
        deleteDelivery: builder.mutation({
            query: (id) => ({
                url: Path.Delivery.delete(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Delivery"],
        }),
        searchDelivery: builder.mutation<
            SearchResponse<DeliveryType>,
            DeliverySearchType
        >({
            query: (queries) => ({
                url: `${Path.Delivery.search}?${queries}`,
                method: "GET",
                cache: "no-store",
            }),
            invalidatesTags: ["Delivery"],
        }),
    }),
});

export const {
    useCreateDeliveryMutation,
    useDeleteDeliveryMutation,
    useGetAllDeliveryQuery,
    useGetDeliveryQuery,
    useSearchDeliveryMutation,
    useUpdateDeliveryMutation
} = deliveryApiSlice;
