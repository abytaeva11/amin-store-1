declare interface FeedbackType {
    id: number;
    title: string;
    stars: number;
    active: boolean;
    description: string;
    img?: File;
    productId?: number;
}


declare interface FeedbackFormType {
    title: string;
    stars: number;
    active: boolean;
    description: string;
    img?: File;
    productId?: number;
}

declare interface FeedbackFilterType {
    title?: string;
    stars?: number;
    description?: string;
}

declare interface FeedbackSearchRequestType {
    filter: FeedbackFilterType;
    pageRequest: {
        page: number;
        limit: number;
    };
    sort: {
        sortBy: "PUBLISHED_AT"
        sortDirection: "ASC" | "DESC"
    };
};