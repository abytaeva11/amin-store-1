declare interface RouteList {
    path: string;
    element: JSX.Element;
    isPublic: boolean
}

declare interface LoginReqType {
    username: string;
    password: string
}


declare type HeadCell<E> = {
    label: string;
    sort?: string;
    display?: boolean;
    render?: (entity: E) => ReactNode;
    afterRender?: Boolean;
};


declare type SearchResponse<T> = {
    content: T[];
}

declare type SearchRequest<T> = {
    filter?: T;
    pageRequest?: {
        limit?: number | null;
        page?: number | null;
    };
    sorting?: {
        sortBy?: string | null;
        sortDirection?: string | null;
    };
}

declare type MenuItemType = {
    key?: number;
    icon?: any;
    title: string;
    to?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    display?: boolean;
    roadmapId?: number;
};


declare type SearchResponseType<T> = {
    count: number;
    next: string;
    previous: string;
    results: T[]
}