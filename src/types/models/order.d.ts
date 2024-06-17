declare interface OrderType {
    id: number;
    city: string;
    street?: string;
    houseOrComplex?: string;
    homeNumber: number;
    phoneNumber: string;
    fullName: string;
    willBeDeliveredAt?: string;
    product: ProductType;
    email: string;
    importance: number;
    active: boolean;
}

declare interface OrderFormType {
    city: string;
    street?: string;
    houseOrComplex?: string;
    homeNumber?: number;
    email?: string;
    phoneNumber: string;
    fullName: string;
    willBeDeliveredAt?: Date;
    product?: number;
    importance?: number;
    active: boolean;
}
declare interface OrderFilterType {
    fullName?: string;
    // createdAt?: Date;
    city?: string;
    phoneNumber?: string;
    product?: number; //search in productIds list
    // willBeDeliveredAt?: Date;
    active: boolean;
}

declare interface OrderSearchType {
    filter: OrderFilterType;
    pageRequest: {
        page: number;
        limit: number;
    };
    sort: {
        sortBy: "PUBLISHED_AT" | "importance"
        sortDirection: "ASC" | "DESC"
    };
};
