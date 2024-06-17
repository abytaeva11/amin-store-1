import { apiSlice } from "src/store/apiSlice";
import { Path, objectToUrlParams } from "src/utils";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation<ProductType, ProductFormType>({
            query: (body) => {
                return {
                    url: Path.Product.create,
                    method: "POST",
                    body,
                };
            },
        }),
        updateProduct: builder.mutation<
            ProductType, { id: number; body: Partial<ProductFormType> }
        >({
            query: ({ id, body }) => ({
                url: Path.Product.update(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        getProduct: builder.query<ProductType, string>({
            query: (id) => ({
                url: Path.Product.get(id),
            }),
            providesTags: ["Product"],
        }),
        getAllProducts: builder.query<ProductType[], unknown>({
            query: () => Path.Product.getAll,
            providesTags: ["Product"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: Path.Product.delete(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        searchProduct: builder.mutation<ProductType[], ProductFilterType>({
            query: (queries) => {
                const url = objectToUrlParams(queries)
                return {
                    url: `${Path.Product.search}?${url}`,
                    method: "GET",
                    cache: "no-store",
                }
            },
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useSearchProductMutation,
    useUpdateProductMutation,
    useGetAllProductsQuery
} = productApiSlice;
