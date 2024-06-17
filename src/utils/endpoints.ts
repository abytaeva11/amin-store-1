

export const baseApi = (url: string) => `/${url}`;

export class Path {
    static Auth = class {
        static signIn = baseApi("api/token/");
        static refreshToken = baseApi("api/token/refresh/");
        static verify = baseApi("api/token/verify/");
    };
    static Product = class {
        static getAll = baseApi("product-list/")
        static get = (id: string) => baseApi(`product-${id}/`);
        static delete = (id: number) => baseApi(`product-${id}/`);
        static create = baseApi(`product-create/`);
        static update = (id: number) => baseApi(`product-${id}/`);
        static search = baseApi(`product-list`);
    };
    static Computer = class {
        static getAll = baseApi("computers-list/")
        static get = (id: string) => baseApi(`computers-${id}/`);
        static delete = (id: number) => baseApi(`computers-${id}/`);
        static create = baseApi(`computers-create/`);
        static update = (id: number) => baseApi(`computers-${id}/`);
        static search = baseApi(`computers-list`);
    };
    static Feedback = class {
        static getAll = baseApi("all-feedbacks-list/")
        static get = (id: string) => baseApi(`feedback/${id}/`);
        static delete = (id: number) => baseApi(`feedback/${id}/delete/`);
        static create = baseApi(`feedback-create/`);
        // static search = baseApi(`feedback-list`);
    };
    static Delivery = class {
        static getAll = baseApi("orders/deliveries-list/")
        static get = (id: string) => baseApi(`orders/delivery-${id}/`);
        static delete = (id: number) => baseApi(`orders/delivery-${id}/`);
        static create = baseApi(`orders/delivery-create/`);
        static update = (id: number) => baseApi(`orders/delivery-${id}`);
        static search = baseApi(`orders/deliveries-list`);
    };
    static Orders = class {
        static getAll = baseApi("orders/orders-list/")
        static get = (id: string) => baseApi(`orders/order-${id}/`);
        static delete = (id: number) => baseApi(`orders/order${id}/`);
        static update = (id: number) => baseApi(`orders/order-${id}/`);
        static create = baseApi(`orders/order-create/`);
        static search = baseApi(`orders/orders-list`);
    };
};
