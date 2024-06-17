export { baseApi, Path } from './endpoints'
export { routes } from './route-config'
export { RequireAuth } from './require-auth'
export { notify } from './notify'
export { selectGenerator } from './product'


export const objectToUrlParams = (obj: any) => {
    const params = new URLSearchParams();
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value !== null && value !== undefined && value !== "") {
                params.append(key, value);
            }
        }
    }
    return params.toString();
};
