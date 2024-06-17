// import { apiSlice } from "src/store";
// import { saveAs } from 'file-saver'

// const FileRequest = (
//     init: FormData,
//     files: Record<string, File | FileList | null>
// ) => {
//     for (const [key, value] of Object.entries(files)) {
//         if (value == null) continue;
//         if (value instanceof Blob) {
//             init.append(key, value);
//             continue;
//         }
//         for (let index = 0; index < value.length; index++) {
//             const file = value?.item(index);
//             if (file) init.append(`${key}`, file);
//         }
//     }
// };

// export const customApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         listener: builder.query({
//             query: ({ path, body, method = "POST", cache = "default" }) => ({
//                 url: `${path}`,
//                 method,
//                 body,
//                 cache,
//             }),
//             providesTags: (result, _error, arg) =>
//                 !!result || !!arg
//                     ? arg.tags
//                         ? arg.tags
//                         : [arg.path.split("/")[0]]
//                     : [],
//         }),
//         speaker: builder.mutation({
//             query: ({ path, body, method = "POST", cache = "default" }) => ({
//                 url: `${path}`,
//                 method,
//                 body,
//                 cache,
//             }),
//             invalidatesTags: (result, _error, arg) =>
//                 !!result || !!arg
//                     ? arg.tags
//                         ? arg.tags
//                         : [arg.path.split("/")[0]]
//                     : [],
//         }),
//         getRequest: builder.query({
//             query: ({ path }) => ({
//                 url: `${path}`,
//                 method: "GET",
//                 keepUnusedDataFor: 1,
//             }),
//             providesTags: (result, _error, arg) =>
//                 !!result || !!arg
//                     ? arg.tags
//                         ? arg.tags
//                         : [arg.path.split("/")[0]]
//                     : [],
//         }),
//         requestWithFormData: builder.mutation({
//             query: ({
//                 path,
//                 body,
//                 requestPartName = "request",
//                 method = "POST",
//                 ...rest
//             }) => {
//                 const { attachments = undefined, ...otherBody } = body;
//                 const newBody = new FormData();
//                 if (otherBody) {
//                     newBody.append(
//                         requestPartName,
//                         new Blob([JSON.stringify(otherBody)], {
//                             type: "application/json",
//                         })
//                     );
//                 }
//                 if (attachments !== undefined) {
//                     FileRequest(newBody, { attachments: attachments });
//                 }
//                 return {
//                     url: `${path}`,
//                     method: method,
//                     body: newBody,
//                     ...rest,
//                 };
//             },
//             invalidatesTags: (result, _error, arg) => {
//                 return result
//                     ? arg.tags
//                         ? arg.tags
//                         : [arg.path.split("/")[0]]
//                     : [];
//             },
//         }),
//         getSelect: builder.query<any, string>({
//             query: (path) => ({
//                 url: `${path}`,
//                 method: "GET",
//             }),
//         }),
//         getFile: builder.query({
//             query: ({ path, body, method = "GET" }) => ({
//                 url: `${path}`,
//                 method,
//                 body,
//                 responseHandler: async (response) => {
//                     const blob: Blob = await response.blob();
//                     const stream = new Blob([blob], {
//                         type: response.headers.get("content-type") ?? undefined,
//                     });
//                     return URL.createObjectURL(stream);
//                 },
//             }),
//         }),
//         downloadFile: builder.query({
//             query: ({ path, name, body, method = "GET" }) => ({
//                 url: path,
//                 method,
//                 body,
//                 responseHandler: async (response) => {
//                     saveAs(await response.blob(), name);
//                 },
//             }),
//         }),
//         searchRequest: builder.query({
//             query: ({
//                 path,
//                 queries,
//                 cache = "no-cache",
//             }: {
//                 path: string;
//                 queries: string;
//                 cache?: RequestCache;
//                 tags?: any;
//             }) => {
//                 return {
//                     url: `${path}?${queries}`,
//                     method: "GET",
//                     cache: cache,
//                 }
//             },
//             providesTags: (result, _error, arg) =>
//                 !!result || !!arg
//                     ? arg.tags
//                         ? arg.tags
//                         : [arg.path.split("/")[0]]
//                     : [],
//         }),
//     }),
//     overrideExisting: true,
// });

export const a = 1 