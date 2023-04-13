export interface ICategory {
    id: number;
    name: string;
    icon: string;
}

export interface ITemplate {
    category: number;
    title: string;
    description: string;
    href: string;
}