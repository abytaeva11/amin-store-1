import { apiSlice } from "src/store/apiSlice";
import { Path } from "src/utils";

export const feedbackApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createFeedback: builder.mutation<FeedbackType, FeedbackFormType>({
            query: ({...data}) => {
                return {
                    url: Path.Feedback.create,
                    method: "POST",
                    body: data,
                };
            },
        }),
        getFeedback: builder.query<FeedbackType, string>({
            query: (id) => ({
                url: Path.Feedback.get(id),
            }),
            providesTags: ["Feedback"],
        }),
        getAllFeedbacks: builder.query<FeedbackType[], unknown>({
            query: () => Path.Feedback.getAll,
            providesTags: ["Feedback"],
        }),
        deleteFeedback: builder.mutation({
            query: (id) => ({
                url: Path.Product.delete(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Feedback"],
        }),
    }),
});

export const {
    useCreateFeedbackMutation,
    useDeleteFeedbackMutation,
    useGetAllFeedbacksQuery,
    useGetFeedbackQuery,
} = feedbackApiSlice;
