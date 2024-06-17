export { store } from './store'
export { apiSlice } from './apiSlice'
export type { SidebarState } from './slices'
export type { AppDispatch, RootState } from './store'
export {
    authReducer,
    authSlice,
    logOut,
    setCredentials,
    sidebarPath,
    sidebarReducer,
    sidebarSlice,
    authSelector,
} from './slices'

export {
    authApiSlice,
    // customApiSlice,
    searchApiSlice,
    useLazySearchRequestQuery,
    useLoginMutation,
    useVerifyMutation,
    useSearchRequestQuery,
    productApiSlice,
    useCreateProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useSearchProductMutation,
    useUpdateProductMutation,
    feedbackApiSlice,
    useCreateFeedbackMutation,
    useDeleteFeedbackMutation,
    useGetAllFeedbacksQuery,
    useGetFeedbackQuery,
    deliveryApiSlice,
    useCreateDeliveryMutation,
    useDeleteDeliveryMutation,
    useGetAllDeliveryQuery,
    useGetDeliveryQuery,
    useSearchDeliveryMutation,
    useCreateOrderMutation,
    useDeleteOrderMutation,
    useGetAllOrdersQuery,
    useSearchOrdersMutation,
    useGetOrderQuery,
    orderApiSlice,
    computerApiSlice,
    useCreateComputerMutation,
    useDeleteComputerMutation,
    useGetAllComputersQuery,
    useGetComputerQuery,
    useSearchComputerMutation,
    useUpdateComputerMutation,
    useGetAllProductsQuery,
    useUpdateDeliveryMutation,
    useUpdateOrderMutation
} from './api-slices'

