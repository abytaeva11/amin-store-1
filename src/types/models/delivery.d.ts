
declare interface DeliveryType {
    id: number
    order: OrderType
    active: boolean;
    status: string
}
declare interface DeliveryFormType {
    order: number;
    status?: string;
    active: boolean;
}
declare interface DeliveryFilterType {
    fullName: string;
    publishedAt: Date;
    city: string;
    phoneNumber: string;
    product: number; //productId
    active: boolean;
}

declare interface DeliverySearchType {
    filter: DeliveryFilterType;
    pageRequest: {
        page: number;
        limit: number;
    };
    sort: {
        sortBy: "PUBLISHED_AT" | "importance"
        sortDirection: "ASC" | "DESC"
    };
};


