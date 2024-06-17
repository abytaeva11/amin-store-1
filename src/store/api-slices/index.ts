
export {
    searchApiSlice,
    useLazySearchRequestQuery,
    useSearchRequestQuery
} from './search-api'
// export { customApiSlice } from './custom-api'
export {
    productApiSlice,
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useSearchProductMutation,
    useUpdateProductMutation,
    useGetAllProductsQuery
} from './product-api'

export {
    feedbackApiSlice,
    useCreateFeedbackMutation,
    useDeleteFeedbackMutation,
    useGetAllFeedbacksQuery,
    useGetFeedbackQuery,
} from './feedback-api'

export {
    useCreateDeliveryMutation,
    useDeleteDeliveryMutation,
    useGetAllDeliveryQuery,
    useGetDeliveryQuery,
    useSearchDeliveryMutation,
    deliveryApiSlice,
    useUpdateDeliveryMutation
} from './delivery-api'

export {
    useCreateOrderMutation,
    useDeleteOrderMutation,
    useGetAllOrdersQuery,
    useSearchOrdersMutation,
    useGetOrderQuery,
    orderApiSlice,
    useUpdateOrderMutation
} from './order-api'

export {
    computerApiSlice,
    useCreateComputerMutation,
    useDeleteComputerMutation,
    useGetAllComputersQuery,
    useGetComputerQuery,
    useSearchComputerMutation,
    useUpdateComputerMutation
} from './computer-api'

export {
    authApiSlice,
    useLoginMutation,
    useVerifyMutation
} from './auth-api'