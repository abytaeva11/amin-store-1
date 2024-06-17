import { apiSlice } from "src/store";

export const searchApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchRequest: builder.query<SearchResponseType<any>, unknown>({
            query: ({ path }) => ({
                url: path,
                method: "GET",
                cache: "no-cache",
            }),
            providesTags: [],
        }),
    }),
});

export const { useLazySearchRequestQuery, useSearchRequestQuery } =
    searchApiSlice;
