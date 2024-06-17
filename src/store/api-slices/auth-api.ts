import { apiSlice } from "src/store";
import { Path } from "src/utils";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: Path.Auth.signIn,
                method: "POST",
                body: { ...credentials },
            }),
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: Path.Auth.verify,
                method: "POST",
                body: { ...data },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useVerifyMutation
} = authApiSlice;
