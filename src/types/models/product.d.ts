declare interface ProductType {
    id: number;
    title: string;
    sub_title: string;
    description?: string;
    price?: string;
    brand?: string;
    model?: string;
    category: string;
    year?: number;
    powerScale?: number;
    importance?: number;
    img: string;
    sale: string;
    active?: boolean;
}

declare interface ProductFormType {
    title: string;//
    sub_title: string;//
    description: string;//
    price: string;//
    brand: string;//
    model: string;//
    category: string;//
    year: number;//
    img: any;
    powerScale?: number;//
    importance?: number;//
    sale: string;//
    active: boolean;//
    date: string
}
declare interface ProductFilterType {
    title?: string;
    sub_title?: string;
    description?: string; // by keywords
    brand?: string;
    model?: string;
    price?: string;
    sale?: string;
    category?: string;
    year?: string;
    active?: boolean
    ordering?: string;
    limit?: number;
    offset?: number;
    search?: string
}