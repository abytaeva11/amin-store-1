
declare interface ComputerType {
    id: number;
    title: string;
    description?: string;
    price?: string;
    brand?: string;
    model?: string;
    year: number;
    category: string;
    image?: string;
    powerScale: number;
    importance: number;
    is_game: boolean;
    active: boolean;
    sale?: number;
    cpu: ProductType;
    cooler: ProductType;
    motherboard: ProductType;
    ram: ProductType;
    videoCard: ProductType;
    hdd: ProductType;
    disk1: ProductType;
    disk2: ProductType;
    dvd: ProductType;
    body: ProductType;
    powerUnit: string;
    wifi: string;
    soundCard: ProductType;
    operatingSystem: string;
    mouse: ProductType;
    keyboard: ProductType;
    monitor: ProductType;
    headset: ProductType;
}

declare interface ComputerFormType {
    title: string;
    description?: string;
    price: string;
    brand: string;
    model: string;
    year?: number;
    category: string;
    image?: any;
    powerScale?: number;
    importance?: number;
    is_game: boolean;
    active: boolean;
    sale?: number;
    cpu?: string;
    cooler?: string;
    motherboard?: string;
    ram?: string;
    videoCard?: string;
    hdd?: string;
    disk1?: string;
    disk2?: string;
    dvd?: string;
    soundCard?: string;
    mouse?: string;
    keyboard?: string;
    monitor?: string;
    headset?: string;
    body?: string;
    wifi: string;
    powerUnit: string;
    operatingSystem: string;
}

declare interface ComputerFilterType {
    title?: string;
    description?: string; // by keywords
    brand?: string;
    model?: string;
    price?: string; // by range (100 - 1000)
    sale?: number;
    is_game?: boolean;
    year?: number;
    active?: boolean;
    productId?: number; // filter by productId
}

declare interface ComputerSearchType {
    filter: ComputerFilterType;
    pageRequest: {
        page: number;
        limit: number;
    }
    sort: {
        sortBy: "powerScale" | "PUBLISHED_AT" | "importance" | "year"
        sortDirection: "ASC" | "DESC"
    }
}